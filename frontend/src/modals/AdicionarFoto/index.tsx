import './style.css'

export default function AdicionarFoto() {
    return (
        <>
            <a href="#upload-modal-container" className="button-style-open">Adcionar Foto</a>
            <div id="upload-modal-container">
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
                        <a href="#" className="button-style">Cancelar</a>
                        <a href="#" className="button-style">Adicionar Foto</a>
                    </div>
                </form>
            </div>
        </>
    );
}