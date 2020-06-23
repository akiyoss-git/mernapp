import React, {Component} from 'react';
import Pricelist from "./Pricelist/Pricelist"
import CookieModal from "./Pricelist/Modals/CookieModal"
import Cookies from 'universal-cookie';

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
    }

    onClickNomen(){
        const cookie = new Cookies();
        cookie.set("state", "nomen");
        this.setState({pricelist: false, nomen: true, warehouse: false, analys: false});
    }

    onClickWarehouse(){
        const cookie = new Cookies();
        cookie.set("state", "warehouse");
        this.setState({pricelist: false, nomen: false, warehouse: true, analys: false});
    }

    onClickAnalys(){
        const cookie = new Cookies();
        cookie.set("state", "analys");
        this.setState({pricelist: false, nomen: false, warehouse: false, analys: true});
    }
    
    componentDidMount(){
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
                {this.state.analys ? <div>Аналитика</div> : null }       
                {this.state.pricelist ? <Pricelist /> : null }              
                {this.state.nomen ? <div>Номенклатура</div> : null }
                {this.state.warehouse ? <div>Склад</div> : null }
            </div>
        )
    }
}