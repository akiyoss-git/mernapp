import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Act = props => (
    <tr>
        <td>{props.act.name}</td>
        <td>{props.act.type}</td>
        <td>{props.act.price}</td>
        <td>
            <Link to={"/edit/"+props.act._id}>Edit</Link>
        </td>
    </tr>
)

export default class Pricelist extends Component {

    constructor(props) {
        super(props);
        this.state = {acts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/acts/')
            .then(response => {
                this.setState({acts: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    ActList() {
        return this.state.acts.map(function(currentAct, i) {
            return <Act act={currentAct} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Acts List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Тип</th>
                            <th>Цена</th>
                            <th>Гействия</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.ActList() }
                    </tbody>
                </table>
            </div>
        )
    }
}