import type { ModalType } from '../../types/types';
import './style.css'

export default function ExcluirAlbum({ onClose }: ModalType) {
    return (
        <>
            <div id="modal-container">
                <div className="modal">
                    <h2>Excluir Álbum</h2>
                    <p>Você tem certeza que deseja excluir esse álbum? Todas as fotos serão apagadas permanententemente!</p>
                    <div className="modal-buttons">
                        <a href="#" className="button-style" onClick={onClose}>Cancelar</a>
                        <a href="#" className="button-style button-red" onClick={onClose}>Excluir</a>
                    </div>
                </div>
            </div>
        </>
    );
}