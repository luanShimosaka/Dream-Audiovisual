import { MaintitleComponent } from '../../components/components'
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
                </div>
            </div>
        </>
    )
}