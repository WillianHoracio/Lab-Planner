import './FormInput.css'

const FormInput = ({label, placeholder, onType, value}) => {
    return(
        <div className="form-input">
            <label>{label}</label>
            <input 
                placeholder={placeholder}
                onChange={(event) => {onType(event.target.value)}}
                value={value}
            />
        </div>
    )
}

export default FormInput