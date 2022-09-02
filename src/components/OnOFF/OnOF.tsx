import React, {useState} from 'react';
import '../../App.css';


export const OnOf: React.FC = () => {

    const [onOff, setOnOff] = useState(false);


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

    const onClickButtonhandler = (onOff: boolean) => {
        setOnOff(!onOff)
    }
    return (
        <div className='onOfItems'>


            <div style={onStyle} onClick={() => onClickButtonhandler(onOff)}>On</div>
            <div style={offStyle} onClick={() => onClickButtonhandler(onOff)}>Off</div>
            <div style={indicatorStyle}></div>
            {/*
            <div className={`square ${on && 'on'}`}></div>
            <div className={`circle ${on && 'on'}`}>{on ? 'ON' : 'OFF'}</div>*/}
        </div>
    )
}

