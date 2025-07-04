import { useNavigate } from 'react-router-dom'
import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useApi } from '../../context/ApiContext.tsx'
import type { Album, Schedule } from '../../interfaces/interfaces.ts'

export default function MainPhoto() {

    const { api } = useApi()
    const [albuns, setAlbuns] = useState<Album[]>([])
    const [clientsNumber, setClientNumbers] = useState(0)
    const [schedules, setSchedules] = useState<Schedule[]>([])

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

    const loadClientsNumber = async () => {
        try {
            const response = await axios.get('http://localhost:3000/user')
            const data = response.data.data
            setClientNumbers(Array.isArray(data) ? data.length : 0)
        } catch (error) {
            console.error('Erro ao carregar clientes:', error)
        }
    }

    const loadAlbuns = async () => {
        try {
            const response = await api?.getAlbuns()
            setAlbuns(response ?? [])
        } catch (error) {
            console.error('Erro ao carregar álbuns:', error)
        }
    }

    const loadSchedules = async () => {
        try {
            const response = await api?.getAgendamentos()
            setSchedules(response ?? [])
        } catch (error) {
            console.error('Erro ao carregar agendamentos:', error)
        }
    }

    useEffect(() => {
        loadClientsNumber()
        loadAlbuns()
        loadSchedules()
    }, [])

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
                                        <h2 style={{ fontSize: "96px", color: "white", fontWeight: "700" }}>{clientsNumber}</h2>
                                    </div>
                                    <h2 style={{ fontSize: "25px", color: "white" }} className="tab-text-main" onClick={handleClientsButton}>Menu Clientes</h2>
                                </div>
                                <div className="tab-main">
                                    <div className="tab-top-main">
                                        <h2 style={{ fontSize: "25px", color: "white" }}>Agendamentos Futuros</h2>
                                        <h2 style={{ fontSize: "96px", color: "white", fontWeight: "700" }}>{Array.isArray(schedules) && schedules.length}</h2>
                                    </div>
                                    <h2 style={{ fontSize: "25px", color: "white" }} className="tab-text-main" onClick={handleAgendamentosButton}>Menu Agendamentos</h2>
                                </div>
                                <div className="tab-main">
                                    <div className="tab-top-main">
                                        <h2 style={{ fontSize: "25px", color: "white" }}>Álbuns Entregues</h2>
                                        <h2 style={{ fontSize: "96px", color: "white", fontWeight: "700" }}>{Array.isArray(albuns) && albuns.length}</h2>
                                    </div>
                                    <h2 style={{ fontSize: "25px", color: "white" }} className="tab-text-main" onClick={handleAlbunsButton}>Menu Álbuns</h2>
                                </div>
                            </div>
                            <div className="bottom-row-main">
                                <div className="albuns-principal principal-photo">
                                    <div className="list-main">
                                        {Array.isArray(albuns) && (
                                            albuns.map((album) => (
                                                <div className="album-main" key={album.id}>
                                                    <h2 style={{ fontSize: "24px", color: "white" }}>{album.titulo}</h2>
                                                    <img src="" alt="" />
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                                <div className="calendar-principal principal-photo">
                                    <div className="calendar-main"></div>
                                    <div className="list-main schedule-list-main">
                                        {Array.isArray(schedules) && (
                                            schedules.map((schedule) => (
                                                <div className="schedule-main" key={schedule.id}>
                                                    <h2 style={{ fontSize: "16px", color: "#CCC" }}>{schedule.data}</h2>
                                                    <h2 style={{ fontSize: "24px", color: "white" }}>{schedule.descricao}</h2>
                                                </div>
                                            ))
                                        )}
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