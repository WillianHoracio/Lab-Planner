import { useState } from 'react'
import {HiTrash} from 'react-icons/hi'
import {GrEdit} from 'react-icons/gr'
import NewTaskCard from '../NewTaskCard'
import TaskCard from '../TaskCard'
import './Card.css'

const Card = ({cardTitle, toggleForm, toggleEditForm, taskList, onRemove, cardId, onCardDelete,toggleCardForm,cardColor}) => {

    const [isMinimized, setIsMinimized] = useState(false)
    
    const minimize = () => {
        setIsMinimized(!isMinimized)
    }

    const deleteCard = () => {
        onCardDelete(cardId)
    }

    const editCard = (event) => {
        toggleCardForm({cardTitle,cardId,cardColor})
        event.stopPropagation()
    }

    const cardClasses = isMinimized ?  'card__content card__minimized' : 'card__content'
    return (
        <div className="card" style={{backgroundColor:cardColor}}>
            <div className="card__title" onClick={minimize}>
                <label>{cardTitle}</label>
                <GrEdit
                    className='card__edit'
                    size={30}
                    onClick={editCard}
                />
                <HiTrash
                    className='card__remove'
                    size={30}
                    onClick={deleteCard}
                /> 
            </div>
            <div className={cardClasses}>
                {taskList.map(task => <TaskCard
                        key={task.taskId}
                        title={task.title}
                        description={task.description}
                        cardId={task.cardId}
                        taskId={task.taskId}
                        toggleEditForm={toggleEditForm}
                        onRemove={onRemove}
                        time={task.time}
                        color={task.color}
                    />
                )}
                <NewTaskCard cardId={cardId} toggleForm={toggleForm}/>
            </div>
        </div>
    )
}

export default Card