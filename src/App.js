import React from 'react';

import Navigation from './components/Navbar';
import AboutMe from './components/AboutMe';
import Main from './components/Main';

export default function App() {

    return (
        <>
            <Navigation/>
            <Main/>
            <AboutMe/>
        </>
    )
}