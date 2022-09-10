import React from "react";

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setCollapsed: (value: boolean) => void
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
        <AccordionTitle title={props.title} setCollapsed={() => props.setCollapsed(!props.collapsed)}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

export default Accordion;

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

