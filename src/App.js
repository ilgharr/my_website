import React from 'react';

import Navigation from './components/Navbar';
import Main from './components/Main';

export default function App() {

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
        <>
            <Navigation handleAbout={handleAbout} handleContact={handleContact} />
            <Main showAboutMe={showAboutMe} showContactMe={showContactMe}/>
        </>
    )
}