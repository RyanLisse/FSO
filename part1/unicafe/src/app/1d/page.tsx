"use client";

import { useState } from "react";

const Button = ({ handleClick, text }: any) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props: Props) => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    console.log("left before", left);
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    console.log("left after", left);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>the app is used by pressing the buttons</div>;
    }
    return <div>button press history: {props.allClicks.join(" ")}</div>;
  };

  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      <p>Total {total}</p>
    </>
  );
};

export default App;
