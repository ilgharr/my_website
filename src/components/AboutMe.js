import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

import mustang from "../images/mustang.png";
import developer from "../images/developer.png";
import brain from "../images/brain.png";
import learner from "../images/learner.png";
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
import bg from "../images/bg.png";

export default function AboutMe() {

     function myStyle(pic) {
         return{
             backgroundImage: `url(${pic})`,
             height: "400px",
             width: "100%",
             backgroundPosition: "center center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
         }
    }

    return (
        <div className="about-me">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Row className="name row">
                <h3 className="col name">Ilghar Rahno</h3>
            </Row>
            <Row className="row" style={myStyle(developer)}>
                <h3 className="aboutme-info col">
                    I am a full stack developer with a passion for creating dynamic,
                    responsive web applications. Proficient in both front-end and back-end technologies,
                    I excel at transforming complex problems into intuitive solutions.
                </h3>
                <div className="aboutme-placeholder col"></div>
            </Row>
            <Row className="row" style={myStyle(brain)}>
                <div className="aboutme-placeholder col"></div>
                <h3 className="aboutme-info col">
                    I leverage AI tools to enhance my web development projects,
                    creating smarter and more efficient websites.
                    This integration allows me to deliver innovative solutions that improve user experiences.
                </h3>
            </Row>
            <Row className="row" style={myStyle(learner)}>
                <h3 className="aboutme-info col">
                    Beyond development, I have a love for learning and exploring new knowledge.
                    This curiosity
                    drives me to continuously expand my skills and stay updated with the latest industry trends.
                </h3>
                <div className="aboutme-placeholder col"></div>
            </Row>
            <Row className="row" style={myStyle(mustang)}>
                <div className="aboutme-placeholder col"></div>
                <h3 className="aboutme-info col">
                    In my free time, I enjoy driving cars,
                    finding joy in the thrill and precision it requires.
                    This passion for driving reflects my dedication to precision and excellence in all my endeavors.
                </h3>
            </Row>

            <Row className="row">
                <h3 className="col name">Some languages and frameworks I am familiar with</h3>
            </Row>
            <Row>
                <img src={c} className="lang-img col"/>
                <img src={cpp} className="lang-img col"/>
                <img src={css} className="lang-img col"/>
                <img src={html5} className="lang-img col"/>
                <img src={js} className="lang-img col"/>
            </Row>
            <Row>
                <img src={linux} className="lang-img col"/>
                <img src={mongo} className="lang-img col"/>
                <img src={oracle} className="lang-img col"/>
                <img src={react} className="lang-img col"/>
                <img src={node} className="lang-img col"/>
            </Row>
        </div>
    )
}