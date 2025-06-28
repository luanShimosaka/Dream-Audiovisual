import axios from 'axios';
import type { ModalType } from '../../types/types';
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function ExcluirConta({ isOpen, onClose }: ModalType) {

    const navigate = useNavigate()

    async function deleteUser() {
        try {

            const userId = localStorage.getItem('user_id')

            if (!userId) throw new Error

            const response = await axios.delete(`http://localhost:3000/user/${userId}`)

            console.log(response)

            navigate('/login')

        } catch (error) {
            console.error('Erro ao deletar usuário: ', error)
        }
    }

    return (
        <div id="modal-container" className={isOpen ? 'active' : ''}>
            <div className="modal">
                <h2>Excluir Conta</h2>
                <p>Você tem certeza que deseja excluir sua conta? Você perderá acesso a todos os seus álbuns!</p>
                <div className="modal-buttons">
                    <a href="#" className="button-style" onClick={onClose}>Cancelar</a>
                    <a href="#" className="button-style button-red" onClick={() => {
                        onClose()
                        deleteUser()
                    }}>Excluir</a>
                </div>
            </div>
        </div>
    )
}