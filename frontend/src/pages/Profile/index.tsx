'use client'

import { useEffect, useState } from 'react'
import { FormButtonComponent, MenuOptionsComponent } from '../../components/components'
import './style.css'
import { ExcluirContaModal } from '../../modals/modals'
import type { User } from '../../interfaces/interfaces'
import { useApi } from '../../context/ApiContext'

export default function Profile() {

    const { api } = useApi()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditing, setEditing] = useState(false)
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const loadData = async () => {
            try {

                const userData = await api?.getMe()

                if (userData) {
                    setUser(userData)
                } else {
                    console.error('Erro: usuário não encontrado.')
                }

            } catch (error) {
                console.error('Erro ao carregar usuário:', error)
            }
        }

        loadData()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prev => prev ? { ...prev, [name]: value } : prev)
    }

    const handleEditClick = async () => {
        if (isEditing) {
            try {
                if (!user) return

                const response = await api?.editUser(
                    user.nome ?? '',
                    user.email ?? '',
                    user.telefone ?? '',
                    user.dataNasc ?? '',
                    user.id
                )

                if (response) {
                    console.log('Usuário atualizado com sucesso!')
                } else console.error('Erro ao editar usuário')

                setEditing(false)
            } catch (error) {
                console.error('Erro ao editar usuário:', error)
            }
        } else {
            setEditing(true)
        }
    }

    return (
        <>
            <div className="container-profile">
                <MenuOptionsComponent />
                <div className="right-profile">
                    <div className="top-right-profile">
                        <div id="top-right-icon-profile">
                            <i className="material-icons">account_circle</i>
                        </div>
                        <h2>Perfil</h2>
                    </div>
                    <div className="bottom-right-profile">
                        <div className="icon-edit-profile" onClick={handleEditClick}>
                            <i className="material-symbols-outlined">edit</i>
                        </div>
                        <div className="infos-profile">
                            <div className="pic-profile">
                                <img src="" alt="" id="profile-picture" />
                                <h2 style={{ fontSize: "24px", color: "white" }}>Foto de Perfil</h2>
                            </div>

                            <div className="text-infos-profile">
                                <div className="nome-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Nome</h2>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="nome"
                                            value={user?.nome || ''}
                                            onChange={handleChange}
                                            style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }}
                                            className="input-type-profile"
                                        />
                                    ) : (
                                        <h2 style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }} className="input-type-profile">{user?.nome}</h2>
                                    )}
                                </div>
                                <div className="email-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Email</h2>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={user?.email || ''}
                                            onChange={handleChange}
                                            style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }}
                                            className="input-type-profile"
                                        />
                                    ) : (
                                        <h2 style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }} className="input-type-profile">{user?.email}</h2>
                                    )}
                                </div>
                                <div className="telefone-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Telefone</h2>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="telefone"
                                            value={user?.telefone || ''}
                                            onChange={handleChange}
                                            style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }}
                                            className="input-type-profile"
                                        />
                                    ) : (
                                        <h2 style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }} className="input-type-profile">{user?.telefone}</h2>
                                    )}
                                </div>
                                <div className="data-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Data de Nascimento</h2>
                                    {isEditing ? (
                                        <input
                                            type="data"
                                            name="data"
                                            value={user?.dataNasc || ''}
                                            onChange={handleChange}
                                            style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }}
                                            className="input-type-profile"
                                        />
                                    ) : (
                                        <h2 style={{ fontSize: "24px", color: "white", display: "flex", alignItems: "center", paddingLeft: "10px" }} className="input-type-profile">{user?.dataNasc}</h2>
                                    )}
                                </div>
                                <div className="button-profile text-profile" onClick={() => setIsModalOpen(true)}>
                                    <FormButtonComponent text="Apagar Conta" color="#F00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <ExcluirContaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    )
}