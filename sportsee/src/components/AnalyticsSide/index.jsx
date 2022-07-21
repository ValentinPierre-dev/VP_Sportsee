// React
import React from "react";
import { PropTypes } from "prop-types";

// Components
import CardKeyData from "./CardKeyData";

// Assets
import calories from "../../assets/calories.svg";
import proteins from "../../assets/proteins.svg";
import glucids from "../../assets/glucids.svg";
import lipids from "../../assets/lipids.svg";

/**
 * Returns all User's KeyData components (calories, proteins, glucids, lipids)
 * @function AnalyticsSide
 * @param { Object } analyticsData
 * @returns { JSX }
 */

function AnalyticsSide({ analyticsData }) {
  return (
    <aside className="analytics-side">
      <CardKeyData
        dataId="calo"
        iconSrc={calories}
        iconAlt="calories"
        dataValue={`${new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 3,
        }).format(analyticsData.calorieCount)}kCal`}
        dataType="Calories"
      />
      <CardKeyData
        dataId="prot"
        iconSrc={proteins}
        iconAlt="protéines"
        dataValue={`${analyticsData.proteinCount}g`}
        dataType="Protéines"
      />
      <CardKeyData
        dataId="gluc"
        iconSrc={glucids}
        iconAlt="glucides"
        dataValue={`${analyticsData.carbohydrateCount}g`}
        dataType="Glucides"
      />
      <CardKeyData
        dataId="lipi"
        iconSrc={lipids}
        iconAlt="lipides"
        dataValue={`${analyticsData.lipidCount}g`}
        dataType="Lipides"
      />
    </aside>
  );
}

export default AnalyticsSide;

// Proptypes

AnalyticsSide.propTypes = {
  analyticsData: PropTypes.object.isRequired,
};
