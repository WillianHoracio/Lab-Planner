import { useState } from 'react'
import ColorSelector from '../ColorSelector'
import FormButton from '../FormButton'
import FormInput from '../FormInput'
import './CardForm.css'

const CardForm = ({toggleCardForm,cardEditData,onEditCard}) => {

    const [cardTitleEdit, setCardTitleEdit] = useState(cardEditData.cardTitle)
    const [cardChosenColor, setCardChosenColor] = useState(cardEditData.cardColor)

    const onSubmitEditCard = (event) => {
        event.preventDefault()
        onEditCard({
            cardId:cardEditData.cardId,
            cardTitle:cardTitleEdit,
            cardColor:cardChosenColor
        })
        toggleCardForm()
    }
    return (
        <section className="card-form-background">
            <form onSubmit={onSubmitEditCard} style={{backgroundColor: cardChosenColor}}>
                <div className="card-form-background__title">
                    <label>{cardEditData.cardTitle}</label>
                </div>
                <FormInput
                    label="Titulo"
                    placeholder="Titulo do card"
                    value={cardTitleEdit}
                    onType={value => setCardTitleEdit(value)}
                />
                <ColorSelector 
                    value={cardChosenColor}
                    colorList={[
                        "#ef476f","#ffd166",
                        "#06d6a0","#118ab2","#457b9d","#9B2226"
                    ]}
                    width="100"
                    onChangeColor={value => setCardChosenColor(value)}
                />
                <div className='task-card-form__button'>
                    <FormButton text="Salvar alterações" />
                </div>
            </form>
        </section>
    )
}

export default CardForm