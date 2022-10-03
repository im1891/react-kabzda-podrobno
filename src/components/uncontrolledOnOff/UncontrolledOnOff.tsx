import React, { useState } from "react";
import "../../App.css";

type PropsType = {
  onChange: (value: boolean) => void;
};

const MainUncontrolledOnOff: React.FC<PropsType> = (props) => {
  const [onOff, setOnOff] = useState(false);

  const onStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    border: "1px solid black",
    padding: "2px",
    backgroundColor: onOff ? "green" : "white",
    cursor: "pointer",
  };
  const offStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    border: "1px solid black",
    marginLeft: "2px",
    padding: "2px",
    backgroundColor: onOff ? "white" : "red",
    cursor: "pointer",
  };

  const indicatorStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "1px solid black",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: onOff ? "green" : "red",
  };

  const onClicked = () => {
    setOnOff(true);
    props.onChange(true);
  };
  const offClicked = () => {
    setOnOff(false);
    props.onChange(false);
  };
  return (
    <div className="onOfItems">
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

export const UncontrolledOnOff = React.memo(MainUncontrolledOnOff);
