import { useNavigate } from 'react-router-dom'
import { MaintitleComponent } from '../components'
import './style.css'

export default function MenuOptions({ isAdmin = false }) {

    const navigate = useNavigate()

    function handleHomeButton() {
        navigate('/mainclient')
    }

    function handleAlbunsButton() {
        navigate('/albuns')
    }

    function handleAgendamentosButton() {
        navigate('/schedules')
    }

    function handleClientsButton() {
        navigate('/clientlist')
    }

    function handleProfileButton() {
        navigate('/profile')
    }
    
    return (
        <>
            <div className="left-profile">
                <MaintitleComponent textFontSize='32px' />
                <div className="left-bottom-profile">
                    <div className="search-profile">
                        <input type="text" id="search-input-profile" placeholder="Buscar..." />
                    </div>
                    <div className="left-icons-profile">
                        <div className="top-icons-profile">
                            <div className="icon-profile" onClick={handleHomeButton}>
                                <div className="icon-image-profile">
                                    <i className="material-icons">home</i>
                                </div>
                                <h2>Início</h2>
                            </div>
                            <div className="icon-profile" onClick={handleAlbunsButton}>
                                <div className="icon-image-profile">
                                    <i className="material-icons">auto_awesome_mosaic</i>
                                </div>
                                <h2>Álbuns</h2>
                            </div>
                            {isAdmin && (
                                <div className="icon-profile" onClick={handleClientsButton}>
                                    <div className="icon-image-profile">
                                        <i className="material-icons">groups</i>
                                    </div>
                                    <h2>Clientes</h2>
                                </div>
                            )}
                            <div className="icon-profile" onClick={handleAgendamentosButton}>
                                <div className="icon-image-profile">
                                    <i className="material-icons">event</i>
                                </div>
                                <h2>Agendamentos</h2>
                            </div>
                        </div>
                        <div className="bottom-icon-profile">
                            <div className="icon-profile" onClick={handleProfileButton}>
                                <div className="icon-image-profile">
                                    <i className="material-icons">account_circle</i>
                                </div>
                                <h2>Perfil</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}