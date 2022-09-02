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
        <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

export default UncontrolledAccordion;

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const {title, setCollapsed, collapsed} = props;

    return <h3 style={{display: 'block', cursor: 'pointer'}} onClick={() => setCollapsed(!collapsed)}>{title}</h3>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>


}

