import type { ModalType } from '../../types/types';
import './style.css';

export default function AdicionarFoto({ isOpen, onClose }: ModalType) {
    return (
        <div id="upload-modal-container" className={isOpen ? 'active' : ''}>
            <form className="modal-content" action="#" method="post" encType="multipart/form-data">
                <h2>Título do Álbum</h2>
                <label htmlFor="file-upload" className="drop-zone">
                    <div className="drop-zone-icon-container">
                        <span className="plus-icon">+</span>
                    </div>
                    <span className="drop-zone-text">Arraste ou selecione as fotos</span>
                </label>
                <input type="file" id="file-upload" name="fotos[]" multiple />
                <div className="modal-buttons">
                    <button type="button" className="button-style" onClick={onClose}>Cancelar</button>
                    <a href="#" className="button-style">Adicionar Foto</a>
                </div>
            </form>
        </div>
    );
}
