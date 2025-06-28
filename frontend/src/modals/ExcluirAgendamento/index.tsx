import type { ModalType } from '../../types/types';
import './style.css';

export default function ExcluirAgendamento({ onClose }: ModalType) {
    return (
        <div className="modal-overlay show">
            <div className="modal-content">
                <h2>Excluir Agendamento</h2>
                <p>Você tem certeza que deseja excluir esse agendamento?</p>
                <div className="modal-buttons">
                    <button className="button-style" onClick={onClose}>Cancelar</button>
                    <button className="button-style button-red" onClick={onClose}>Excluir</button>
                </div>
            </div>
        </div>
    );
}