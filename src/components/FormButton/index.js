import { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './FormButton.css'

const FormButton = ({ color, text, active}) => {
  const [textContent, setTextContent] = useState(false)

  useEffect(() => {
    setTextContent(!!text)
  }, [text])

  return (
    <button disabled={!active} id="form-button" className='form-button' style={{ background: color }}>
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
