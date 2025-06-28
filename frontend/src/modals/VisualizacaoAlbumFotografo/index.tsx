import './style.css'

export default function VisualizacaoAlbumFotografo() {
    return (
        <>
            <a href="#album-admin-modal" className="button-style-open">Gerenciar Álbum</a>

            <div id="album-admin-modal" className="modal-overlay">
                <div className="modal-content large">
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
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29,18,15.59a1,1,0,0,0-1.42,0L13,19.17l-3.29-3.29a1,1,0,0,0-1.42,0L3,21.17V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1ZM20,2H4A3,3,0,0,0,1,5V21a1,1,0,0,0,.5.86,1,1,0,0,0,1,0L8,16.41l3.29,3.3a1,1,0,0,0,1.42,0L16,16.12l3.29,3.3a1,1,0,0,0,1.42,0,1,1,0,0,0,.5-.86V5A3,3,0,0,0,20,2ZM7,11a2,2,0,1,0-2-2A2,2,0,0,0,7,11Z"></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                        <div className="photo-placeholder"><svg viewBox="0 0 24 24"><path d="M21.71,19.29..."></path></svg></div>
                    </div>

                    <div className="modal-buttons">
                        <label htmlFor="file-upload" className="button-style">Adicionar Foto</label>
                        <input type="file" id="file-upload" multiple />

                            <a href="#" className="button-style">Editar Dados</a>
                            <a href="#" className="button-style button-danger">Excluir Álbum</a>
                            <a href="#" className="button-style">Fechar</a>
                    </div>
                </div>
            </div>
        </>
    )
}