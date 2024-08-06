import React from 'react';

import Navigation from './components/Navbar';
import Main from './components/Main';

import bg from './images/bg.png';
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import {Container} from "react-bootstrap";

export default function App() {

    const myStyle = {
        backgroundImage: `url(${bg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
    }

    const [showAboutMe, setShowAboutMe] = React.useState(false);
    const handleAbout = () => {
        setShowAboutMe(!showAboutMe);
        setShowContactMe(false)
        setShowHome(false)
    };

    const [showContactMe, setShowContactMe] = React.useState(false);
    const handleContact = () => {
        setShowContactMe(!showContactMe);
        setShowAboutMe(false)
        setShowHome(false)
    }

    const [showHome, setShowHome] = React.useState(false);
    const handleHome = () => {
        setShowHome(!showHome);
        setShowContactMe(false)
        setShowAboutMe(false)
    }

    function mainLogic (){
        if (showAboutMe) {return <AboutMe/>}
        else if (showContactMe) {return <ContactMe/>}
        return <Main/>
    }

    return (
        <div  style={myStyle}>
            <Navigation handleHome={handleHome} handleAbout={handleAbout} handleContact={handleContact} />
            {mainLogic()}
        </div>
    )
}