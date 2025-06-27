import { MenuOptionsComponent } from '../../components/components.ts'
import './style.css'

export default function SchedulesList() {
    return (
        <>
            <>
                <div className="container-clientlist">
                    <MenuOptionsComponent />
                    <div className="right-clientlist">
                        <div className="top-right-clientlist">
                            <div id="top-right-icon-clientlist">
                                <i className="material-icons">event</i>
                            </div>
                            <h2>Agendamentos</h2>
                        </div>
                        <div className="bottom-right-clientlist">
                            <table id="clients-table">
                                <tr>
                                    <th>ID</th>
                                    <th>Descrição</th>
                                    <th>Local</th>
                                    <th>Data Agen.</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Exemplo</td>
                                    <td>Exemplo</td>
                                    <td>XX/XX/XXXX</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}