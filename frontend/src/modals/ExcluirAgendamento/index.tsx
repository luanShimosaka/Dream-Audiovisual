import './style.css'

export default function ExcluirAgendamento() {
    return (
        <>
            <a href="#modal-container" className="button-style">Excluir Agendamento</a>
            <div id="modal-container">
                <div className="modal">
                    <h2>Excluir Agendamento</h2>
                    <p>Você tem certeja que deseja excluir esse agendamento?</p>
                    <div className="modal-buttons">
                        <a href="#" className="button-style">Cancelar</a>
                        <a href="#" className="button-style button-red">Excluir</a>
                    </div>
                </div>
            </div>
        </>
    );
}