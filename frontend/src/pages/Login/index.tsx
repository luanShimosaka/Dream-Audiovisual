import { useState } from 'react';
import { FormButtonComponent, FormComponent, MaintitleComponent } from '../../components/components';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        identificador: '',
        senha: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', 
                {
                    "email": formData.identificador,
                    "senha": formData.senha,
                }
            )

            console.log('Login realizado com sucesso:', response.data)

            const userSearch = await axios.get(`http://localhost:3000/user/${response.data.user.id}`)

            localStorage.setItem('user_id', String(userSearch.data.id))
            localStorage.setItem('nome', userSearch.data.nome)
            localStorage.setItem('email', userSearch.data.email)
            localStorage.setItem('telefone', userSearch.data.telefone ?? '-')
            localStorage.setItem('dataNasc', userSearch.data.datanascimento ?? '-')

            navigate('/mainclient')
        } catch (err) {
            console.error('Erro ao fazer login:', err)
        }
    }

    return (
        <div className="container-login">
            <img src="../../../assets/main-logo.svg" alt="" id="main-logo-login" />
            <div className="form-login">
                <div className="title-login">
                    <MaintitleComponent textFontSize="67.5px" />
                </div>
                <div className="under-title-login">
                    <FormComponent>
                        <div className="inputs-login">
                            <div className="nome-email-login input-login">
                                <h2>Nome do usuário ou e-mail</h2>
                                <input
                                    type="text"
                                    name="identificador"
                                    value={formData.identificador}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="senha-login input-login">
                                <h2>Senha</h2>
                                <input
                                    type="password"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </FormComponent>
                    <h3>Esqueci minha senha</h3>
                    <div className="button-login" onClick={handleSubmit}>
                        <FormButtonComponent text="Entrar" />
                    </div>
                    <h4>
                        “Porque alguns sonhos merecem ser<br />
                        lembrados para sempre.”
                    </h4>
                </div>
            </div>
        </div>
    )
}