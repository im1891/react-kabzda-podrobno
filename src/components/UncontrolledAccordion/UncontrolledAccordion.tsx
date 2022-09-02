import React, {useState} from "react";

type AccordionPropsType = {
    title: string,

}


//Accordion до рефакторинга
/*function Accordion(props: AccordionPropsType) {

    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.title}/>
            {/!*<AccordionBody/>*!/}
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    }

}*/

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.title}/>
        <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

export default UncontrolledAccordion;

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 style={{display: 'inline'}}>{props.title}</h3>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

