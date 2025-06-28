import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'

export default function ClientList() {
    return (
        <>
            <>
                <div className="container-clientlist">
                    <MenuOptionsComponent isAdmin />
                    <div className="right-clientlist">
                        <div className="top-right-clientlist">
                            <div id="top-right-icon-clientlist">
                                <i className="material-icons">groups</i>
                            </div>
                            <h2>Lista de Clientes</h2>
                        </div>
                        <div className="bottom-right-clientlist">
                            <table id="clients-table">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Exemplo</td>
                                    <td>Exemplo</td>
                                    <td>(XX) XXXXX-XXXX</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}