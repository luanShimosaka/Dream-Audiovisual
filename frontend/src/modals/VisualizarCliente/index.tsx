import type { ModalType } from '../../types/types'
import './style.css'

export default function VisualizarCliente({ onClose }: ModalType) {
    return (
        <>
            <div id="client-view-modal" className="modal-overlay">
                <div className="modal-content">
                    <h2>Nome do Cliente</h2>

                    <div className="client-info">
                        <div className="info-group">
                            <span className="info-label">E-mail:</span>
                            <div className="info-data">cliente.exemplo@email.com</div>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Telefone:</span>
                            <div className="info-data">(35) 99999-8888</div>
                        </div>
                        <div className="info-group">
                            <span className="info-label">Data nascimento:</span>
                            <div className="info-data">01/01/1990</div>
                        </div>
                    </div>
                    
                    <div className="modal-footer">
                        <a href="#" className="button-style" onClick={onClose}>Fechar</a>
                    </div>
                </div>
            </div>
        </>
    )
}