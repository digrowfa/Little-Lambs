import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Curriculum from "../Pages/Curriculum"
import Gallery from "../Pages/Gallery"
import Home from "../Pages/Home"
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
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default CommonRoutes