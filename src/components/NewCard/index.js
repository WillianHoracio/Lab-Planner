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
            cardColor: "#457b9d"
        })
        setNewCardTitle('')
    }

    return (
        <div className="new-card">   
                <form className="new-card__form" onSubmit={onSubmit}>
                        <label className="new-card__input___title">Criar novo cartão</label>
                        <div className="new-card__input">
                            
                            
                            <FormInput  
                                placeholder="Titulo do cartão..."
                                value={newCardTitle}
                                onType={value => setNewCardTitle(value)}
                            />
                        </div>

                        <div className="new-card__submit">
                            <FormButton text="OK"/>
                        </div> 
                </form>
        </div>
    )
}

export default NewCard