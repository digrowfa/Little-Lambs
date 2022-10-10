import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './AboutContent/Header'
import FounderWord from './AboutContent/FounderWord'
import MyChild from './AboutContent/MyChild'
import Founder from './AboutContent/Founder'

const About = (props) => {
    return(
        <>
            <Navigation />
            <Header />
            <FounderWord />
            <MyChild />
            <Founder />
            <Footer />
        </>
    )
}

export default About