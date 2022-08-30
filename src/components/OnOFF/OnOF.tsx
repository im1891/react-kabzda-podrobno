import React from 'react';
import '../../App.css';

type PropsType = {
    on: boolean
}

const OnOf = (props: PropsType) => {


    return (
        <div className='onOfItems'>

            <div className={`square ${props.on && 'on'}`}></div>
            <div className={`circle ${props.on && 'on'}`}>{props.on ? 'ON' : 'OFF'}</div>
        </div>
    )
}

export default OnOf;