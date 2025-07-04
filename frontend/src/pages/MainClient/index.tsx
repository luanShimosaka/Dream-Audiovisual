import { useEffect, useState } from 'react'
import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'
import { useApi } from '../../context/ApiContext.tsx'
import type { Album, Schedule } from '../../interfaces/interfaces.ts'

export default function MainClient() {

    const { api } = useApi()
        const [albuns, setAlbuns] = useState<Album[]>([])
        const [schedules, setSchedules] = useState<Schedule[]>([])

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
                        <div className="right-main">
                            <div className="albuns-principal">
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
                            <div className="calendar-principal">
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
            </>
        </>
    )
}