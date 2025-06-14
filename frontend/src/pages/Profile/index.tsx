import { MaintitleComponent } from '../../components/components'
import './style.css'

export default function Profile() {
    return (
        <>
            <div className="container-profile">
                <div className="left-profile">
                    <MaintitleComponent textFontSize='32px' />
                    <div className="left-bottom-profile">
                        <div className="search-profile">
                            <input type="text" id="search-input-profile" placeholder="Buscar..." />
                        </div>
                        <div className="left-icons-profile">
                            <div className="top-icons-profile">
                                <div className="icon-profile">
                                    <div className="icon-image-profile">
                                        <i className="material-icons">home</i>
                                    </div>
                                    <h2>Início</h2>
                                </div>
                                <div className="icon-profile">
                                    <div className="icon-image-profile">
                                        <i className="material-icons">auto_awesome_mosaic</i>
                                    </div>
                                    <h2>Álbuns</h2>
                                </div>
                                <div className="icon-profile">
                                    <div className="icon-image-profile">
                                        <i className="material-icons">event</i>
                                    </div>
                                    <h2>Agendamentos</h2>
                                </div>
                            </div>
                            <div className="bottom-icon-profile">
                                <div className="icon-profile">
                                    <div className="icon-image-profile">
                                        <i className="material-icons">account_circle</i>
                                    </div>
                                    <h2>Perfil</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-profile">
                    <div className="top-right-profile">
                        <div id="top-right-icon-profile">
                            <i className="material-icons">account_circle</i>
                        </div>
                        <h2>Perfil</h2>
                    </div>
                    <div className="bottom-right-profile">

                    </div>
                </div>
            </div>
        </>
    )
}