import './style.css'

export default function Maintitle({ textFontSize = "32px" }) {
    return (
        <>
            <div className="container-main-title" style={{ fontSize: textFontSize }}>
                <img src="../../../assets/main-logo.svg" alt="" id="img-main-title" />
                <h1 id="text-main-title">ream Audiovisual</h1>
            </div>
        </>
    )
}