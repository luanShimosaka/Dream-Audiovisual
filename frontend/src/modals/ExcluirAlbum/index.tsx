import './style.css'

export default function ExcluirAlbum() {
    return (
        <>
            <a href="#modal-container" className="button-style">Excluir Álbum</a>
            <div id="modal-container">
                <div className="modal">
                    <h2>Excluir Álbum</h2>
                    <p>Você tem certeza que deseja excluir esse álbum? Todas as fotos serão apagadas permanententemente!</p>
                    <div className="modal-buttons">
                        <a href="#" className="button-style">Cancelar</a>
                        <a href="#" className="button-style button-red">Excluir</a>
                    </div>
                </div>
            </div>
        </>
    );
}