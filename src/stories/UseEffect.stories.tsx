import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    console.log('Simple example')

    useEffect(() => {

        console.log('useEffect every render')
        document.title = counter.toString();
    })

    useEffect(() => {

        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, [])

    useEffect(() => {

        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(prevState => prevState + 1)}>fake+</button>
        <button onClick={() => setCounter(prevState => prevState + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState<Date>()
    const [fake, setFake] = useState(0)
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter(new Date())

        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter?.toLocaleTimeString()} - fake: {fake}
        {/* <button onClick={() => setFake(prevState => prevState + 1)}>fake+</button>
        <button onClick={() => setCounter(prevState => prevState + 1)}>counter+</button>*/}
    </>
}