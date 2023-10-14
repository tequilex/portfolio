import React from "react";

import "./counter-section.styles.scss";

const numbers = [
  {
    value: "100",
  },
  {
    value: "100,000",
  },
  {
    value: "7",
  },
  {
    value: "5",
  },
  {
    value: "100",
  },
  {
    value: "100,000",
  },
  {
    value: "7",
  },
  {
    value: "5",
  },
  {
    value: "100",
  },
  {
    value: "100,000",
  },
  {
    value: "7",
  },
  {
    value: "5",
  },
  {
    value: "100",
  },
  {
    value: "100,000",
  },
  {
    value: "7",
  },
  {
    value: "5",
  },
];

const CounterSection = () => {
  return (
    <div className="counter">
      <div className="counter__border">
        {numbers.map((number, index) => {
          return <div className="counter__number" key={index}>{number.value}</div>;
        })}
      </div>
    </div>
  );
};

export default CounterSection;
