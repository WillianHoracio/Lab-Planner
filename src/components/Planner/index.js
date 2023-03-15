import { useState } from 'react';
import './Planner.css';
import Card from '../Card';
import CardForm from '../CardForm';
import NewCard from '../NewCard';
import TaskForm from '../TaskForm';

function Planner() {

    //--------------- Estados ---------------//

    
    // Estados com card em sua nomenclatura se referem a manipulação dos cards, que contem as tasks como filhas no DOM

    const [cardIdSelected, setCardIdSelected] = useState('') 
    const [cardList, setCardList] = useState([])
    const [cardIdCounter, setCardIdCounter] = useState(0)
    const [cardEditData, setCardEditData] = useState({})

    // Estados com task em sua nomenclatura se referem a manipulação das tasks
    const [taskList, setTaskList] = useState([])
    const [taskId, setTaskId] = useState(1)
    const [taskEditData, setTaskEditData] = useState({})
    
    // Estados para monitoramento de renderização ou não dos forms
    const [toggleForm, setToggleForm] = useState(false) //Form das tasks
    const [toggleCardForm, setToggleCardForm] = useState(false) 
    
    


    //--------------- Funções do Card ---------------//

    const onNewCard = (newCard) => { 
      setCardList([...cardList, newCard])
      setCardIdCounter(cardIdCounter + 1)
    }
    
    const deleteCard = (cardId) => {
      const updatedCards = cardList.filter(card => card.cardId !== cardId);
      setCardList(updatedCards)
    }

    const onToggleCardForm = (data) => { //Abre formulario de edição dos cards
      setCardEditData(data)
      setToggleCardForm(!toggleCardForm)
    }

    const onEditCard = (card) => { 
      const cardListClone = [...cardList]
      const indexOfEditedCard = cardListClone.findIndex((item) => item.cardId === card.cardId)

      if (indexOfEditedCard !== -1) { //Se existe esta posição no array
        cardListClone[indexOfEditedCard] = card
        setCardList(cardListClone)
      }
      setToggleForm(!toggleCardForm)
    }

    
    //--------------- Funções das Tasks ---------------//

    const onToggleForm = (cardId) => { //Abre/fecha formulario de tasks vazio
      setCardIdSelected(cardId)
      setTaskEditData({})
      setToggleForm(!toggleForm)
    }

    const onToggleEditForm = (data) => {//Abre/fecha formulario pré preenchido p/ edição de tasks
      setTaskEditData(data)
      setToggleForm(!toggleForm)
    }

    const onNewTaskListed = (task) => { 
      setTaskList([...taskList, task])
      setTaskId(taskId+1) 
    }

    const onEditTask = (task) => { //Ao editar um objeto (submit do form preenchido)
      const taskListClone = [...taskList]
      const indexOfEditedTask = taskListClone.findIndex((item) => item.taskId === task.taskId)

      if (indexOfEditedTask !== -1) { 
        taskListClone[indexOfEditedTask] = task
        setTaskList(taskListClone)
      }
      setToggleForm(!toggleForm)
    }

    const onRemoveTask = (taskId) => {
      const updatedTasks = taskList.filter(task => task.taskId !== taskId);
      setTaskList(updatedTasks)
    }

    return (
      <div className="main-container-cards">
        {/*-------------- INICIO FORMULARIOS --------------*/}
        
        {toggleForm && 
          <TaskForm 
            toggleForm={onToggleForm}
            onNewTaskListed={task => onNewTaskListed(task)}
            taskId={taskId}
            cardId={cardIdSelected}
            taskEditData={taskEditData}
            onEditTask={onEditTask}
          />
        }

        {toggleCardForm && 
          <CardForm 
            toggleCardForm={onToggleCardForm}
            cardId={cardIdSelected}
            cardEditData={cardEditData}
            onEditCard={onEditCard}
          />
        }

        {/*-------------- FIM FORMULARIOS --------------*/}


        <div className="task-cards">

          {cardList.map( card => 
            <Card 
              key={card.cardId}
              cardId={card.cardId}
              cardTitle={card.cardTitle}
              toggleForm={onToggleForm}
              toggleEditForm={onToggleEditForm}
              taskList={taskList.filter(task => task.cardId === card.cardId)}
              onRemove={onRemoveTask}
              onCardDelete={deleteCard}
              toggleCardForm={onToggleCardForm}
              cardColor={card.cardColor}
            />
          )}
          <NewCard idCounter={cardIdCounter} onNewCard={onNewCard}/>
        </div>

 
      </div>
    );
}

export default Planner;
