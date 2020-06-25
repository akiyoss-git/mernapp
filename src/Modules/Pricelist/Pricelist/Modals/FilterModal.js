import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import axios from 'axios';
import "./css/modals.css"
import filterimg from "../../../static/filter.png"

class DeleteModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            types: [],
            type: ""
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const cookie = new Cookies();
        cookie.set('filter', this.state.type, {path: '/'})
        window.location.reload();
    }

    componentDidMount(){
        axios.get('http://localhost:4000/acts/types/')
            .then(res => this.setState({types: res.data}));
        
    }

    handleChange(e){
        console.log(this.state.type)
        this.setState({type: e.target.value})
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.handleShow} className="filter">
                    <img src={filterimg} style={{marginTop: "-1px", marginLeft: "-9px"}}/>
                </button>
                <Modal show={this.state.show} onHide={this.handleClose} className="text-dark">
                    <Modal.Header closeButton>
                        <Modal.Title>Фильтр</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Label>Выберите адресата</Form.Label>
                            <Form.Control as="select" name="worker_str" value={this.state.worker_str} onChange={this.handleChange}>
                                <option value="">Сбросить фильтры</option>
                                {this.state.types.map(filter => <option value={filter.name}>{filter.name}</option>)}
                            </Form.Control>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Применить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default DeleteModal;