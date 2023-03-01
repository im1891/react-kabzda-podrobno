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

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState<Date>()
    const [fake, setFake] = useState(0)
    console.log('SetTimeoutExample')

    useEffect(() => {
        const id = setInterval(() => {
            setCounter(new Date())

        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    return <>
        Hello, counter: {counter?.toLocaleTimeString()} - fake: {fake}
        {/* <button onClick={() => setFake(prevState => prevState + 1)}>fake+</button>
        <button onClick={() => setCounter(prevState => prevState + 1)}>counter+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered with: ' + counter)

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('Reset effect ' + counter)
        }
    }, [counter])
    return <div>
        Hello, counter: {counter}
        <button onClick={() => setCounter((prevState) => prevState + 1)}>+</button>
    </div>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with: ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])
    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with: ' + text)

    useEffect(() => {
        const id = setTimeout(() => {
            console.log('Timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(id)
        }
    }, [text])
    return <>
        Typed text: {text}
    </>
}