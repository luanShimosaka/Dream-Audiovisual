import './style.css'

import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate()

    function handleBudgetButton() {
        navigate('/login')
    }

    return (
        <>
            <div className="container-header">
                <div className="left-header">
                    <div id="title-and-logo-header">
                        <img src="../../../assets/main-logo.svg" alt="" id="logo-header" />
                        <h1 id="title-header">Dream Audiovisual</h1>
                    </div>
                </div>

                <div className="right-header">
                    <div id="links-header">
                        <a href="" id="main-header">Início</a>
                        <a href="" id="aboutme-header">Sobre Nós</a>
                        <a href="" id="portfolio-header">Portfólio</a>
                        <button className="budget-button-header budget-button" onClick={handleBudgetButton} >Fazer Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}