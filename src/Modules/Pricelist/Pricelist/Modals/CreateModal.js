import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./css/modals.css"
import axios from 'axios';

class CreateTypeModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            name: "",
            price: 0,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const newType = {
            name: this.state.name,
            price: this.state.price,
            type: this.props.type
        }
        console.log(this.state.price)
        axios.post('http://localhost:4000/acts/add', newType)
            .then(res => console.log(res.data));
        
        this.handleClose();
        window.location.reload();
    }

    handleChangeName(event) {
        this.setState({ name : event.target.value });
    }

    handleChangePrice(event) {
        console.log(this.state.price)
        this.setState({ price : event.target.value });
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.handleShow} className="createType">
                Добавить услугу в категорию “{this.props.name}”
                </button>
                <Modal show={this.state.show} onHide={this.handleClose} className="text-dark">
                    <Modal.Header closeButton>
                        <Modal.Title>Создать штуку</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Название</Form.Label>
                                <Form.Control name="comment" type="text" placeholder="Введите тип" onChange={this.handleChangeName} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Цена</Form.Label>
                                <Form.Control name="comment" type="number" placeholder="Введите цену" onChange={this.handleChangePrice} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default CreateTypeModal;