"use client"
import { useState } from "react";

const Checkbox = ({ label, color }) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <label className={`flex items-center space-x-2 text-${color}-500`}>
      <input
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-${color}-500`}
        checked={checked}
        onChange={toggleChecked}
      />
      <span>{label}</span>
    </label>
  );
};
export default Checkbox;
