import {Routes, Route} from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Curriculam from "../Pages/Curriculam"
import Home from "../Pages/Home"

const CommonRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/curriculam" element={<Curriculam />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>
        </>
    )
}

export default CommonRoutes