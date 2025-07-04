import axios, { type AxiosInstance } from "axios"
import type { User } from "../interfaces/interfaces"

export default class ApiCalls {
    private token: string | null
    private email: string
    private senha: string
    private axiosInstance: AxiosInstance

    constructor(email: string, senha: string) {
        this.token = null
        this.email = email
        this.senha = senha
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:3000",
            headers: { "Content-Type": "application/json" },
        })
    }

    private async fazerLogin(): Promise<string> {
        const response = await this.axiosInstance.post("/auth/login", {
            email: this.email,
            senha: this.senha,
        })

        const token = response.data.access_token
        if (!token) {
            throw new Error("Token não retornado pela API.")
        }

        this.token = token
        return token
    }

    public async getToken(): Promise<string> {
        return this.token ?? await this.fazerLogin()
    }

    public async getAuthHeaders(): Promise<{ Authorization: string }> {
        const token = await this.getToken()
        return {
            Authorization: `Bearer ${token}`,
        }
    }

    public async getClientes(): Promise<User[]> {
        const headers = await this.getAuthHeaders()

        const response = await this.axiosInstance.get("/user", {
            headers,
        })

        return response.data.data
    }
}