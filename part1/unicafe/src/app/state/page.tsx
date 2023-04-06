"use client";

import { useState } from "react";

const Button = ({ handleClick, text }: any) => (
  <button onClick={handleClick}>{text}</button>
);
const Display = (props) => <div>{props.value}</div>;
export default function StateCo() {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <>
      <div>
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
    </>
  );
}
