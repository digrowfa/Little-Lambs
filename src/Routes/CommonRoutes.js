import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Curriculum from "../Pages/Curriculum"
import Difference from "../Pages/Difference"
import Facilities from "../Pages/Facilities"
import Gallery from "../Pages/Gallery"
import HealthSafety from "../Pages/HealthSafety"
import Home from "../Pages/Home"
import Offers from "../Pages/Offers"
import ScrollToTop from "../Pages/ScrollToTop"

const CommonRoutes = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/LLN-the-difference" element={<Difference />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/health-and-safety" element={<HealthSafety />} />
                    <Route path="/facilities" element={<Facilities />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default CommonRoutes