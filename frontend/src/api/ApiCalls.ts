import axios, { type AxiosInstance } from "axios"
import type { Album, Schedule, User } from "../interfaces/interfaces"

interface AlbumCreate {
    titulo: string
    descricao: string
    categoria: string
    agendamentoId: number
}

export default class ApiCalls {
    private token: string | null
    private axiosInstance: AxiosInstance

    constructor(token: string) {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:3000",
            headers: { "Content-Type": "application/json" },
        })

        this.token = token
    }

    public logout(): void {
        this.token = null
        localStorage.removeItem('token')
    }

    public async getToken(): Promise<string> {
        if (this.token) return this.token

        const tokenFromStorage = localStorage.getItem('token')
        if (tokenFromStorage) {
            this.token = tokenFromStorage
            return tokenFromStorage
        }

        throw new Error("Não há token disponível e não é possível fazer login sem credenciais")
    }

    public async getAuthHeaders(): Promise<{ Authorization: string }> {
        const token = await this.getToken()
        return {
            Authorization: `Bearer ${token}`
        }
    }

    public async getClientes(): Promise<User[]> {
        const headers = await this.getAuthHeaders()

        const response = await this.axiosInstance.get("/user", {
            headers
        })

        return response.data.data
    }

    public async getAgendamentos(): Promise<Schedule[]> {
        const headers = await this.getAuthHeaders()

        const response = await this.axiosInstance.get("/agendamento", {
            headers
        })

        return response.data
    }

    public async getAlbuns(): Promise<Album[]> {
        const token = await this.getToken()
        const response = await this.axiosInstance.get('/album', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    public async getMe(): Promise<User> {
        const headers = await this.getAuthHeaders()

        const response = await this.axiosInstance.get("/auth/me", {
            headers
        })

        return response.data
    }

    public async editUser(nome: string, email: string, telefone: string, dataNasc: string, id: number): Promise<boolean> {
        const headers = await this.getAuthHeaders()

        const response = await this.axiosInstance.patch(`/user/${id}`, {
            nome,
            email,
            telefone,
            dataNasc
        }, {
            headers,
        })

        return response.status === 200 || response.status === 201
    }

    public async deleteUser(id: number): Promise<boolean> {
        const headers = await this.getAuthHeaders()

        const response = await this.axiosInstance.delete(`/user/${id}`, {
            headers,
        })

        this.logout()

        return response.status === 200 || response.status === 201
    }

    public async createAlbum(formData: AlbumCreate): Promise<boolean> {
        const token = await this.getToken()

        const response = await this.axiosInstance.post(`/album`, {
            titulo: formData.titulo,
            descricao: formData.descricao,
            categoria: formData.categoria,
            agendamentoId: formData.agendamentoId
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response.status === 200 || response.status === 201
    }
}