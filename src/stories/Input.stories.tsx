import React, { ChangeEvent, useRef, useState } from "react";

export default {
  title: "Test/Input",
};

export const UncontrolledInput = () => <input type="text" />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <input type="text" onChange={getValue} /> - {value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = ref.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={save}>save</button>- actual value: {value}
    </>
  );
};

export const ControlledInputWithFixedValue = () => (
  <input type="text" value={"it-inkubator"} />
);

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <input type={"text"} value={parentValue} onChange={onChange} />;
};

export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return <input type={"checkbox"} checked={parentValue} onChange={onChange} />;
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2");
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <select name="cities" value={parentValue} onChange={onChange}>
      <option>none</option>
      <option value={1}>Minsk</option>
      <option value={2}>Kiev</option>
      <option value={3}>New-York</option>
    </select>
  );
};
