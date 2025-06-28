import './style.css'

export default function VisualizacaoAlbumUsuario() {
    return (
        <>
            <a href="#album-details-modal" className="button-style-open">Ver e Selecionar Fotos</a>

            <div id="album-details-modal" className="modal-overlay">
                <form className="modal-content large" action="#">
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
                        <div className="photo-item">
                            <input type="checkbox" id="foto1" className="photo-checkbox" />
                            <label htmlFor="foto1" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto2" className="photo-checkbox" />
                            <label htmlFor="foto2" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto3" className="photo-checkbox" />
                            <label htmlFor="foto3" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto4" className="photo-checkbox" />
                            <label htmlFor="foto4" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto5" className="photo-checkbox" />
                            <label htmlFor="foto5" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto6" className="photo-checkbox" />
                            <label htmlFor="foto6" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto7" className="photo-checkbox" />
                            <label htmlFor="foto7" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto8" className="photo-checkbox" />
                            <label htmlFor="foto8" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto9" className="photo-checkbox" />
                            <label htmlFor="foto9" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto10" className="photo-checkbox" />
                            <label htmlFor="foto10" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto11" className="photo-checkbox" />
                            <label htmlFor="foto11" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                        <div className="photo-item">
                            <input type="checkbox" id="foto12" className="photo-checkbox" />
                            <label htmlFor="foto12" className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></label>
                        </div>
                    </div>

                    <div className="modal-buttons">
                        <button type="submit" className="button-style">Confirmar Seleção</button>
                        <a href="#" className="button-style">Avaliar Álbum</a>
                        <a href="#" className="button-style">Fechar</a>
                    </div>
                </form>
            </div>
        </>
    )
}