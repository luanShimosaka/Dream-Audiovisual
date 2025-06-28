import './style.css'

export default function Flow() {
    return (
        <>
            <div className="container-flow">
                <div className="top-flow">
                    <h1 id="title-flow">Fluxo</h1>
                    <h2 id="description-flow">Et nihil ipsa id necessitatibus quia et itaque autem et omnis consequatur quo voluptas ullam vel quae galisum!</h2>
                </div>

                <div className="bottom-flow">
                    <div className="left-frames-flow">

                        <div className="left-frame-flow frame-flow" id="frame1-flow">
                            <div className="arrows-left-flow">
                                <div className="arrow-flow arrow-left-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-left-flow">Primeiro Contato</h1>
                            </div>

                            <img src="/assets/flow-figure-1.svg" alt="" className="images-flow images-left-flow" />
                        </div>

                        <div className="left-frame-flow frame-flow" id="frame3-flow">
                            <div className="arrows-left-flow">
                                <div className="arrow-flow arrow-left-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-left-flow">Diagnóstico</h1>
                            </div>

                            <img src="/assets/flow-figure-2.svg" alt="" className="images-flow images-left-flow" />
                        </div>

                        <div className="left-frame-flow frame-flow" id="frame5-flow">
                            <div className="arrows-left-flow">
                                <div className="arrow-flow arrow-left-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-left-flow">Alinhamento</h1>
                            </div>

                            <img src="/assets/flow-figure-3.svg" alt="" className="images-flow images-left-flow" />
                        </div>

                        <div className="left-frame-flow frame-flow" id="frame7-flow">
                            <div className="arrows-left-flow">
                                <div className="arrow-flow arrow-left-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-left-flow">Seleção</h1>
                            </div>

                            <img src="/assets/flow-figure-4.svg" alt="" className="images-flow images-left-flow" />
                        </div>
                    </div>

                    <div className="right-frames-flow">

                        <div className="right-frame-flow frame-flow" id="frame2-flow">
                            <div className="arrows-right-flow">
                                <div className="arrow-flow arrow-right-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-right-flow"></h1>
                            </div>

                            <img src="/assets/flow-figure-5.svg" alt="" className="images-flow images-right-flow" />
                        </div>

                        <div className="right-frame-flow frame-flow" id="frame4-flow">
                            <div className="arrows-right-flow">
                                <div className="arrow-flow arrow-right-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-right-flow">Orçamento</h1>
                            </div>

                            <img src="/assets/flow-figure-6.svg" alt="" className="images-flow images-right-flow" />
                        </div>

                        <div className="right-frame-flow frame-flow" id="frame6-flow">
                            <div className="arrows-right-flow">
                                <div className="arrow-flow arrow-right-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-right-flow">Captação</h1>
                            </div>

                            <img src="/assets/flow-figure-7.svg" alt="" className="images-flow images-right-flow" />
                        </div>

                        <div className="right-frame-flow frame-flow" id="frame8-flow">
                            <div className="arrows-right-flow">
                                <div className="arrow-flow arrow-right-flow"></div>
                            </div>

                            <div className="main-frame-flow">
                                <h1 className="title-frame-flow title-right-flow">Pós Produção</h1>
                            </div>

                            <img src="/assets/flow-figure-8.svg" alt="" className="images-flow images-right-flow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}