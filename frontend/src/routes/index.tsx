import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AlbunsPage, ClientListPage, LandpagePage, LoginPage, ProfilePage, RegisterPage, SchedulesListPage } from "../pages/pages"

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
                    <Route path="/schedules" element={<SchedulesListPage />}/>
                    <Route path="/albuns" element={<AlbunsPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes