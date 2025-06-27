import './style.css'

export default function FormButtonIcons({ text = '', color = '#000', icon = 'add_circle' }) {
    return (
        <>
            <div className="container-form-button">
                <div className="icon-button">
                    <i className="material-symbols-outlined" style={{ color: "#000" }}>{icon}</i>
                </div>
                <h2 style={{ color: color }}>{text}</h2>
            </div>
        </>
    )
}