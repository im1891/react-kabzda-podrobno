import React, {useState} from "react";


export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
            <div>
                <button onClick={() => setValue(0)}>0</button>
                <button onClick={() => setValue(1)}>1</button>
                <button onClick={() => setValue(2)}>2</button>
                <button onClick={() => setValue(3)}>3</button>
                <button onClick={() => setValue(4)}>4</button>
                <button onClick={() => setValue(5)}>5</button>

            </div>
        </div>

    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return props.selected ? <span style={{color: 'gold'}}>star </span> : <span>star </span>


}