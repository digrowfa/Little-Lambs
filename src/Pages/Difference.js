import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from "./DifferenceContent/Header"
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'
import DifferenceBody from './DifferenceContent/DifferenceBody'

const Difference = () => {
    return(
        <>
            <Navigation />
            <MobileNavigation />
            <Header />
            <DifferenceBody />
            <Footer />
        </>
    )
}

export default Difference