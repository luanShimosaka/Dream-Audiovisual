import './style.css'

export default function ExcluirConta() {
    return (
        <>
            <a href="#modal-container" className="button-style">Excluir Conta</a>
            <div id="modal-container">
                <div className="modal">
                    <h2>Excluir Conta</h2>
                    <p>Você tem certeza que deseja excluir sua conta? Você perderá acesso a todos os seus álbuns!</p>
                    <div className="modal-buttons">
                        <a href="#" className="button-style">Cancelar</a>
                        <a href="#" className="button-style button-red">Excluir</a>
                    </div>
                </div>
            </div>
        </>
    );
}