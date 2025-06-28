import './style.css'

export default function CriacaoAlbum() {
    return (
        <>
            <a href="#creation-modal" className="button-style-open">Modal Criação Álbum</a>
            <div id="creation-modal" className="modal-overlay">
                <form className="modal-content" action="#">
                    <h2>Título do Álbum</h2>
                    <div className="form-fields">
                        <div className="field-group">
                            <label htmlFor="cliente">Cliente:</label>
                            <input type="text" id="cliente" name="cliente" />
                        </div>
                        <div className="field-group">
                            <label htmlFor="descricao">Descrição:</label>
                            <textarea id="descricao" name="descricao" rows={3}></textarea>
                        </div>
                        <div className="field-group">
                            <label htmlFor="categoria">Categoria:</label>
                            <select id="categoria" name="categoria">
                                <option value="">Selecione uma categoria</option>
                                <option value="casamento">Casamento</option>
                                <option value="aniversario">Aniversário</option>
                                <option value="corporativo">Corporativo</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        <div className="field-group">
                            <label htmlFor="agendamento">Agendamento:</label>
                            <select id="agendamento" name="agendamento">
                                <option value="">Selecione uma Agendamento</option>
                                <option value="data1">Agendamento 1</option>
                                <option value="data2">Agendamento 2</option>
                            </select>
                        </div>
                        <div className="field-group field-group-center">
                            <label htmlFor="file-upload" className="drop-zone">
                                <div className="drop-zone-icon-container">
                                    <span className="plus-icon">+</span>
                                </div>
                                <span className="drop-zone-text">Arraste ou selecione as fotos</span>
                            </label>
                            <input type="file" id="file-upload" name="fotos[]" multiple />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <a href="#" className="button-style">Cancelar</a>
                        <a href="#" className="button-style">Criar Álbum</a>
                    </div>
                </form>
            </div>
        </>
    );
}