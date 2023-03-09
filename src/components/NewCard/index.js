import { useState } from 'react'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import './NewCard.css'

const NewCard = ({idCounter, onNewCard}) => {

    const [newCardTitle, setNewCardTitle] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        onNewCard({
            cardId: idCounter,
            cardTitle: newCardTitle,
            cardColor: "#FFFFFF"
        })
    }

    return (
        <div className="new-card">   
                <form className="new-card__form" onSubmit={onSubmit}>
                 
                        <div className="new-card__input">
                            <FormInput  
                                placeholder="Titulo - Novo Card"
                                value={newCardTitle}
                                onType={value => setNewCardTitle(value)}
                            />
                        </div>

                        <div className="new-card__submit">
                            <FormButton/>
                        </div> 
                </form>
        </div>
    )
}

export default NewCard