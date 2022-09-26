import React, { useState } from "react";
import s from "./Select.module.css";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsTypes = {
  value: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select: React.FC<SelectPropsTypes> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const changeCollapsed = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <div className={s.selectWrapper}>
      <div className={s.select}>
        <div
          className={`${s.selectField}  ${!isCollapsed ? s.openSelect : ""}`}
          onClick={changeCollapsed}
        >
          {props.value}
        </div>
        <div
          className={`${s.toggle} ${!isCollapsed ? s.openSelect : ""}`}
          onClick={changeCollapsed}
        >
          <img
            className={!isCollapsed ? s.toggleActive : ""}
            src="https://www.pngplay.com/wp-content/uploads/12/Red-Arrow-PNG-Photo-Clip-Art-Image.png"
            alt=""
          />
        </div>
      </div>
      {!isCollapsed && (
        <div className={s.selectBody}>
          {props.items.map((el, index) => {
            const changeValue = (title: any) => {
              props.onChange(title);
              changeCollapsed();
            };

            const changeValueMouseOver = (title: any) => {
              props.onChange(title);
            };

            return (
              <div
                className={s.selectItem}
                key={index}
                onClick={() => changeValue(el.title)}
                onMouseOver={() => changeValueMouseOver(el.title)}
              >
                {el.title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
