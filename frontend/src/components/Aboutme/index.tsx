import './style.css'

export default function Aboutme() {
    return (
        <>
            <div className="container-aboutme">
                <div className="left-aboutme">
                    <h1 id="title-aboutme">Sobre Mim</h1>
                    <h2 id="subtitle-aboutme">
                        Muito prazer, somos a
                        <br />
                        Dream Audiovisual
                    </h2>
                    <h4 id="description-aboutme">
                        Et nihil ipsa id necessitatibus quia et itaque autem et omnis consequatur quo voluptas ullam vel quae galisum!
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