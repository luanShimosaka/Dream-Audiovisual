import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ClientListPage, LandpagePage, LoginPage, ProfilePage, RegisterPage } from "../pages/pages"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<LandpagePage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/profile" element={<ProfilePage />}/>
                    <Route path="/clientlist" element={<ClientListPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes