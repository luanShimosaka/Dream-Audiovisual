import { FormButtonIconsComponent, MenuOptionsComponent } from '../../components/components.ts'
import './style.css'

export default function Albuns() {
    return (
        <>
            <>
                <div className="container-clientlist">
                    <MenuOptionsComponent />
                    <div className="right-clientlist">
                        <div className="top-right-clientlist">
                            <div id="top-right-icon-clientlist">
                                <i className="material-icons">auto_awesome_mosaic</i>
                            </div>
                            <h2>Álbuns</h2>
                        </div>
                        <div className="buttons-schedule">
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Adicionar Álbum' />
                            </div>
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Filtrar por...' icon='filter_alt' />
                            </div>
                            <div className="button-schedule">
                                <FormButtonIconsComponent text='Ordenar por...'  icon='reorder' />
                            </div>
                        </div>
                        <div className="bottom-right-clientlist">
                            <div className="row-albuns">
                                <div className="album">
                                    <img src="" alt="" />
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Álbum 1</h2>
                                </div>
                                <div className="album">
                                    <img src="" alt="" />
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Álbum 1</h2>
                                </div>
                                <div className="album">
                                    <img src="" alt="" />
                                    <h2 style={{ fontSize: "24px", color: "white" }}>Álbum 1</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}