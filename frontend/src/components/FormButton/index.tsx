import './style.css'

export default function FormButton({ text = '', color = '#000' }) {
    return (
        <>
            <div className="container-form-button">
                <h2 style={{ color: color }}>{text}</h2>
            </div>
        </>
    )
}