import {AiOutlinePlusSquare} from 'react-icons/ai'
import './NewTaskCard.css'



const NewTaskCard = ({cardId,toggleForm}) => {
  
  const onToggleForm = (event) => {
    toggleForm(cardId)
  }

  return (
      <div className="new-task-card" onClick={onToggleForm}>
        <AiOutlinePlusSquare size={30}/>  
      </div>
  )
    
}

export default NewTaskCard