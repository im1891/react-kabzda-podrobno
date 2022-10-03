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

const MainSelect: React.FC<SelectPropsTypes> = (props) => {
  const { value, onChange, items } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [hoveredItemValue, setHoveredItemValue] = useState(value);

  const changeCollapsed = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const changeValue = (value: number) => {
    onChange(value);
    changeCollapsed();
  };

  const onHoveredItem = (value: number) => {
    setHoveredItemValue(value);
  };

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      changeCollapsed();
    }

    if (e.key === "Escape") {
      setIsCollapsed(true);
    }

    if (e.key === "ArrowDown") {
      if (value + 1 <= items.length) {
        onChange(value + 1);
        setHoveredItemValue(value + 1);
      }
    }

    if (e.key === "ArrowUp") {
      if (value - 1 > 0) {
        onChange(value - 1);
        setHoveredItemValue(value - 1);
      }
    }
  };

  let title = items.find((el) => el.value === value)?.title;
  return (
    <div
      className={s.selectWrapper}
      onKeyUp={onKeyUpHandler}
      onBlur={() => setIsCollapsed(true)}
      tabIndex={0}
    >
      <div className={s.select}>
        <div
          className={`${s.selectField}  ${!isCollapsed ? s.openSelect : ""}`}
          onClick={changeCollapsed}
        >
          {title}
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
          {items.map((el, index) => {
            return (
              <div
                className={`${s.selectItem} ${
                  hoveredItemValue === el.value ? s.hovered : ""
                }`}
                key={index}
                onClick={() => changeValue(el.value)}
                onMouseOver={() => onHoveredItem(el.value)}
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

export const Select = React.memo(MainSelect);
