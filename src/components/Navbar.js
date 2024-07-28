import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import kitty from '../images/orange_cat.png';
import ContactMe from './ContactMe';

export default function Navigation() {
    const textWhite = "text-white"


    return (
        <Navbar className="p-0 m-0">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <img src={kitty} className="kitty" alt="logo orange cat image"/>

            <Nav className="main-nav">
                <Nav.Link className={textWhite} href="https://github.com/ilgharr" target="_blank">
                    <i className="fa fa-github"></i>
                    GitHub
                </Nav.Link>

                <Nav.Link className={textWhite} href="https://www.linkedin.com/in/ilghar-rahno-5a40aa220/"
                          target="_blank">
                    <i className="fa fa-linkedin-square"></i>
                    Linkedin
                </Nav.Link>

                <Nav.Link className={textWhite}>
                    About me
                </Nav.Link>

                <Nav.Link className={textWhite}>
                    Contact me
                    <ContactMe/>
                </Nav.Link>

                <Nav.Link className={textWhite} href="../images/ilghar_developer_resume.pdf" download="ilghar_resume.pdf" target="_blank">
                    Download resume
                </Nav.Link>
            </Nav>
        </Navbar>

    )
}