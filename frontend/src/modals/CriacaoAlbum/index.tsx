import type { ModalType } from '../../types/types';
import './style.css';

export default function CriacaoAlbum({ onClose }: ModalType) {
    return (
        <div className="modal-overlay show">
            <form className="modal-content">
                <h2>Criar Álbum</h2>
                <div className="form-fields">
                    <div className="field-group">
                        <label htmlFor="cliente">Cliente:</label>
                        <input type="text" id="cliente" name="cliente" placeholder="Nome do cliente" className="input-text-modal" />
                    </div>
                    <div className="field-group">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea id="descricao" name="descricao" rows={3} placeholder="Descrição do álbum..."></textarea>
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
                            <option value="">Selecione um agendamento</option>
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
                    <button type="button" className="button-style" onClick={onClose}>Cancelar</button>
                    <button type="submit" className="button-style">Criar Álbum</button>
                </div>
            </form>
        </div>
    );
}