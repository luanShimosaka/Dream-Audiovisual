import type { ModalType } from '../../types/types'
import './style.css'

export default function AvaliarAlbum({ onClose, isOpen }: ModalType) {
    return (
        <div id="rating-modal-container" className={isOpen ? 'active' : ''}>
            <div className="modal-content">
                <h2>Avaliar Álbum</h2>
                <form className="star-rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label htmlFor="star5" title="5 estrelas"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label htmlFor="star4" title="4 estrelas"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label htmlFor="star3" title="3 estrelas"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label htmlFor="star2" title="2 estrelas"></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label htmlFor="star1" title="1 estrela"></label>
                </form>
                <div className="modal-buttons">
                    <a href="#" className="button-style" onClick={onClose}>Cancelar</a>
                    <a href="#" className="button-style rate-btn" onClick={onClose}>Avaliar</a>
                </div>
            </div>
        </div>
    )
}