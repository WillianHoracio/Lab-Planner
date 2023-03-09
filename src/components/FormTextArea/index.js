import './FormTextArea.css'

const FormTextArea = ({label, placeholder,onType,value}) => {
    
    return (
        <div className="form-text-area">
            <label>{label}</label>
            <textarea 
                placeholder={placeholder} 
                onChange={(event) => {onType(event.target.value)}} 
                value={value}
                rows="5" 
                cols="60"/>
        </div>   
        
    )
}

export default FormTextArea