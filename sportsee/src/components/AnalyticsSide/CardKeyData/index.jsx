// React
import React from "react";
import { PropTypes } from "prop-types";

/**
 * Returns a User's KeyData components (calories or proteins or glucids or lipids)
 * @function CardKeyData
 * @param { String } iconSrc
 * @param { String } iconAlt
 * @param { String } dataValue
 * @param { String } dataType
 * @returns { JSX }
 */

function CardKeyData(props) {
  return (
    <div className="cards-keydata">
      <img
        src={props.iconSrc}
        alt={props.iconAlt}
        className={`${props.iconAlt}`}
      />
      <div>
        <strong>{props.dataValue}</strong>
        <br />
        <span>{props.dataType}</span>
      </div>
    </div>
  );
}

export default CardKeyData;

// Proptypes

CardKeyData.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  dataValue: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  dataType: PropTypes.string.isRequired,
};
