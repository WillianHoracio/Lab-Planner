import {AiOutlinePlus} from 'react-icons/ai'
import './FormButton.css'

const FormButton = ({color}) => {

    return (
        <button className='form-button' style={{background: color}}>
            <AiOutlinePlus size={30}/>
        </button>
    )
}

export default FormButton