import './style.css'

export default function Header() {
    return (
        <>
            <div className="container">
                <div className="left">
                    <div id="title-and-logo">
                        <img src="../../../public/assets/logo.svg" alt="" id="logo" />
                        <h1 id="title">Luan Shimosaka</h1>
                    </div>
                </div>

                <div className="right">
                    <div id="links">
                        <a href="" id="main">Início</a>
                        <a href="" id="aboutme">Sobre Mim</a>
                        <a href="" id="portfolio">Portfólio</a>
                        <button id="budget-button">Peça um Orçamento</button>
                    </div>
                </div>
            </div>
        </>
    )
}