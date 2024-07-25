import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import kitty from '../images/orange_cat.png';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

export default function Navigation() {
    return (

            <Navbar className="navbar">
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <img src={kitty} className="kitty" alt="logo orange cat image"/>

                <div className="github-container">
                    <Nav.Link href="https://github.com/ilgharr">
                        <i className="fa fa-github"></i>
                        GitHub</Nav.Link>
                </div>

                <div className="linkedin-container">
                    <Nav.Link href="https://www.linkedin.com/in/ilghar-rahno-5a40aa220/">
                        <i className="fa fa-linkedin-square">
                        </i>Linkedin</Nav.Link>
                </div>

                <div className="about-me-container">
                    <AboutMe/>
                </div>

                <div className="contact-me-container">
                    <ContactMe/>
                </div>
            </Navbar>



    )
}