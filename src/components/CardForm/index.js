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
                    colorList={["#FFBDE5", "#ffc3ac", "#FFFFFF","#b5dc67" ,"#3ceae4" ,"#a586ad"]}
                    onChangeColor={value => setCardChosenColor(value)}
                />
                <FormButton />
            </form>
        </section>
    )
}

export default CardForm