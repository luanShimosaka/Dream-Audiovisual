import { AboutmeComponent, HeaderComponent, PortfolioComponent, StartComponent } from "../../components/components";
import './style.css'

export default function Landpage() {
    return (
        <>
            <HeaderComponent />
            <div className="container-landpage">
                <StartComponent />
                <AboutmeComponent />
                <PortfolioComponent />
            </div>
        </>
    )
}