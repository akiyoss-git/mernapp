const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const actRoutes = express.Router();
const PORT = 4000;
const wb = require('exceljs')

let Act = require('./act.model');
let Type = require('./type.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/acts', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

actRoutes.route('/').get(function(req, res) {
    Act.find(function(err, acts) {
        if (err) {
            console.log(err);
        } else {
            res.json(acts);
        }
    });
});

actRoutes.route('/types').get(function(req, res) {
    Type.find(function(err, types) {
        if (err) {
            console.log(err);
        } else {
            res.json(types);
        }
    });
});

actRoutes.route('/delete/:id').get(function(req, res) {
    Act.findByIdAndRemove({ _id: req.params.id }, function (err, act) {
        if (err) res.json(err);
        else res.json('act Deleted Successfully');
        })
})

actRoutes.route('/excel').get(function(req, res) {
    Act.find(function(err, acts) {
        if (err) {
            console.log(err);
        } else {
            const workbook = new wb.Workbook();
            const sheet = workbook.addWorksheet('Pricelist');
            sheet.columns = [
                { header: 'Name', key: 'name', width: 30 },
                { header: 'Type', key: 'type', width: 30},
                { header: 'Price', key: 'price', width: 10, outlineLevel: 1}
              ];
            sheet.addRows(acts);
            workbook.xlsx.writeFile("pricelist.xlsx")
            .then(function() {
            console.log("file saved!");
            });
            res.setHeader('Content-Disposition', 'attachment; filename=' + "pricelist.xlsx");
            res.contentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
            res.send("pricelist.xlsx")
        }
    });
})

actRoutes.route('/deletetype/:id').get(function(req, res) {
    Type.findByIdAndRemove({ _id: req.params.id }, function (err, type) {
        if (err) res.json(err);
        else res.json('act Deleted Successfully');
        })
})

actRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Act.findById(id, function(err, todo) {
        res.json(todo);
    });
});

actRoutes.route('/add').post(function(req, res) {
    let act = new Act(req.body);
    act.save()
        .then(act => {
            res.status(200).json({'act': 'act added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

actRoutes.route('/addtype').post(function(req, res) {
    let type = new Type(req.body);
    console.log(req.body)
    type.save()
        .then(act => {
            res.status(200).json({'type': 'type added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

actRoutes.route('/update/:id').post(function(req, res) {
    Act.findById(req.params.id, function(err, act) {
        if (!act)
            res.status(404).send('data is not found');
        else
            act.name = req.body.name;
            act.price = req.body.price;
            act.type = req.body.type;

            act.save().then(act => {
                res.json('act updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/acts', actRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});