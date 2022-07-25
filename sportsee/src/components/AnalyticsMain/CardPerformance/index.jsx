// React
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { PropTypes } from "prop-types";

/**
 * Returns kinds formated used in CardPerfomance function
 * @function FormatKind
 * @param { String[] } tickItem
 * @returns
 */

const FormatKind = (tickItem) => {
  const Kind = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];
  if (tickItem) return Kind[tickItem - 1];
};

/**
 * Returns User's Performance with a RadarChart
 * @function CardPerformance
 * @param { Object } performance
 * @returns { JSX }
 */

function CardPerformance({ performance }) {
  return (
    <div className="card-container-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          width={200}
          height={200}
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={performance.data}
          startAngle={30}
          endAngle={-330}
        >
          <PolarGrid radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={FormatKind}
            stroke={`#fff`}
            dy={4}
            tickLine={false}
            style={{
              fontSize: ".7vw",
              fontWeight: "500",
            }}
          />

          <Radar
            name="Radar"
            dataKey="value"
            fill={`#ff0000`}
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardPerformance;

// Proptypes

FormatKind.propType = {
  tickItem: PropTypes.array.isRequired,
};

CardPerformance.propTypes = {
  performance: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};
