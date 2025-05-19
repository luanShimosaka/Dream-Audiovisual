import './style.css'

export default function Aboutme() {
    return (
        <>
            <div className="container-aboutme">
                <div className="left-aboutme">
                    <h1 id="title-aboutme">Sobre Mim</h1>
                    <h2 id="subtitle-aboutme">
                        Muito prazer, me chamo
                        <br />
                        Luan Shimosaka
                    </h2>
                    <h4 id="description-aboutme">
                        Fotógrafo e estudante de Ciência da Computação na UFLA, busco registrar a felicidade e beleza que reside em cada momento. Movido por
                    </h4>
                </div>

                <div className="right-aboutme">
                    <div id="image1-aboutme"></div>
                    <div id="image2-aboutme"></div>
                    <div id="image3-aboutme"></div>
                </div>
            </div>
        </>
    )
}