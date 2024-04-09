import React from "react";
import PropTypes from "prop-types";

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>
          <button
            type="button"
            onClick={() => setCurrentColor(color)}
            style={{ backgroundColor: color }}>
            {color}
          </button>
        </li>
      ))}
    </ul>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;
