import React from 'react';
import emailjs from '@emailjs/browser'
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactMe() {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                '',
                '',
                e.target,
                ''
            )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    nameRef.current.value = '';
                    emailRef.current.value = '';
                    messageRef.current.value = '';
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <Form className="contact-me" onSubmit={sendEmail}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="user_name"
                    ref={nameRef}
                    placeholder="Enter your name"
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="user_email"
                    ref={emailRef}
                    placeholder="Enter your email"
                />
            </Form.Group>

            <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    ref={messageRef}
                    placeholder="Enter your message"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    );
}