import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CreateTypeModal from "./Modals/CreateTypeModal"
import CreateModal from "./Modals/CreateModal"
import DeleteModal from "./Modals/DeleteModal"
import FilterModal from "./Modals/FilterModal"
import axios from 'axios';
import Cookies from 'universal-cookie';
import "./css/pricelist.css"
import shst from "../../static/sht.png"
import ok from "../../static/ok.png"

const Act = props => (
    <>
    <tr>
        <td><div className="name">{props.act.name}</div><div className="price">{props.act.price}₽</div>{props.hidden && <DeleteModal id={props.act._id} />} <div className="line"></div></td>
    </tr>
    </>
)

export default class Pricelist extends Component {

    constructor(props) {
        super(props);
        this.state = {acts: [], types: [], hidden: true};
        this.ActList = this.ActList.bind(this)
        this.hidden=this.hidden.bind(this)
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

    hidden(){
        this.setState({
            hidden: !this.state.hidden
        })
    }


    ActList(type) {
        let acts = this.state.acts;
        const cookie = new Cookies();
        let filter = cookie.get('filter')
        let hidden = this.hidden
        let state = this.state.hidden
        if ((filter === "") || (filter === undefined)){
            return this.state.types.map(function(type, i) {
            return (
                <>
                <table style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                        <tr>
                        <th><div className="rotate">{type.name}<button onClick={hidden} className="sht">
                                {state ? <img src={ok} style={{marginLeft:"-9px", marginTop: "-1px"}}/>
                                : <img src={shst} style={{marginLeft:"-9px", marginTop: "-1px"}}/>}
                                </button>
                            </div></th>
                            </tr>
                        </tr>
                    </thead>
                    <tbody>
                        { acts.map(function(currentAct, i) {
                            if (type.name == currentAct.type)
                            return <Act act={currentAct} key={i} hidden={state}/>;
                        })}
                        <CreateModal type={type.name} name={type.name}/>
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
                    <table style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                            <th><div className="rotate">{type.name}<button onClick={hidden} className="sht">
                                {state ? <img src={ok} style={{marginLeft:"-9px", marginTop: "-1px"}}/>
                                : <img src={shst} style={{marginLeft:"-9px", marginTop: "-1px"}}/>}
                                </button>
                            </div></th>
                            </tr>
                        </thead>
                        <tbody>
                            { acts.map(function(currentAct, i) {
                                if (type.name == currentAct.type)
                                return <Act act={currentAct} key={i} hidden={state}/>;
                            })}
                            <CreateModal type={type.name} />
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
                <div className="aname">Автомойка "МИР"</div>
                <FilterModal />
                {this.ActList()}
                <form action="http://localhost:4000/acts/excel/">
                    <button type="submit" className="xls">Скачать в .xlsx</button>
                </form>
                <CreateTypeModal />
            </div>
        )
    }
}