import { useNavigate } from 'react-router-dom'
import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'

export default function MainPhoto() {

    const navigate = useNavigate()

    function handleAlbunsButton() {
        navigate('/albuns')
    }

    function handleAgendamentosButton() {
        navigate('/schedules')
    }

    function handleClientsButton() {
        navigate('/clientlist')
    }

    return (
        <>
            <>
                <div className="container-clientlist">
                    <MenuOptionsComponent isAdmin />
                    <div className="right-clientlist">
                        <div className="top-right-clientlist">
                            <div id="top-right-icon-clientlist">
                                <i className="material-icons">home</i>
                            </div>
                            <h2>Início</h2>
                        </div>
                        <div className="right-main right-main-photo">
                            <div className="top-row-main">
                                <div className="tab-main">
                                    <div className="tab-top-main">
                                        <h2 style={{ fontSize: "25px", color: "white" }}>Número de Clientes</h2>
                                        <h2 style={{ fontSize: "96px", color: "white", fontWeight: "700" }}>12</h2>
                                    </div>
                                    <h2 style={{ fontSize: "25px", color: "white" }} className="tab-text-main" onClick={handleClientsButton}>Menu Clientes</h2>
                                </div>
                                <div className="tab-main">
                                    <div className="tab-top-main">
                                        <h2 style={{ fontSize: "25px", color: "white" }}>Agendamentos Futuros</h2>
                                        <h2 style={{ fontSize: "96px", color: "white", fontWeight: "700" }}>3</h2>
                                    </div>
                                    <h2 style={{ fontSize: "25px", color: "white" }} className="tab-text-main" onClick={handleAgendamentosButton}>Menu Agendamentos</h2>
                                </div>
                                <div className="tab-main">
                                    <div className="tab-top-main">
                                        <h2 style={{ fontSize: "25px", color: "white" }}>Álbuns Entregues</h2>
                                        <h2 style={{ fontSize: "96px", color: "white", fontWeight: "700" }}>18</h2>
                                    </div>
                                    <h2 style={{ fontSize: "25px", color: "white" }} className="tab-text-main" onClick={handleAlbunsButton}>Menu Álbuns</h2>
                                </div>
                            </div>
                            <div className="bottom-row-main">
                                <div className="albuns-principal principal-photo">
                                    <div className="list-main">
                                        <div className="album-main">
                                            <h2 style={{ fontSize: "24px", color: "white" }}>Álbum 1</h2>
                                            <img src="" alt="" />
                                        </div>
                                        <div className="album-main">
                                            <h2 style={{ fontSize: "24px", color: "white" }}>Álbum 1</h2>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="calendar-principal principal-photo">
                                    <div className="calendar-main"></div>
                                    <div className="list-main schedule-list-main">
                                        <div className="schedule-main">
                                            <h2 style={{ fontSize: "16px", color: "#CCC" }}>8:30 AM</h2>
                                            <h2 style={{ fontSize: "24px", color: "white" }}>Ensaio Alb1</h2>
                                        </div>
                                        <div className="schedule-main">
                                            <h2 style={{ fontSize: "16px", color: "#CCC" }}>10 AM</h2>
                                            <h2 style={{ fontSize: "24px", color: "white" }}>Ensaio Alb2</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}