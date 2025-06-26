import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandpagePage, LoginPage, ProfilePage, RegisterPage } from "../pages/pages"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<LandpagePage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/profile" element={<ProfilePage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes