import React from 'react';
import './App.css';
import {OnOf} from "./components/OnOFF/OnOF";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    return (
        <div>
            <UncontrolledAccordion title={'--Menu--'}/>
            <UncontrolledRating/>
            <OnOf/>
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