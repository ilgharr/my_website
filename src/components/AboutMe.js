import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mustang from '../images/pixelated_mustang-2.png'

import {Container, Row, Col} from 'react-bootstrap';
import kitty from "../images/orange_cat.png";

export default function AboutMe() {

    return (
        <div>
            <img src={mustang} className="mustang" alt="white mustang image"/>
        </div>
    )
}