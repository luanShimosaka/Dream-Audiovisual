import './style.css'

export default function Header() {
    return (
        <>
            <div className="container-header">
                <div className="left-header">
                    <div id="title-and-logo-header">
                        <img src="../../../public/assets/logo.svg" alt="" id="logo-header" />
                        <h1 id="title-header">Luan Shimosaka</h1>
                    </div>
                </div>

                <div className="right-header">
                    <div id="links-header">
                        <a href="" id="main-header">Início</a>
                        <a href="" id="aboutme-header">Sobre Mim</a>
                        <a href="" id="portfolio-header">Portfólio</a>
                        <button className="budget-button-header budget-button">Peça um Orçamento</button>
                    </div>
                </div>
            </div>
        </>
    )
}