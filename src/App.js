import React from 'react';

import Navigation from './components/Navbar';
import Main from './components/Main';

import bg from './images/bg.png';

export default function App() {

    const myStyle = {
        backgroundImage: `url(${bg})`,
        height: "100%",
        width: "100%",
        minHeight: "100vh",

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    const [showAboutMe, setShowAboutMe] = React.useState(false);
    const handleAbout = () => {
        setShowAboutMe(!showAboutMe);
        setShowContactMe(false)
    };

    const [showContactMe, setShowContactMe] = React.useState(false);
    const handleContact = () => {
        setShowContactMe(!showContactMe);
        setShowAboutMe(false)
    }

    return (
        <div  style={myStyle}>
            <Navigation handleAbout={handleAbout} handleContact={handleContact} />
            <Main showAboutMe={showAboutMe} showContactMe={showContactMe}/>
        </div>
    )
}