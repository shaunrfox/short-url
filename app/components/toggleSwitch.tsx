// import React from "react";

const ToggleSwitch = ({ label, keyId, checked }) => {
  return (
    <div className="toggle-switch">
      <input type="checkbox" className="checkbox" name={keyId} id={keyId} />
      <label className="label" htmlFor={keyId}>
        {label}
      </label>
    </div>
  );
};

export default ToggleSwitch;
