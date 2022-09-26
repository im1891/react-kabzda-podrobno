import React from "react";

type ItemType = {
  title: string;
  value: any;
};

export type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

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
  return (
    <div>
      <AccordionTitle
        title={props.title}
        setCollapsed={() => props.setCollapsed(!props.collapsed)}
      />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

export default Accordion;

type AccordionTitlePropsType = {
  title: string;
  setCollapsed: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.setCollapsed}>{props.title}</h3>;
}

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};
function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((el, index) => (
        <li key={index} onClick={() => props.onClick(el.value)}>
          {el.title}
        </li>
      ))}
    </ul>
  );
}
