import './style.css'

import { useNavigate } from 'react-router-dom'

export default function Start() {

    const navigate = useNavigate()

    function handleBudgetButton() {
        navigate('/login')
    }

    return (
        <>
            <div className="container-start">
                <div className="top-start">
                    <div id="title-and-subtitle-start">
                        <h1 id="title-start">Dream Audiovisual</h1>
                        <h3 id="subtitle-start">Uma nova visão sobre a sua realidade</h3>
                    </div>
                    <button className="budget-button budget-button-start" onClick={handleBudgetButton} >Peça um Orçamento</button>
                </div>

                <div className="bottom-start">
                    <div className='line-start'></div>
                    <img src="../../../assets/clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.svg" alt="" className="logo-start" />
                    <div className='line-start'></div>
                    <img src="../../../assets/clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.svg" alt="" className="logo-start" />
                    <div className='line-start'></div>
                    <img src="../../../assets/clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.svg" alt="" className="logo-start" />
                    <div className='line-start'></div>
                    <img src="../../../assets/clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.svg" alt="" className="logo-start" />
                    <div className='line-start'></div>
                    <img src="../../../assets/clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.svg" alt="" className="logo-start" />
                    <div className='line-start'></div>
                </div>
            </div>
        </>
    )
}