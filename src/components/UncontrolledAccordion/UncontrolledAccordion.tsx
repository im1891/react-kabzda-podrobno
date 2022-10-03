import React, { useReducer } from "react";
import { reducer } from "./uncontrolledAccordionReducer";

type AccordionPropsType = {
  title: string;
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

function MainUncontrolledAccordion(props: AccordionPropsType) {
  /*  const [collapsed, setCollapsed] = useState(true);*/
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      <AccordionTitle
        title={props.title}
        // onClick={() => setCollapsed(!collapsed)}
        onClick={() => dispatch({ type: "TOGGLE-COLLAPSED" })}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void;
};

function MainAccordionTitle(props: AccordionTitlePropsType) {
  const { title, onClick } = props;

  return (
    <h3 style={{ display: "block", cursor: "pointer" }} onClick={onClick}>
      {title}
    </h3>
  );
}

function MainAccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export const UncontrolledAccordion = React.memo(MainUncontrolledAccordion);
const AccordionBody = React.memo(MainAccordionBody);
const AccordionTitle = React.memo(MainAccordionTitle);
