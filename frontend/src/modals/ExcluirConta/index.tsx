import type { ModalType } from '../../types/types';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../context/ApiContext';

export default function ExcluirConta({ isOpen, onClose }: ModalType) {

    const { api } = useApi()
    const navigate = useNavigate()

    async function deleteUser() {
        try {

            const user = await api?.getMe()

            if (!user) throw new Error

            const response = await api?.deleteUser(user.id)

            if (response) {
                console.log('Usuário deletado com sucesso!')
                navigate('/login')
                alert('Usuário deletado com sucesso!')
            } else {
                alert('Erro ao deletar usuário')
                console.error('Erro ao deletar usuário')
            }

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