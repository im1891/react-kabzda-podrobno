import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOf} from "./components/uncontrolledOnOf/UncontrolledOnOf";
import {RatingValueType, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App() {
    const [rating, setRating] = useState<RatingValueType>(2)
    const [collapsed, setCollapsed] = useState(true)
    const [onOff, setOnOff] = useState(false);

    return (
        <div>
            <UncontrolledAccordion title={'--Menu--'}/>
            <UncontrolledRating/>
            <Rating value={rating} onClick={setRating}/>
            <Accordion title={'---Menu2---'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <UncontrolledOnOf onChange={setOnOff}/> {onOff.toString()}
            {/*<OnOf onOff={onOff} setOnOff={setOnOff}/>*/}
        </div>
    )

}

export default App;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}