import { useEffect, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import './FormButton.css'

const FormButton = ({color, text}) => {

    const [textContent, setTextContent] = useState(false);

    useEffect(() => {
        if (text) {
            setTextContent(true)
        } else {
            setTextContent(false)
        }
    },[text])

    return (
        <button id="form-button" className='form-button' style={{background: color}}>
            {!textContent ? (<AiOutlinePlus size={30}/>) : (<label htmlFor="form-button">{text}</label>)}
        </button>

    )
}

export default FormButton