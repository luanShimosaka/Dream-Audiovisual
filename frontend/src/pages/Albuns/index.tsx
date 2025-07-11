'use client'

import { useState, useEffect } from 'react'
import { FormButtonIconsComponent, MenuOptionsComponent } from '../../components/components.ts'
import './style.css'
import { useApi } from '../../context/ApiContext.tsx'
import { CriacaoAlbumModal } from '../../modals/modals.ts'

interface Album {
    id: number
    titulo: string
}

export default function Albuns() {

    const { api } = useApi()
    const [albuns, setAlbuns] = useState<Album[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await api?.getAlbuns()
                console.log(response)
                setAlbuns(response ?? [])
            } catch (error) {
                console.error('Erro ao carregar álbuns:', error)
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
                                <i className="material-icons">auto_awesome_mosaic</i>
                            </div>
                            <h2>Álbuns</h2>
                        </div>
                        <div className="buttons-schedule">
                            <div className="button-schedule" onClick={() => setIsModalOpen(true)}>
                                <FormButtonIconsComponent text='Adicionar Álbum' />
                            </div>
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Filtrar por...' icon='filter_alt' />
                            </div>
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Ordenar por...'  icon='reorder' />
                            </div>
                        </div>
                        <div className="bottom-right-clientlist">
                            <div className="row-albuns">
                                {Array.isArray(albuns) && (
                                    albuns.map((album) => (
                                        <div className="album" key={album.id}>
                                            <img src="" alt="" />
                                            <h2 style={{ fontSize: "24px", color: "white" }}>{album.titulo}</h2>
                                        </div>
                                    ))
                                )}
                            </div>
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