import type { ModalType } from '../../types/types'
import './style.css'

export default function VisualizacaoFoto({ onClose }: ModalType) {
    return (
        <>
            <div id="view-photo-modal">
                <div className="modal-content">
                    <h2>Título do Álbum</h2>

                    <div className="image-container">
                        <img src="https://picsum.photos/id/237/800/600" alt="Foto de um cachorro preto" />
                    </div>
                    
                    <div className="modal-buttons">
                        <a href="#" className="button-style">Selecionar Foto</a>
                        
                        <a href="https://picsum.photos/id/237/800/600" download="cachorro-preto.jpg" className="button-style" onClick={onClose}>Baixar Foto</a>
                        
                        <a href="#" className="button-style" onClick={onClose}>Fechar</a>
                    </div>
                </div>
            </div>
        </>
    )
}