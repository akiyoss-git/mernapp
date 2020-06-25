import React, {Component} from 'react';

export default class MainModule extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let button = document.getElementsByClassName("header-main")[0];
        button.style.background = "#FFFFFF"
        button.style.color = "#260B5D"
    }
    render() {
        return (
            <div className="head">
                main
            </div>
        )
    }
}