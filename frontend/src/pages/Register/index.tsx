import { useState } from 'react'
import { FormButtonComponent, FormComponent, MaintitleComponent } from '../../components/components'
import './style.css'
import { useApi } from '../../context/ApiContext'

export default function Register() {

    const { register } = useApi()

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        try {
            const response = await register(formData.nome, formData.email, formData.senha)
            alert('Usuário cadastrado com sucesso!')
            console.log(response)
        } catch (err) {
            alert('Houve um erro ao cadastrar o usuário')
            console.error('Erro ao cadastrar usuário:', err)
        }
    }

    return (
        <>
            <div className="container-register">
                <img src="../../../assets/main-logo.svg" alt="" id="main-logo-login" />
                <div className="form-register">
                    <div className="title-register">
                        <MaintitleComponent textFontSize="67.5px" />
                    </div>
                    <div className="under-title-login">
                        <FormComponent isLogin={false}>
                            <div className="inputs-register">
                                <div className="nome-register input-register">
                                    <h2>Nome do usuário</h2>
                                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                                </div>
                                <div className="email-register input-register">
                                    <h2>Email</h2>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="senha-register input-register">
                                    <h2>Senha</h2>
                                    <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
                                </div>
                            </div>
                        </FormComponent>
                        <div className="button-register" onClick={handleSubmit}>
                            <FormButtonComponent text='Cadastrar-se' />
                        </div>
                        <h4>“Porque alguns sonhos merecem ser<br />lembrados para sempre.”</h4>
                    </div>
                </div>
            </div>
        </>
    )
}