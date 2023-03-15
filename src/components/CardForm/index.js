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
                <FormInput
                    label="Titulo"
                    placeholder="Titulo do card"
                    value={cardTitleEdit}
                    onType={value => setCardTitleEdit(value)}
                />
                <ColorSelector 
                    value={cardChosenColor}
                    colorList={[
                        "#005F73","#0A9396",
                        "#94D2BD","#E9D8A6","#EE9B00",
                        "#CA6702","#BB3E03","#AE2012","#9B2226"
                    ]}
                    onChangeColor={value => setCardChosenColor(value)}
                />
                <FormButton />
            </form>
        </section>
    )
}

export default CardForm