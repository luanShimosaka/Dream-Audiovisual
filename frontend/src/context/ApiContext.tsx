import React, { createContext, useContext, useState, useEffect } from 'react'
import ApiCalls from '../api/ApiCalls'
import axios from 'axios'

interface ApiContextType {
    api: ApiCalls | null
    login: (email: string, senha: string) => Promise<void>
    register: (nome: string, email: string, senha: string) => Promise<any>
    logout: () => void
}

const ApiContext = createContext<ApiContextType | undefined>(undefined)

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [api, setApi] = useState<ApiCalls | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setApi(new ApiCalls(token))
        }
    }, [])

    const login = async (email: string, senha: string) => {
        try {
            const response = await axios.post("http://localhost:3000/auth/login", {
                email: email,
                senha: senha,
            })

            const newApi = new ApiCalls(response.data.access_token)
            await newApi.getToken()
            setApi(newApi)
        } catch (err) {
            throw new Error('Usuário ou senha errados: ' + err)
        }
    }

    const register = async (nome: string, email: string, senha: string) => {
        const response = await axios.post("http://localhost:3000/user", {
            nome,
            email,
            senha,
        })

        return response.data
    }

    const logout = () => {
        localStorage.removeItem('token')
        setApi(null)
    }

    return (
        <ApiContext.Provider value={{ api, login, register, logout }}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = (): ApiContextType => {
    const context = useContext(ApiContext)
    if (!context) {
        throw new Error("useApi deve ser usado dentro de um ApiProvider")
    }
    return context
}