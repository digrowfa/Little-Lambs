import Header from "./HomeContent/Header"
import LLNCategory from "./HomeContent/LLNCategory"
import Location from "./HomeContent/Location"
import WhyLL from "./HomeContent/WhyLL"
import Footer from "./Includes/Footer/Footer"
import MobileNavigation from "./Includes/MobileNavigation/MobileNavigation"
import Navigation from "./Includes/Navigation/Navigation"


const Home = (props) => {
    return (
        <>
            <Navigation />
            <MobileNavigation />
            <Header />
            <WhyLL />
            <LLNCategory />
            <Location />
            <Footer />
        </>
    )
}

export default Home