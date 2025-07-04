import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../context/ApiContext'
import type { ModalType } from '../../types/types'
import './style.css'
import type { Schedule } from '../../interfaces/interfaces'

interface Album {
    titulo: string
    descricao: string
    categoria: string
    agendamentoId: string
}

export default function CriacaoAlbum({ onClose }: ModalType) {
    const { api } = useApi()
    const navigate = useNavigate()

    const [album, setAlbum] = useState<Album>({
        titulo: '',
        descricao: '',
        categoria: '',
        agendamentoId: '',
    })

    const [agendamento, setAgendamento] = useState<Schedule[]>([])

    function handleInputChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target
        setAlbum(prev => ({ ...prev, [name]: value }))
    }

    async function createAlbum(e: FormEvent) {
        e.preventDefault()
        try {
            if (!api) return

            const payload = {
                ...album,
                agendamentoId: parseInt(album.agendamentoId, 10),
            }

            const success = await api.createAlbum(payload)

            if (success) {
                navigate('/albuns')
            } else {
                console.error("Erro ao criar álbum: resposta não foi bem-sucedida.")
            }
        } catch (error) {
            console.error('Erro ao criar álbum:', error)
        }
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await api?.getAgendamentos()
                setAgendamento(response ?? [])
            } catch (error) {
                console.error('Erro ao carregar agendamentos:', error)
            }
        }

        loadData()
    }, [])

    return (
        <div className="modal-overlay show">
            <form className="modal-content" onSubmit={createAlbum}>
                <h2>Criar Álbum</h2>
                <div className="form-fields">
                    <div className="field-group">
                        <label htmlFor="titulo">Título:</label>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={album.titulo}
                            onChange={handleInputChange}
                            placeholder="Título do álbum"
                            className="input-text-modal"
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={album.descricao}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="Descrição do álbum..."
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="categoria">Categoria:</label>
                        <select
                            id="categoria"
                            name="categoria"
                            value={album.categoria}
                            onChange={handleInputChange}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="casamento">Casamento</option>
                            <option value="aniversario">Aniversário</option>
                            <option value="corporativo">Corporativo</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label htmlFor="agendamento">Agendamento:</label>
                        <select
                            id="agendamento"
                            name="agendamentoId"
                            value={album.agendamentoId}
                            onChange={handleInputChange}
                        >
                            <option value="">Selecione um agendamento</option>
                            {agendamento.map(a => (
                                <option key={a.id} value={a.id}>
                                    {a.descricao}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="field-group field-group-center">
                        <label htmlFor="file-upload" className="drop-zone">
                            <div className="drop-zone-icon-container">
                                <span className="plus-icon">+</span>
                            </div>
                            <span className="drop-zone-text">Arraste ou selecione as fotos</span>
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            name="fotos"
                            multiple
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
                <div className="modal-buttons">
                    <button type="button" className="button-style" onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="button-style" onClick={onClose}>
                        Criar Álbum
                    </button>
                </div>
            </form>
        </div>
    )
}