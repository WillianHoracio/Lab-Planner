import { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './FormButton.css'

const FormButton = ({ color, text}) => {
  const [textContent, setTextContent] = useState(false)

  useEffect(() => {
    setTextContent(!!text)
  }, [text])

  return (
    <button  id="form-button" className='form-button' style={{ background: color }}>
      {!textContent ? (
        <AiOutlinePlus size={30} />
      ) : (
        <label onClick={() => document.getElementById('form-button').click()}>
          {text}
        </label>
      )}
    </button>
  )
}

export default FormButton
