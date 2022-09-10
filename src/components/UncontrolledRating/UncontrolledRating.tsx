import React, {useState} from "react";


export function UncontrolledRating() {

    const [value, setValue] = useState<RatingValueType>(0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
            {/*    <div>
                <button onClick={() => setValue(0)}>0</button>
                <button onClick={() => setValue(1)}>1</button>
                <button onClick={() => setValue(2)}>2</button>
                <button onClick={() => setValue(3)}>3</button>
                <button onClick={() => setValue(4)}>4</button>
                <button onClick={() => setValue(5)}>5</button>

            </div>*/}
        </div>

    )
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span style={props.selected ? {color: 'gold', fontWeight: 'bold', cursor: "pointer"} : {cursor: "pointer"}}
                 onClick={props.setValue}> star</span>


}