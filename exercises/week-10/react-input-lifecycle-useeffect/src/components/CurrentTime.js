import React, { useState, useEffect } from 'react';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{hours < 10 ? '0' : ''}{hours}:{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
        </div>
    )
}

export default CurrentTime;
