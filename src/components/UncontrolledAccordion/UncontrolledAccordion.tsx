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
        <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

export default UncontrolledAccordion;

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    const {title, onClick} = props;

    return <h3 style={{display: 'block', cursor: 'pointer'}} onClick={onClick}>{title}</h3>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

