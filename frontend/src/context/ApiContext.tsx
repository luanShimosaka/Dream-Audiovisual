import React, { createContext, useContext, useState } from 'react'
import ApiCalls from '../api/ApiCalls'
import axios from 'axios'

interface ApiContextType {
    api: ApiCalls | null
    login: (email: string, senha: string) => Promise<void>
    register: (nome: string, email: string, senha: string) => Promise<any>
}

const ApiContext = createContext<ApiContextType | undefined>(undefined)

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [api, setApi] = useState<ApiCalls | null>(null)

    const login = async (email: string, senha: string) => {
        const newApi = new ApiCalls(email, senha)
        await newApi.getToken()
        setApi(newApi)
    }

    const register = async (nome: string, email: string, senha: string) => {
        const response = await axios.post("/user", {
            nome: nome,
            email: email,
            senha: senha,
        })

        return response.data
    }

    return (
        <ApiContext.Provider value={{ api, login, register }}>
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