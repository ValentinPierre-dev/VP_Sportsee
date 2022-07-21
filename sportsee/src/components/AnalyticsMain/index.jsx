// React
import React from "react";
import { PropTypes } from "prop-types";

// Components
import CardActivity from "./CardActivity";
import CardAverage from "./CardAverage";
import CardPerformance from "./CardPerformance";
import CardScore from "./CardScore";

/**
 * Returns User's Main datas with Recharts components
 * @function AnalyticsMain
 * @param { Object } activity
 * @param { Object } average
 * @param { Object } performance
 * @param { Object } score
 * @returns { JSX }
 */

function AnalyticsMain({ activity, average, performance, score }) {
  return (
    <main className="analytics-main">
      <CardActivity activity={activity} />
      <div className="mini-cards">
        <CardAverage average={average} />
        <CardPerformance performance={performance} />
        <CardScore score={score} />
      </div>
    </main>
  );
}

export default AnalyticsMain;

// Proptypes

AnalyticsMain.propTypes = {
  activity: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
  average: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
  performance: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
  score: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};
