// React
import React from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { PropTypes } from "prop-types";

/**
 * Returns User's Score with a RadialBarChart
 * @function CardScore
 * @param { Number } scoreData: users today score
 * @returns { JSX }
 */

function CardScore({ score }) {
  const scoreData = score.todayScore || score.score;

  const scoreValue = [
    { value: 1, fill: "transparent" },
    { value: scoreData, fill: "#ff0101" },
  ];

  if (!scoreData) {
    return null;
  }

  return (
    <div className="card-container-score">
      <h3>Score</h3>
      <div className="score-content">
        <strong>{100 * scoreData}%</strong>
        <br />
        <span>
          de votre
          <br />
          objectif
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={200}
          height={200}
          startAngle={90}
          endAngle={450}
          innerRadius={200}
          outerRadius={70}
          barSize={7}
          data={scoreValue}
        >
          <RadialBar cornerRadius={50} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardScore;

// Proptypes

CardScore.propTypes = {
  score: PropTypes.object.isRequired
};
