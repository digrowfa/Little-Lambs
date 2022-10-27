import Navigation from './Includes/Navigation/Navigation'
import Footer from './Includes/Footer/Footer'
import Header from './ContactContent/Header'
import ContactForm from './ContactContent/ContactForm'
import MobileNavigation from './Includes/MobileNavigation/MobileNavigation'

const Contact = () => {
    return(
        <>
            <Navigation />
            <MobileNavigation />
            <Header />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact