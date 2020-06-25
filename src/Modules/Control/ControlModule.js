import React, {Component} from 'react';

export default class ControlModule extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let button = document.getElementsByClassName("header-control")[0];
        button.style.background = "#FFFFFF"
        button.style.color = "#260B5D"
    }
    render() {
        return (
            <div className="head">
                control
            </div>
        )
    }
}