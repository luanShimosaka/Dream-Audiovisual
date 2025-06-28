import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'

export default function MainClient() {
    return (
        <>
            <>
                <div className="container-clientlist">
                    <MenuOptionsComponent />
                    <div className="right-clientlist">
                        <div className="top-right-clientlist">
                            <div id="top-right-icon-clientlist">
                                <i className="material-icons">home</i>
                            </div>
                            <h2>Início</h2>
                        </div>
                        <div className="right-main">
                            <div className="albuns-principal">
                                <div className="list-main">
                                    <div className="album-main">
                                        <h2 style={{ fontSize: "24px", color: "white" }}>Álbum 1</h2>
                                        <img src="" alt="" />
                                    </div>
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
                            <div className="calendar-principal">
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
            </>
        </>
    )
}