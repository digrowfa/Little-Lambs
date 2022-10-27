import React from 'react'
import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './Programmes/Header'
import ProgramBody from './Programmes/ProgramBody'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'

const Programmes = () => {
    return (
        <>
            <Navigation />
            <MobileNavigation />
            <Header />
            <ProgramBody />
            <Footer />
        </>
    )
}

export default Programmes