import React, { Component } from "react";
import "./Header.css"
import logo from "../static/LOGO.png"

class Header extends React.Component {
    render() {
        return (
            <>
            <div className="header-body">
            <a href="/"><img src={logo} className="header-logo"/></a>
            <form action="/">
                    <button type="submit" className="header-main">Главная</button>
            </form>
            <form action="/control">
                    <button type="submit" className="header-control">Контроль</button>
            </form>
            <form action="/pricelist">
                    <button type="submit" className="header-pricelist">Прайслист</button>
            </form>
            <form action="/personal">
                    <button type="submit" className="header-personal">Персонал</button>
            </form>
            <form action="/settings">
                    <button type="submit" className="header-settings">Настройки</button>
            </form>
            <form action="/payments">
                    <button type="submit" className="header-payments">Платежи</button>
            </form>
            <form action="/reviews">
                    <button type="submit" className="header-reviews">Отзывы</button>
            </form>
            <form action="/clients">
                    <button type="submit" className="header-clients">Клиенты</button>
            </form>
            </div>
            </>
        );
    }
}


export default Header;