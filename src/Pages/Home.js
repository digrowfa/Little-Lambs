import Header from "./HomeContent/Header"
import LLNCategory from "./HomeContent/LLNCategory"
import Location from "./HomeContent/Location"
import WhyLL from "./HomeContent/WhyLL"
import Navigation from "./Includes/Navigation/Navigation"


const Home = (props) => {
    return (
        <>
            <Navigation />
            <Header />
            <WhyLL />
            <LLNCategory />
            <Location />
        </>
    )
}

export default Home