import React, { Component } from "react";
import "./Footer.css"
import vk from "../static/vk.png"
import fb from "../static/fb.png"
import tw from "../static/twitter.png"
import ok from "../static/odnok.png"
import inst from "../static/ints.png"
import as from "../static/as.png"
import gp from "../static/gp.png"

class Footer extends React.Component {
    render() {
        return (
            <>
            <div className="footer-body">
                <div className="footer-name">© 2020 Автомойка “МИР”</div>
                <button className="footer-question">Задать вопрос</button>
                <a href="/" className="footer-mobile">Мобильная версия</a>
                <a href="/" className="footer-login">Вход для клиента</a>
                <a href="https://vk.com/" className="footer-vk"><img src={vk} /></a>
                <a href="https://facebook.com/" className="footer-fb"><img src={fb} /></a>
                <a href="https://ok.ru/" className="footer-ok"><img src={ok} /></a>
                <a href="https://twitter.com/" className="footer-tw"><img src={tw} /></a>
                <a href="https://instagram.com/" className="footer-inst"><img src={inst} /></a>
                <a href="https://play.google.com/" className="footer-gp"><img src={gp} /></a>
                <a href="https://apple.com/ru/ios/app-store/" className="footer-as"><img src={as} /></a>
            </div>
            </>
        );
    }
}


export default Footer;