import './TimeSelector.css'

const TimeSelector = ({value, onType}) => {
    
    const onChange = (event) => {
        onType(event.target.value)
    }
    
    return(
        <div className="time-selector">
            <label>Horario</label>
            <input type="time" value={value} onChange={onChange}/>
        </div>
    )
}

export default TimeSelector