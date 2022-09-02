import React, {useState} from "react";


export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
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

type StarPropsType = {
    selected: boolean
    value: number
    setValue: (value: number) => void
}

function Star(props: StarPropsType) {
    return props.selected ?
        <span style={{color: 'gold', fontWeight: 'bold'}} onClick={() => props.setValue(props.value)}>star </span> :
        <span onClick={() => props.setValue(props.value)}>star</span>


}