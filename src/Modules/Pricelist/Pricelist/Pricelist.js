import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CreateTypeModal from "./Modals/CreateTypeModal"
import CreateModal from "./Modals/CreateModal"
import DeleteModal from "./Modals/DeleteModal"
import FilterModal from "./Modals/FilterModal"
import axios from 'axios';
import Cookies from 'universal-cookie';

const Act = props => (
    <tr>
        <td>{props.act.name}</td>
        <td>{props.act.price}</td>
        <td><DeleteModal id={props.act._id} />
        </td>
    </tr>
)

export default class Pricelist extends Component {

    constructor(props) {
        super(props);
        this.state = {acts: [], types: []};
        this.ActList = this.ActList.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:4000/acts/types').then(res => {
            this.setState({types: res.data});
        })
        axios.get('http://localhost:4000/acts/')
            .then(response => {
                this.setState({acts: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    ActList(type) {
        let acts = this.state.acts;
        const cookie = new Cookies();
        let filter = cookie.get('filter')
        if (filter === ""){
            return this.state.types.map(function(type, i) {
            return (
                <>
                <h3>{type.name}</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Тип</th>
                            <th>Цена</th>
                            <th>Гействия</th>
                            <th><CreateModal type={type.name} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        { acts.map(function(currentAct, i) {
                            if (type.name == currentAct.type)
                            return <Act act={currentAct} key={i} />;
                        })}
                    </tbody>
                </table>
                </>
            )
        })
        }else{
            return this.state.types.map(function(type, i) {
                if (type.name === filter){
                    return (
                    <>
                    <h3>{type.name}</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Тип</th>
                                <th>Цена</th>
                                <th>Гействия</th>
                                <th><CreateModal type={type.name} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            { acts.map(function(currentAct, i) {
                                if (type.name == currentAct.type)
                                return <Act act={currentAct} key={i} />;
                            })}
                        </tbody>
                    </table>
                    </>
                )
                }

            })
        }
        
    }

    render() {
        return (
            <div>
                <CreateTypeModal />
                <FilterModal />
                {this.ActList()}
            </div>
        )
    }
}