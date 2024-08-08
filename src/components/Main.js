import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";

export default function Main() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '90vw', backgroundColor: '#000', color: '#fff' }}>
            <Row className="text-center">
                <Col>
                    <h1 style={{ fontSize: '5rem' }}>Home Page Coming Soon</h1>
                    <p style={{ fontSize: '1.5rem' }}>We are working hard to get this site up and running.</p>
                </Col>
            </Row>
        </Container>
    )
}