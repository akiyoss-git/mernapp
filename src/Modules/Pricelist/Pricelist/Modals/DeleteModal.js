import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./css/modals.css"
import axios from 'axios';
import minus from "../../../static/minus.png"

class DeleteModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.price)
        axios.get('http://localhost:4000/acts/delete/'+this.props.id)
            .then(res => console.log(res.data));
        
        this.handleClose();
        window.location.reload();
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.handleShow} className="delete">
                    <img src={minus} style={{marginTop: "-6px", marginLeft: "-5px"}} />
                </button>
                <Modal show={this.state.show} onHide={this.handleClose} className="text-dark">
                    <Modal.Header closeButton>
                        <Modal.Title>Удаление</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            Ряльна удаляешь?
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Да
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default DeleteModal;