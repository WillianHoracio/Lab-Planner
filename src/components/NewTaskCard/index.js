import {MdOutlinePlaylistAdd} from 'react-icons/md'
import './NewTaskCard.css'



const NewTaskCard = ({cardId,toggleForm}) => {
  
  const onToggleForm = (event) => {
    toggleForm(cardId)
  }

  return (
      <div className="new-task-card" onClick={onToggleForm}>
        <MdOutlinePlaylistAdd size={30}/>  
      </div>
  )
    
}

export default NewTaskCard