import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navigation({handleHome, handleAbout, handleContact}) {
    const textDecor = "nav-buttons text-white text-nowrap"

    return (
        <Navbar className="p-0 m-0 text-white" expand="lg">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="main-nav">
                    <Nav.Link className={textDecor}>
                        <button className="nav-button" onClick={handleHome}>Home</button>
                    </Nav.Link>

                    <Nav.Link className={textDecor}>
                        <button className="nav-button" onClick={handleAbout}>About Me</button>
                    </Nav.Link>

                    <Nav.Link className={textDecor}>
                        <button className="nav-button" onClick={handleContact}>Contact Me</button>
                    </Nav.Link>

                    <Nav.Link className={textDecor} href="https://github.com/ilgharr" target="_blank">
                        <i className="fa fa-github"></i>
                        GitHub
                    </Nav.Link>

                    <Nav.Link className={textDecor} href="https://www.linkedin.com/in/ilghar-rahno-5a40aa220/"
                              target="_blank">
                        <i className="fa fa-linkedin-square"></i>
                        Linkedin
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}