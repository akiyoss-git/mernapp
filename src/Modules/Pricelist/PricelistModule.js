import React, {Component} from 'react';
import Pricelist from "./Pricelist/Pricelist"
import CookieModal from "./Pricelist/Modals/CookieModal"
import Cookies from 'universal-cookie';
import "./css/module.css"

export default class PricelistModule extends Component {
    constructor(props){
        super(props);
        this.state = {pricelist: true, nomen: false, warehouse: false, analys: false}

        this.onClickAnalys = this.onClickAnalys.bind(this)
        this.onClickPricelist = this.onClickPricelist.bind(this)
        this.onClickNomen = this.onClickNomen.bind(this)
        this.onClickWarehouse = this.onClickWarehouse.bind(this)
        
    }
    onClickPricelist(){
        const cookie = new Cookies();
        cookie.set("state", "pricelist");
        this.setState({pricelist: true, nomen: false, warehouse: false, analys: false});
        let line = document.getElementsByClassName('downLine')[0]
        line.style.width = "314px";
        line.style.left = "0px";
        let pl = document.getElementsByClassName('pricelist')[0]
        pl.style.color= "#260B5D";
        let nomen = document.getElementsByClassName('nomen')[0]
        nomen.style.color= "#B7A7D7";
        let warehouse = document.getElementsByClassName('warehouse')[0]
        warehouse.style.color= "#B7A7D7";
        let analys = document.getElementsByClassName('analys')[0]
        analys.style.color= "#B7A7D7";
    }

    onClickNomen(){
        const cookie = new Cookies();
        cookie.set("state", "nomen");
        this.setState({pricelist: false, nomen: true, warehouse: false, analys: false});
        let line = document.getElementsByClassName('downLine')[0]
        line.style.width = "286px";
        line.style.left = "312px";
        let pl = document.getElementsByClassName('pricelist')[0]
        pl.style.color= "#B7A7D7";
        let nomen = document.getElementsByClassName('nomen')[0]
        nomen.style.color= "#260B5D";
        let warehouse = document.getElementsByClassName('warehouse')[0]
        warehouse.style.color= "#B7A7D7";
        let analys = document.getElementsByClassName('analys')[0]
        analys.style.color= "#B7A7D7";
    }

    onClickWarehouse(){
        const cookie = new Cookies();
        cookie.set("state", "warehouse");
        this.setState({pricelist: false, nomen: false, warehouse: true, analys: false});
        let line = document.getElementsByClassName('downLine')[0]
        line.style.width = "286px";
        line.style.left = "598px";
        let pl = document.getElementsByClassName('pricelist')[0]
        pl.style.color= "#B7A7D7";
        let nomen = document.getElementsByClassName('nomen')[0]
        nomen.style.color= "#B7A7D7";
        let warehouse = document.getElementsByClassName('warehouse')[0]
        warehouse.style.color= "#260B5D";
        let analys = document.getElementsByClassName('analys')[0]
        analys.style.color= "#B7A7D7";
    }

    onClickAnalys(){
        const cookie = new Cookies();
        cookie.set("state", "analys");
        this.setState({pricelist: false, nomen: false, warehouse: false, analys: true});
        let line = document.getElementsByClassName('downLine')[0]
        line.style.width = "314px";
        line.style.left = "884px";
        let pl = document.getElementsByClassName('pricelist')[0]
        pl.style.color= "#B7A7D7";
        let nomen = document.getElementsByClassName('nomen')[0]
        nomen.style.color= "#B7A7D7";
        let warehouse = document.getElementsByClassName('warehouse')[0]
        warehouse.style.color= "#B7A7D7";
        let analys = document.getElementsByClassName('analys')[0]
        analys.style.color= "#260B5D";
    }
    
    componentDidMount(){
        let button = document.getElementsByClassName("header-pricelist")[0];
        button.style.background = "#FFFFFF"
        button.style.color = "#260B5D"
        const cookie = new Cookies();
        let state = cookie.get("state");
        if (state === "pricelist"){
            this.setState({pricelist: true, nomen: false, warehouse: false, analys: false});
        } else{
            if (state === "warehouse"){
                this.setState({pricelist: false, nomen: false, warehouse: true, analys: false});
            }else{
                if (state === "nomen"){
                    this.setState({pricelist: false, nomen: true, warehouse: false, analys: false});
                }else{
                    if (state === "analys"){
                        this.setState({pricelist: false, nomen: false, warehouse: false, analys: true});
                    }else{
                        this.onClickPricelist();
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className="head">
                <CookieModal />
                <button onClick={this.onClickPricelist} className="pricelist">Прайслист</button>
                <button onClick={this.onClickNomen} className="nomen">Номенклатура</button>
                <button onClick={this.onClickWarehouse} className="warehouse">Склад</button>
                <button onClick={this.onClickAnalys} className="analys">Аналитика</button>
                <div className="downLine"></div>
                {this.state.analys ? <div>Аналитика</div> : null }       
                {this.state.pricelist ? <Pricelist /> : null }              
                {this.state.nomen ? <div>Номенклатура</div> : null }
                {this.state.warehouse ? <div>Склад</div> : null }
            </div>
        )
    }
}