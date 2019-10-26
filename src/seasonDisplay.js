import "./seasonDisplay.css";

import React from "react";

const seasonConfig = {
  summer: { text: "Let's hit the beach", iconName: "sun" },
  winter: { text: "Burr, it's chilly", iconName: "snowflake" }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={season + " season-display"}>
      <i className={iconName + " icon-left massive icon"}></i>
      <h1>{text}</h1>
      <i className={iconName + " icon-right massive icon"}></i>
    </div>
  );
};

export default SeasonDisplay;
