"use client";

import React, { useState } from "react";

type StatisticLineProps = {
  text: string;
  value: number | string; // allow both numbers and strings
};

const StatisticLine = ({ text, value }: StatisticLineProps) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
);

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
};

const Statistics = ({ good, neutral, bad }: StatisticsProps) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(1)} />
          <StatisticLine text="Positive" value={Number(positive.toFixed(1))} />
        </tbody>
      </table>
    </>
  );
};

const Button = ({ onClick, text }: { onClick: () => void; text: string }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  // State for storing feedback values
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  // Event handlers for updating feedback values
  const handleGoodClick = () => setValues({ ...values, good: values.good + 1 });
  const handleNeutralClick = () =>
    setValues({ ...values, neutral: values.neutral + 1 });
  const handleBadClick = () => setValues({ ...values, bad: values.bad + 1 });

  return (
    <>
      <h2>Give Feedback</h2>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Statistics
        good={values.good}
        neutral={values.neutral}
        bad={values.bad}
      />
    </>
  );
};

export default App;
