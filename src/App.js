import React from 'react';

import Navigation from './components/Navbar';
import AboutMe from './components/AboutMe';
import Main from './components/Main';

export default function App() {

    const [showChild, setShowChild] = React.useState(false);

    const handleAbout = () => {
        setShowChild(!showChild);
    };


    return (
        <>
            <Navigation handleAbout={handleAbout}/>
            <Main showChild={showChild} />
        </>
    )
}