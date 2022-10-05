import { Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Curriculam from "../Pages/Curriculam"
import Home from "../Pages/Home"
import ScrollToTop from "../Pages/ScrollToTop"

const CommonRoutes = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/curriculam" element={<Curriculam />} />
                    <Route path="/contact-us" element={<Contact />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default CommonRoutes