import React, { useState } from "react";
import "./App.css";
import { RatingValueType } from "./components/UncontrolledRating/UncontrolledRating";
import { Select } from "./components/Select/Select";
import { Select02 } from "./components/Select/Select02";

function App() {
  const [rating, setRating] = useState<RatingValueType>(2);
  const [collapsed, setCollapsed] = useState(true);
  const [onOff, setOnOff] = useState(false);
  const [selectValue, setSelectValue] = useState<any>(1);

  return (
    <div>
      {/*<UncontrolledAccordion title={'--Menu--'}/>*/}
      {/*<UncontrolledRating/>*/}
      {/*<Rating value={rating} onClick={setRating} />*/}
      {/*<Accordion title={'---Menu2---'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
      {/*<UncontrolledOnOff onChange={setOnOff}/> {onOff.toString()}*/}
      {/*<OnOff onOff={onOff} setOnOff={setOnOff}/>*/}
      <Select
        value={selectValue}
        onChange={setSelectValue}
        items={[
          { title: "Dimych", value: 1 },
          { title: "Valera", value: 2 },
          { title: "Artem", value: 3 },
          {
            title: "Viktor",
            value: 4,
          },
        ]}
      />

      <Select02
        value={selectValue}
        onChange={setSelectValue}
        items={[
          { title: "Dimych", value: 1 },
          { title: "Valera", value: 2 },
          { title: "Artem", value: 3 },
          {
            title: "Viktor",
            value: 4,
          },
        ]}
      />
    </div>
  );
}

export default App;
