import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from "./DifferenceContent/Header"
import DifferenceBody from './DifferenceContent/DifferenceBody'
import LLNOffers from './DifferenceContent/LLNOffers'

const Difference = () => {
    return(
        <>
            <Navigation />
            <Header />
            <DifferenceBody />
            <LLNOffers />
            <Footer />
        </>
    )
}

export default Difference