import './ColorSelector.css'
import { GithubPicker } from 'react-color'
import { useState } from 'react'

const ColorSelector = ({onChangeColor, colorList}) => {

    const [chosenColorList, setChosenColorList] = useState(colorList)

    const onColorPick = (color) => {
        onChangeColor(color.hex)
    }

    return (
        <div className="color-selector">
            <label>Cor</label>
            <GithubPicker 
                width={150}
                colors={chosenColorList}
                triangle="hide"
                onChangeComplete={onColorPick}
            />
        </div>
    )
}

export default ColorSelector