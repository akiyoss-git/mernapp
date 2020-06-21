import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Cookies from 'universal-cookie';
import axios from 'axios';

class CreateTypeModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cookies: "",
            show: null
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const cookies = new Cookies();
        cookies.set('cookies', 'true', { path: '/' });
        this.setState({show: false})
    }

    componentDidMount() {
        const cookies = new Cookies();
        if (cookies.get('cookies') == "true"){
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    render() {
        return (
            <>
                <Modal show={this.state.show} onHide={this.handleClose} className="text-dark">
                    <Modal.Header closeButton>
                        <Modal.Title>Предупреждение о cookies!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            Этот сайт использует Cookies. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum.
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleSubmit}>
                            Согласен
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default CreateTypeModal;