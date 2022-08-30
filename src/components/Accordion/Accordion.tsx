import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
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

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

export default Accordion;

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

