import './TestSocialInteraction.css'
import {ImCancelCircle} from 'react-icons/im'
import rat from '../../images/rat.png'
import { useEffect, useState } from 'react'
import Timer from '../Timer'
import TotalTimer from '../TimerTotal'

const TestSocialInteraction = ({closeTest}) => {
 
    const [ratPosition, setRatPosition] = useState('none')
    const [firstMove, setFirstMove] = useState(true)
    const [leftRat, setLeftRat] = useState(true)
    const [rightRat, setrightRat] = useState(false)

    const ratPositionList = [
        { id: "left", className: "test-social-interaction__board___left" },
        { id: "center", className: "test-social-interaction__board___center" },
        { id: "right", className: "test-social-interaction__board___right" },
      ];

    const close = () => {
        closeTest()
    }



   

    const changeRatPosition = (event) => {
        const newPosition = event.target.id
        let lastPosition = ratPosition
        setFirstMove(false)
        if ((newPosition === 'left' &&  lastPosition === 'right') || (newPosition === 'right' &&  lastPosition === 'left')) {
            return
        } else 
            if ((newPosition === 'left') || (newPosition === 'center') || (newPosition === 'right')) {
                setRatPosition(newPosition);
            }
 
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
        event.target.parentNode.click();
    }


    
    return (
        <div className="test-social-interaction-background">
            <div className="test-social-interaction__close" onClick={close}>
                <ImCancelCircle size={40} />
            </div>
            <div className="test-social-interaction__time">  
                <div className="test-social-interaction-time__leftInteraction">
                    <label>
                        <Timer paused={ratPosition === ''? false : true} firstMove={firstMove}/>
                    </label>
                </div>

                <div className="test-social-interaction-time__totalTime">
                    <label>
                        <TotalTimer firstMove={firstMove} paused={true}/>
                    </label>
                </div>
                
                <div className="test-social-interaction-time__rightInteraction">
                    <label>
                        <Timer paused={ratPosition === ''? false : true} firstMove={firstMove}/>
                    </label>
                </div>

                <div className="test-social-interaction-time__left">
                    <label>
                        <Timer paused={ratPosition === 'left'? false : true} firstMove={firstMove}/>
                    </label>
                </div>
                <div className="test-social-interaction-time__center">
                    <label>

                        <Timer paused={ratPosition === 'center'? false : true} firstMove={firstMove} />

                    </label>
                </div>

                <div className="test-social-interaction-time__right">
                    <label>
                        <Timer paused={ratPosition === 'right'? false : true} firstMove={firstMove}/>
                    </label>
                </div>
 
            </div>
            <div className="test-social-interaction" onClick={changeRatPosition}>
                <div className="test-social-interaction__board">
                    {ratPositionList.map((position) => {
                        const classNamePosition = position.className;
                        return (
                            <div key={"div" + position.id} id={position.id} className={classNamePosition} onClick={changeRatPosition}>
                                {ratPosition === position.id && <img key={position.id} src={rat} onClick={handleImageClick} />}
                                {leftRat  && position.id === 'left' ? <img src={rat} className="test-social-interaction__board___leftRat"/> : ''}
                                {rightRat  && position.id === 'right' ? <img src={rat} className="test-social-interaction__board___rightRat"/> : ''}
                            </div>
                        );
                    })}
                    
                </div>
            </div>
            
        </div>
    )
}

export default TestSocialInteraction
