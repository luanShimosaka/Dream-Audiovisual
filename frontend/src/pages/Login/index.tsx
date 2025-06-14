import { FormButtonComponent, FormComponent, MaintitleComponent } from '../../components/components'
import './style.css'

export default function Login() {
    return (
        <>
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
                                    <input type="text" />
                                </div>
                                <div className="senha-login input-login">
                                    <h2>Senha</h2>
                                    <input type="password" />
                                </div>
                            </div>
                        </FormComponent>
                        <h3>Esqueci minha senha</h3>
                        <div className="button-login">
                            <FormButtonComponent text='Entrar' />
                        </div>
                        <h4>“Porque alguns sonhos merecem ser<br />lembrados para sempre.”</h4>
                    </div>
                </div>
            </div>
        </>
    )
}