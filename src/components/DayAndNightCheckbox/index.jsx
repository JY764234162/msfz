import React from "react";
import "./index.css";

export const DayAndNightCheckbox = () => {
  return (
    <div className="checkbox">
      <input
        id="day-night-checkbox"
        type="checkbox"
        className="checkbox__input"
      />
      <label htmlFor="day-night-checkbox" className="checkbox__items">
        <div className="checkbox__sun-moon"></div>
        <div className="checkbox__stars">
          <div className="checkbox__star"></div>
        </div>
        <div className="checkbox__cloud-body">
          <div className="checkbox__cloud"></div>
        </div>
      </label>
    </div>
  );
};
