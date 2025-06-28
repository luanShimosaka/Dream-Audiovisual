'use client'

import { useEffect, useState } from 'react'
import { FormButtonIconsComponent, MenuOptionsComponent } from '../../components/components.ts'
import './style.css'
import { CriacaoAlbumModal } from '../../modals/modals.ts'
import axios from 'axios'

interface Schedule {
    id: number
    descricao: string
    local: string
    data: string
}

export default function SchedulesList() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [schedules, setSchedules] = useState<Schedule[]>([])

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/agendamento')
                setSchedules(response.data)
            } catch (error) {
                console.error('Erro ao carregar agendamentos:', error)
            }
        }

        loadData()
    }, [])

    return (
        <>
            <>
                <div className="container-clientlist">
                    <MenuOptionsComponent isAdmin />
                    <div className="right-clientlist">
                        <div className="top-right-clientlist">
                            <div id="top-right-icon-clientlist">
                                <i className="material-icons">event</i>
                            </div>
                            <h2>Agendamentos</h2>
                        </div>
                        <div className="buttons-schedule">
                            <div className="button-schedule" onClick={() => setIsModalOpen(true)}>
                                <FormButtonIconsComponent text='Adicionar Agendamento' />
                            </div>
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Filtrar por...' icon='filter_alt' />
                            </div>
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Ordenar por...' icon='reorder' />
                            </div>
                        </div>
                        <div className="bottom-right-clientlist">
                            <table id="clients-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Descrição</th>
                                        <th>Local</th>
                                        <th>Data Agen.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(schedules) && schedules.length > 0 ? (
                                        schedules.map((schedule) => (
                                            <tr key={schedule.id}>
                                                <td>{schedule.id}</td>
                                                <td>{schedule.descricao}</td>
                                                <td>{schedule.local}</td>
                                                <td>{schedule.data}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} style={{ textAlign: 'center' }}>Nenhum agendamento encontrado.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {isModalOpen && (
                    <CriacaoAlbumModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                )}
            </>
        </>
    )
}