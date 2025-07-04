export interface User {
    id: number
    nome: string
    email: string
    telefone: string | null
    dataNasc: string
}

export interface Schedule {
    id: number
    descricao: string
    local: string
    data: string
}

export interface Album {
    id: number
    titulo: string
}