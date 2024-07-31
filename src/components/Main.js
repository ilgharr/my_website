import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import {Container} from "react-bootstrap";

export default function Main({showAboutMe, showContactMe}) {
    // function mainLogic (){
    //     if (showAboutMe && !showContactMe) {return <AboutMe/>}
    //     else if (!showAboutMe && showContactMe) {return <ContactMe/>}
    //     return (<Container>MAIN PAGE!!!</Container>)
    // }

    return (
        <>
            {/*{mainLogic()}*/}
            <AboutMe/>
        </>
    )
}