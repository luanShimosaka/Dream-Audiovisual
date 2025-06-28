import type { ModalType } from '../../types/types'
import './style.css'

export default function VisualizacaoAlbumFotografo({ isOpen, onClose }: ModalType) {
    return (
        <>
            <div id="modal-container" className={isOpen ? 'active' : ''}>
                <div className="modal large">
                    <h2>Título do Álbum</h2>

                    <div className="info-fields">
                        <div className="field-group">
                            <span className="field-label">Cliente:</span>
                            <div className="field-data">Nome do Cliente</div>
                        </div>
                        <div className="field-group">
                            <span className="field-label">Descrição:</span>
                            <div className="field-data">Casamento na Praia</div>
                        </div>
                        <div className="field-group">
                            <span className="field-label">Categoria:</span>
                            <div className="field-data">Eventos</div>
                        </div>
                        <div className="field-group">
                            <span className="field-label">Avaliação:</span>
                            <div className="field-data">★★★★★</div>
                        </div>
                    </div>

                    <div className="photo-grid">
                        {Array(11).fill(0).map((_, i) => (
                            <div key={i} className="photo-placeholder">
                                <svg viewBox="0 0 24 24" fill="#888" width="40%" height="40%">
                                    <path d="M21.71,19.29,18,15.59a1,1,0,0,0-1.42,0L13,19.17l-3.29-3.29a1,1,0,0,0-1.42,0L3,21.17V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1ZM20,2H4A3,3,0,0,0,1,5V21a1,1,0,0,0,.5.86,1,1,0,0,0,1,0L8,16.41l3.29,3.3a1,1,0,0,0,1.42,0L16,16.12l3.29,3.3a1,1,0,0,0,1.42,0,1,1,0,0,0,.5-.86V5A3,3,0,0,0,20,2ZM7,11a2,2,0,1,0-2-2A2,2,0,0,0,7,11Z" />
                                </svg>
                            </div>
                        ))}
                    </div>

                    <div className="modal-buttons">
                        <label htmlFor="file-upload" className="button-style">Adicionar Foto</label>
                        <input type="file" id="file-upload" multiple style={{ display: 'none' }} />

                        <a href="#" className="button-style" onClick={onClose}>Editar Dados</a>
                        <a href="#" className="button-style button-red" onClick={onClose}>Excluir Álbum</a>
                        <a href="#" className="button-style" onClick={onClose}>Fechar</a>
                    </div>
                </div>
            </div>
        </>
    )
}