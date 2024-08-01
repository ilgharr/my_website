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

export default function AboutMe() {
    return (
        <div className="about-me">
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <Row className="row">
                <h3 className="col name">Ilghar Rahno</h3>
            </Row>
            <Row className="row">
                <h3 className="col">I'm am a full stack developer</h3>
                <img src={developer} className="developer col" alt="pixelated image of a computer programmer"/>
            </Row>
            <Row className="row">
                <img src={mustang} className="mustang col" alt="pixelated image of white 2020 mustang"/>
                <h3 className="col">A love for driving</h3>
            </Row>
            <Row className="row">
                <h3 className="col">Using AI to help make websites</h3>
                <img src={brain} className="brain col" alt="pixelated image of green brain"/>
            </Row>
            <Row className="row">
                <img src={learner} className="learner col" alt="pixelated image of green man learning"/>
                <h3 className="col">Love learning</h3>
            </Row>
            <Row className="row">
                <h3 className="col name">Some languages and frameworks I am familiar with</h3>
            </Row>
            <Row>
                <img src={c} className="col"/>
                <img src={cpp} className="col"/>
                <img src={css} className="col"/>
                <img src={html5} className="col"/>
                <img src={js} className="col"/>
            </Row>
            <Row>
                <img src={linux} className="col"/>
                <img src={mongo} className="col"/>
                <img src={oracle} className="col"/>
                <img src={react} className="col"/>
                <img src={node} className="col"/>
            </Row>
        </div>
    )
}