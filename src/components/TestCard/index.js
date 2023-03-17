import FormButton from '../FormButton'
import './TestCard.css'
import underConstruction from '../../images/under-construction.jpg'

const TestCard = ({title, openTest}) => {

    const onSubmit = (event) => {
        event.preventDefault()
        openTest()
    }


    return (
        <form className="test-card" onSubmit={onSubmit}>
            <div className="test-card__title">
                <label>{title}</label>
            </div>
            <div>
                <img src={underConstruction}/>
            </div>
            <div className="test-card__button">
                <FormButton active={false} text="Iniciar"/>
            </div>
        </form>
    )
}

export default TestCard