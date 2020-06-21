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
        this.setState({pricelist: true, nomen: false, warehouse: false, analys: false})
    }

    onClickNomen(){
        this.setState({pricelist: false, nomen: true, warehouse: false, analys: false})
    }

    onClickWarehouse(){
        this.setState({pricelist: false, nomen: false, warehouse: true, analys: false})
    }

    onClickAnalys(){
        this.setState({pricelist: false, nomen: false, warehouse: false, analys: true})
    }
    

    render() {
        return (
            <div className="head">
                <CookieModal />
                <button onClick={this.onClickPricelist} className="price">Прайслист</button>
                <button onClick={this.onClickNomen} className="nomen">Номенклатура</button>
                <button onClick={this.onClickWarehouse} className="warehouse">Склад</button>
                <button onClick={this.onClickAnalys} className="analys">Аналитика</button>
                {this.state.analys ? <div>Аналитика</div> : null }       
                {this.state.pricelist ? <Pricelist /> : null }              
                {this.state.nomen ? <div>Номенклатура</div> : null }
                {this.state.warehouse ? <div>Склад</div> : null }
            </div>
        )
    }
}