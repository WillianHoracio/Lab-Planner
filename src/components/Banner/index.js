import './Banner.css'

const Banner = ({label}) => {
    return (
    <header>
        <div className="title-banner">
            <label>{label}</label>    
        </div>
        </header>
    )
}

export default Banner