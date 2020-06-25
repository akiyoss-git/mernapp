import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./css/modals.css"
import axios from 'axios';
import plus from "../../../static/plus.png"

class CreateTypeModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            type: "",
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
        const newType = {
            name: this.state.type
        }
        axios.post('http://localhost:4000/acts/addtype', newType)
            .then(res => console.log(res.data));
        
        this.handleClose();
        window.location.reload();
    }

    handleChange(event) {
        this.setState({ type : event.target.value });
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.handleShow} className="plus">
                    <img src={plus} style={{marginTop: "-1px", marginLeft: "-9px"}}/>
                </button>
                <button type="button" onClick={this.handleShow} className="addCategory">
                    Добавить категорию
                </button>
                <Modal show={this.state.show} onHide={this.handleClose} className="text-dark">
                    <Modal.Header closeButton>
                        <Modal.Title>Создать тип</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Название</Form.Label>
                                <Form.Control name="comment" type="text" placeholder="Введите тип" onChange={this.handleChange} />
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