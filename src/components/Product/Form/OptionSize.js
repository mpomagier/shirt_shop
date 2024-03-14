import React from "react";
import PropTypes from "prop-types";

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <ul>
      {sizes.map((size) => (
        <li key={size.name}>
          <button type="button" onClick={() => setCurrentSize(size.name)}>
            {size.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
