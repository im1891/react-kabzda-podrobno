import React, {useEffect, useState} from 'react';


const get2DigitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intId)
        }
    }, [])

    return (
        <div>
            <span>{get2DigitsString(date.getHours())}</span>
            :
            <span>{get2DigitsString(date.getMinutes())}</span>
            :
            <span>{get2DigitsString(date.getSeconds())}</span>
        </div>
    );
};

