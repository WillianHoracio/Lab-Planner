import { useEffect, useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import ColorSelector from '../ColorSelector'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import FormTextArea from '../FormTextArea'
import TimeSelector from '../TimeSelector'
import './TaskForm.css'

const TaskForm = ({taskEditData, toggleForm, onNewTaskListed, taskId, cardId, onEditTask}) => {
    
    //Estados dos atributos das tasks

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [submit, setSubmit] = useState()
    const [time, setTime] = useState('')
    const [color, setColor] = useState('')


    /*useEffect monitora a variavel taskEditData. Caso ela seja um objeto vazio, significa que um novo form foi aberto. Caso ela possua conteudo, significa que 
    o form foi aberto em modo de edição, e a variavel taskEditData possui todos os atributos da task selecionada.*/

    useEffect(() => {  
        if (Object.keys(taskEditData).length > 0) { //Verifica se quando o form foi aberto, ele recebeu informações preenchidas (edição), ou informação vazia (nova task)
            setTitle(taskEditData.title)
            setDescription(taskEditData.description)
            setTime(taskEditData.time)
            setColor(taskEditData.color)
            setSubmit(true)
        } else { //Altera a função do onSubmit do form, para onEdit(true) ou onSubmit(false)
            setSubmit(false)
        }
    }, [taskEditData])
    
    const onSubmit = (event) => {//Cadastra nova task
        event.preventDefault()
        onNewTaskListed({
            title,
            description,
            taskId,
            cardId,
            time,
            color
        })
        toggleForm()
    }

    const onEdit = (event) => {//Edita a task selecionada
        event.preventDefault()
        onEditTask({
            title,
            description,
            taskId: taskEditData.taskId,
            cardId: taskEditData.cardId,
            time,
            color
        })
    }

    const onClose = () => { //Fecha o form
        toggleForm()
    }

    return (
        <section className="form-background" >
            <form style={{backgroundColor: color || "#7da6d4" }} onSubmit={submit ? onEdit : onSubmit}>
                <AiOutlineCloseCircle className="form-close-button" size={40} onClick={onClose}/>
                
                <div className="form-title">
                    <label>{"Novo Item" || taskEditData.title}</label>
                </div>
                <div className="task-form-input">
                    <FormInput 
                        label="Titulo" 
                        placeholder="Digite o titulo"
                        value={title}
                        onType={value => setTitle(value)}
                    />
                </div>
                <div className="task-form-textarea">
                    <FormTextArea 
                        type="text" 
                        label="Descrição" 
                        placeholder="Digite a descrição da atividade"
                        value={description}
                        onType={value => setDescription(value)}
                    />
                </div>
                <ColorSelector 
                    value={color}
                    colorList={["#EB7766", "#F2D672","#FFFFFF", "#72DB72","#72BFF2","#C96DE8"]}
                    onChangeColor={value => setColor(value)}
                />
                <TimeSelector 
                    value={time}
                    onType={value => setTime(value)}
                />
                <div className="task-form__button">
                    <FormButton
                        color="#9ff7ab"
                    />
                </div>
                
            </form>
        </section>
    )
}

export default TaskForm
