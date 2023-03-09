import './TaskCard.css'
import {HiTrash} from 'react-icons/hi'
import {BsArrowBarRight} from 'react-icons/bs'

const TaskCard = ({toggleEditForm, title, description, cardId, taskId, onRemove, time, color}) => {
    

    const editTask = (event) => {
        toggleEditForm({
            title,
            description,
            cardId,
            taskId,
            time,
            color
        })   
    }
    
    const onClickRemove = (event) => {
        event.stopPropagation()
        onRemove(taskId)
    }


    return (
        <div style={{backgroundColor:color || "white"}}className="task-card" onClick={editTask}>
            <label>{time} <BsArrowBarRight/>{title}</label>
           
            <HiTrash 
                className='task-card__remove' 
                size={28}
                onClick={onClickRemove}
            />
        </div>
    )
}

export default TaskCard