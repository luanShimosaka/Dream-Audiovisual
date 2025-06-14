import { FormButtonComponent, FormComponent, MaintitleComponent } from '../../components/components'
import './style.css'

export default function Register() {
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
                                    <input type="text" />
                                </div>
                                <div className="email-register input-register">
                                    <h2>Email</h2>
                                    <input type="text" />
                                </div>
                                <div className="senha-register input-register">
                                    <h2>Senha</h2>
                                    <input type="text" />
                                </div>
                            </div>
                        </FormComponent>
                        <div className="button-register">
                            <FormButtonComponent text='Cadastrar-se' />
                        </div>
                        <h4>“Porque alguns sonhos merecem ser<br />lembrados para sempre.”</h4>
                    </div>
                </div>
            </div>
        </>
    )
}