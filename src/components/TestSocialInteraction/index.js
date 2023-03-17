import './TestSocialInteraction.css'
import {ImCancelCircle} from 'react-icons/im'
import rat from '../../images/rat.png'
import { useEffect, useState } from 'react'

const TestSocialInteraction = ({closeTest}) => {
    
    //-----------------------Controles de tempo---------------------------//
    const [startTime, setStartTime] = useState(Date.now())
    const [currentTime, setCurrentTime] = useState(startTime)

    const [currentLeftTimer, setCurrentLeftTimer] = useState(0)
    const [lastLeftTimer, setLastLeftTimer] = useState(Date.now())
    const [leftTimer, setLeftTimer] = useState (0)
    const [leftTimerPause, setLeftTimerPause] = useState(true)

    const [currentCenterTimer, setCurrentCenterTimer] = useState(0)
    const [lastCenterTimer, setLastCenterTimer] = useState(Date.now())
    const [centerTimer, setCenterTimer] = useState (0)
    const [centerTimerPause, setCenterTimerPause] = useState(false)

    const [currentRightTimer, setCurrentRightTimer] = useState(0)
    const [lastRightTimer, setLastRightTimer] = useState(Date.now())
    const [rightTimer, setRightTimer] = useState (0)
    const [rightTimerPause, setRightTimerPause] = useState(true)

    useEffect(() => {
        const intervalTime = setInterval(() => {
            setCurrentTime(Date.now());
            if (!leftTimerPause) {
                setLeftTimer(Date.now());
            }
            if (!centerTimerPause) {
                setCenterTimer(Date.now());
            }
            if (!rightTimerPause) {
                setRightTimer(Date.now());
            }

        }, 5);
        return () => clearInterval(intervalTime);
    }, [startTime, leftTimerPause, centerTimerPause, rightTimerPause]);


    const time = currentTime - startTime;

    const formatTime = (time) => {
        const min = Math.floor(time / 60000);
        const seg = Math.floor((time % 60000) / 1000);
        const ms = time % 1000;

        return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
    }

    //------------------------------------------------------------//

    const [ratPosition, setRatPosition] = useState('center')

    const ratPositionList = [
        { id: "left", className: "test-social-interaction__board___left" },
        { id: "center", className: "test-social-interaction__board___center" },
        { id: "right", className: "test-social-interaction__board___right" },
      ];

    const close = () => {
        closeTest()
    }

    const unpauseTimer = (position) => {

        if (position === 'left') {
           
            setLeftTimer(Date.now() + currentLeftTimer)
            setLeftTimerPause(false)
            
            
        } else 
        if (position === 'center'){
            
           
            setCenterTimer(Date.now() + currentCenterTimer)
            setCenterTimerPause(false)
        } else {
            
           
            setRightTimer(Date.now() + currentRightTimer)
            setRightTimerPause(false)
        }

    }

    const pauseTimer = (lastPosition) => {

        if (lastPosition === 'left') {
            let leftTimeSum = currentLeftTimer + (Date.now() - lastLeftTimer)
            setCurrentLeftTimer(leftTimeSum)
            setLastLeftTimer(Date.now())
            setLeftTimerPause(true)
        } else 
        if (lastPosition === 'center'){
            let centerTimeSum = currentCenterTimer + (Date.now() - lastCenterTimer)
            setCurrentCenterTimer(centerTimeSum)
            setLastCenterTimer(Date.now())
            setCenterTimerPause(true)
        } else {
            let rightTimeSum = currentRightTimer + (Date.now() - lastRightTimer)
            setCurrentRightTimer(rightTimeSum)
            setLastRightTimer(Date.now())
            setRightTimerPause(true)
        }

    }

    const changeRatPosition = (event) => {
        const newPosition = event.target.id
        let lastPosition = ratPosition
        if ((newPosition === 'left' &&  lastPosition === 'right') || (newPosition === 'right' &&  lastPosition === 'left')) {
            return
        } else {
            setRatPosition(newPosition);
            pauseTimer(lastPosition)
            unpauseTimer(event.target.className.split('___')[1])
        }
 
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
        event.target.parentNode.click();
    }


    console.log('left:',leftTimerPause,'--center:',centerTimerPause,'--right:',rightTimerPause)
    return (
        <div className="test-social-interaction-background">
            <div className="test-social-interaction__close" onClick={close}>
                <ImCancelCircle size={40} />
            </div>
            <div className="test-social-interaction__time">  

                <div className="test-social-interaction-time__left">
                    <label>
                        {formatTime(leftTimer - lastLeftTimer)}
                    </label>
                </div>
                <div className="test-social-interaction-time__center">
                    <label>{formatTime(centerTimer - lastCenterTimer)}</label>
                </div>

                <div className="test-social-interaction-time__right">
                    <label>{formatTime(rightTimer - lastRightTimer)}</label>
                </div>
 
            </div>
            <div className="test-social-interaction" onClick={changeRatPosition}>
                <div className="test-social-interaction__board">
                    {ratPositionList.map((position) => {
                        const classNamePosition = position.className;
                        return (
                            <div key={"div" + position.id} id={position.id} className={classNamePosition} onClick={changeRatPosition}>
                                {ratPosition === position.id && <img key={position.id} src={rat} onClick={handleImageClick} />}
                            </div>
                        );
                    })}
                    
                </div>
            </div>
            
        </div>
    )
}

export default TestSocialInteraction
