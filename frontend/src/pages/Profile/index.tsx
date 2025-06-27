import { FormButtonComponent, MenuOptionsComponent } from '../../components/components'
import './style.css'

export default function Profile() {
    return (
        <>
            <div className="container-profile">
                <MenuOptionsComponent />
                <div className="right-profile">
                    <div className="top-right-profile">
                        <div id="top-right-icon-profile">
                            <i className="material-icons">account_circle</i>
                        </div>
                        <h2>Perfil</h2>
                    </div>
                    <div className="bottom-right-profile">
                        <div className="icon-edit-profile">
                            <i className="material-symbols-outlined">edit</i>
                        </div>
                        <div className="infos-profile">
                            <div className="pic-profile">
                                <img src="" alt="" id="profile-picture" />
                                <h2 style={{ fontSize: "24px", color: "white" }}>Foto de Perfil</h2>
                            </div>

                            <div className="text-infos-profile">
                                <div className="nome-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Nome</h2>
                                    <h2 className="input-type-profile"></h2>
                                </div>
                                <div className="email-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>E-mail</h2>
                                    <h2 className="input-type-profile"></h2>
                                </div>
                                <div className="telefone-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Telefone</h2>
                                    <h2 className="input-type-profile"></h2>
                                </div>
                                <div className="data-profile text-profile">
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Data de Nascimento</h2>
                                    <h2 className="input-type-profile"></h2>
                                </div>
                                <div className="button-profile text-profile">
                                    <FormButtonComponent text="Apagar Conta" color="#F00"></FormButtonComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}