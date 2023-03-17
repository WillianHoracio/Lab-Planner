import './Banner.css'
import rat from '../../images/rat.png'

const Banner = ({label}) => {
    return (
        <section className="banner">
            <div className="banner__logo">
                <img src={rat}/>
                <label>Lab Planner</label>
            </div>
            <div className="banner__title">
                <label>{label}</label>    
            </div>
        </section>
    )
}

export default Banner