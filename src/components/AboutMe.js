import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import mustang from "../images/mustang.png";
import developer from "../images/developer.png";
import brain from "../images/brain.png";
import learner from "../images/learner.png";
import painting from "../images/painting.png";
import gaming from "../images/gaming.png";

import c from "../images/c.png"
import cpp from "../images/cpp.png";
import css from "../images/css.png";
import html5 from "../images/html5.png";
import js from "../images/js.png";
import linux from "../images/linux.png";
import mongo from "../images/mongo.png";
import oracle from "../images/oracle.png";
import react from "../images/react.png";
import node from "../images/node.png";

export default function AboutMe() {

     function myStyle(pic) {
         return{
             backgroundImage: `url(${pic})`,
             height: "400px",
             backgroundPosition: "center",
             backgroundSize: "cover",
             overflow: "scroll"
         }
    }

    return (
            <div className="about-me">
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <Row className="name row">
                    <h3 className="name col">Ilghar Rahno</h3>
                </Row>

                <Row className="row" style={myStyle(developer)}>
                    <p className="aboutme-info col-12 col-md-6">
                        I am a full stack developer with a passion for creating dynamic,
                        responsive web applications. Proficient in both front-end and back-end technologies,
                        I excel at transforming complex problems into intuitive solutions.
                    </p>
                    {/*<div className="aboutme-placeholder col"></div>*/}
                </Row>

                <Row className="row" style={myStyle(brain)}>
                    <div className="aboutme-placeholder d-none d-md-block col-md-6"></div>
                    <p className="aboutme-info col-12 col-md-6">
                        I leverage AI tools to enhance my web development projects,
                        creating smarter and more efficient websites.
                        This integration allows me to deliver innovative solutions that improve user experiences.
                    </p>
                </Row>

                <Row className="row" style={myStyle(learner)}>
                    <p className="aboutme-info col-12 col-md-6">
                        Beyond development, I have a love for learning and exploring new knowledge.
                        This curiosity
                        drives me to continuously expand my skills and stay updated with the latest industry trends.
                    </p>
                    {/*<div className="aboutme-placeholder col"></div>*/}
                </Row>

                <Row className="row" style={myStyle(mustang)}>
                    <div className="aboutme-placeholder d-none d-md-block col-md-6"></div>
                    <p className="aboutme-info col-12 col-md-6">
                        In my free time, I enjoy driving cars,
                        finding joy in the thrill and precision it requires.
                        This passion for driving reflects my dedication to precision and excellence in all my endeavors.
                    </p>
                </Row>

                <Row className="row" style={myStyle(painting)}>
                    <p className="aboutme-info col-12 col-md-6">
                        I also enjoy painting.
                        It allows me to explore my creativity and find inspiration outside of coding,
                        providing a relaxing and fulfilling balance to my technical work.
                    </p>
                    {/*<div className="aboutme-placeholder col"></div>*/}
                </Row>

                <Row className="row" style={myStyle(gaming)}>
                    <div className="aboutme-placeholder d-none d-md-block col-md-6"></div>
                    <p className="aboutme-info col-12 col-md-6">
                        Additionally, I love playing video games.
                        They offer a fun and engaging way to unwind,
                        and stay connected with friends.
                    </p>
                </Row>
            </div>
    )
}