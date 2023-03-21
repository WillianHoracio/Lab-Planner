import { useEffect, useState, useRef } from 'react'

const TimerTotal = ({paused, firstMove}) => {

    const [isPaused, setIsPaused] = useState(paused)
    const [startTime, setStartTime] = useState(0)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        handlePauseClick()
    },[firstMove])

    const handlePauseClick = () => {
        
        if (!firstMove) {
            setIsPaused(false)  
        }
        isPaused && setStartTime(Date.now() - elapsedTime)
        
        
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
        if (!isPaused) {
            const now = Date.now()
            setElapsedTime(now - startTime)
        }
        }, 10)

        return () => clearInterval(intervalRef.current)
    }, [isPaused, startTime])

    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000).toString().padStart(2, '0')
        const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0')
        const milliseconds = (time % 1000).toString().padStart(3, '0')
        return `${minutes}:${seconds}:${milliseconds}`
    }

    return (
        <div>
        <label>{formatTime(elapsedTime)}</label>
        </div>
    )
}

export default TimerTotal