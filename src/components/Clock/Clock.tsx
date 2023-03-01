import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockViewPropsType = {
    date: Date
}
type ClockPropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const {mode} = props
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {

        const intId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intId)
        }
    }, [])


    let view;

    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }
    return (
        <div>
            {view}
        </div>
    );
};


