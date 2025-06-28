import './style.css'

import { useNavigate } from 'react-router-dom'

type FormProps = {
    children: React.ReactNode;
    isLogin?: boolean;
};

export default function Form({ children, isLogin = true }: FormProps) {

    const navigate = useNavigate()

    function handleToLoginButton() {
        navigate('/login')
    }

    function handleToRegisterButton() {
        navigate('/register')
    }

    const selectedStyle = {
        borderBottom: '2px solid #EEE',
        borderBottomLeftRadius: '2px',
        borderBottomRightRadius: '2px',
    };

    return (
        <div className="container-form">
            <div className="login-cadastro-form">
                <h2 style={isLogin ? selectedStyle : {}} className='h2-form' onClick={handleToLoginButton} >Login</h2>
                <h2 style={!isLogin ? selectedStyle : {}} className='h2-form' onClick={handleToRegisterButton} >Cadastro</h2>
            </div>

            {children}
        </div>
    );
}