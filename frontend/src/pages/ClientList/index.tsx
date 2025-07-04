'use client'

import { useEffect, useState } from 'react'
import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'
import { useApi } from '../../context/ApiContext.tsx'
import type { User } from '../../interfaces/interfaces.ts'

export default function ClientList() {
    
    const { api } = useApi()
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await api?.getClientes()
                setUsers(response ?? [])
            } catch (error) {
                console.error('Erro ao carregar usuários:', error)
            }
        }

        loadData()
    }, [])

    return (
        <div className="container-clientlist">
            <MenuOptionsComponent isAdmin />
            <div className="right-clientlist">
                <div className="top-right-clientlist">
                    <div id="top-right-icon-clientlist">
                        <i className="material-icons">groups</i>
                    </div>
                    <h2>Lista de Clientes</h2>
                </div>
                <div className="bottom-right-clientlist">
                    <table id="clients-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.nome}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telefone ?? '-'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} style={{ textAlign: 'center' }}>Nenhum cliente encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}