import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"

const CommonRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default CommonRoutes