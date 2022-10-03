import React, { useEffect, useState } from "react";
import s from "./Select02.module.css";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsTypes = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select02: React.FC<SelectPropsTypes> = (props) => {
  const { value, onChange, items } = props;

  useEffect(() => {
    setItemHoveredValue(value);
  }, [value]);

  const [active, setActive] = useState(false);
  const [itemHoveredValue, setItemHoveredValue] = useState(value);

  const hoveredItem = items.find((el) => el.value === itemHoveredValue);
  const selectedItem = items.find((el) => el.value === value);

  const toggleSelect = () => {
    setActive((prevState) => !prevState);
  };

  const selectItem = (value: number) => {
    onChange(value);
    toggleSelect();
  };
  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    for (let i = 0; i < items.length; i++) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (items[i].value === itemHoveredValue) {
          let pretender = e.key === "ArrowDown" ? items[i + 1] : items[i - 1];
          if (pretender) {
            onChange(pretender.value);
            return;
          }
        }
      }
    }
    if (!selectedItem) {
      onChange(items[0].value);
    }
    if (e.key === "Enter" || e.key === "Escape") {
      e.key === "Enter"
        ? setActive((prevState) => !prevState)
        : setActive(false);
    }
  };

  return (
    <div className={s.select} tabIndex={0} onKeyUp={onKeyUpHandler}>
      <span className={s.main} onClick={toggleSelect}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={s.items}>
          {items.map((el) => (
            <div
              tabIndex={el.value}
              key={el.value}
              onMouseEnter={() => setItemHoveredValue(el.value)}
              className={`${s.item} ${
                hoveredItem?.value === el.value ? s.selected : ""
              }`}
              onClick={() => selectItem(el.value)}
            >
              {el.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
