import './style.css'

export default function FormButton({ text = '' }) {
    return (
        <>
            <div className="container-form-button">
                <h2>{text}</h2>
            </div>
        </>
    )
}