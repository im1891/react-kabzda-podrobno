import React from 'react';
import '../../App.css';

type PropsType = {
    onOff: boolean
    setOnOff: (value: boolean) => void
}
export const OnOf: React.FC<PropsType> = (props) => {

    const {onOff, setOnOff} = props

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: onOff ? 'green' : 'white',
        cursor: 'pointer',

    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: onOff ? 'white' : 'red',
        cursor: 'pointer',

    }

    const indicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: onOff ? 'green' : 'red',

    }


    return (
        <div className='onOfItems'>


            <div style={onStyle} onClick={() => setOnOff(true)}>On</div>
            <div style={offStyle} onClick={() => setOnOff(false)}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}

