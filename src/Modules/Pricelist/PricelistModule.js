import React, {Component} from 'react';
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
                <div><button onClick={this.onClickPricelist}>Прайслист</button></div>
                <div><button onClick={this.onClickNomen}>Номенклатура</button></div>
                <div><button onClick={this.onClickWarehouse}>Склад</button></div>
                <div><button onClick={this.onClickAnalys}>Аналитика</button></div>
                {this.state.analys ? <div>Аналитика</div> : null }       
                {this.state.pricelist ? <div>Прайслист</div> : null }              
                {this.state.nomen ? <div>Номенклатура</div> : null }
                {this.state.warehouse ? <div>Склад</div> : null }
            </div>
        )
    }
}