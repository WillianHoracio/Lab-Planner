import { useEffect, useState } from 'react'

const Timer = ({ paused }) => {
    const [totalTime, setTotalTime] = useState(0)
    const [previousTime, setPreviousTime] = useState(null)

    useEffect(() => {
        if (paused) {
        if (previousTime !== null) {
            setTotalTime(totalTime + (Date.now() - previousTime))
        }
        } else {
        setPreviousTime(Date.now())
        }
    }, [paused])

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const remainingMilliseconds = milliseconds % 1000;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMilliseconds = String(remainingMilliseconds).padStart(3, '0');
        return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    }
      
    
    return (
        <div>
        <label>{formatTime(totalTime)}</label>
        </div>
    )
}

export default Timer
