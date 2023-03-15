import './TaskCard.css'
import {HiTrash} from 'react-icons/hi'
import {TbArrowNarrowRight} from 'react-icons/tb'

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
        <div style={{backgroundColor:color || "#FFFFFF"}}className="task-card" onClick={editTask}>
            <label>{time} <TbArrowNarrowRight/>{title}</label>
           
            <HiTrash 
                className='task-card__remove' 
                size={28}
                onClick={onClickRemove}
            />
        </div>
    )
}

export default TaskCard