// React
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PropTypes } from "prop-types";


/**
 * Returns the tooltip's information on user hovers
 * @function CustomTooltip
 * @param { boolean } active: inital value false / becomes true when hover on LineChart
 * @param { array } payload: contains datas to be displayed on hover
 * @returns { JSX }
 */

 const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "white",
          fontSize: 10,
          fontWeight: 500,
          textAlign: "center",
          padding: 10,
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Returns a customized Shape for the tooltip cursor
 * @function CustomizedCursor
 * @param { array } points: array of shape's points
 * @returns { JSX }
 */

const CustomizedCursor = ({ points }) => {
  const xPos = points[0].x;
  return (
      <rect x={xPos} y={0} width={"100%"} height={"100%"} fill="rgba(0, 0, 0, 0.1)" />
  );
};



/**
 * Returns User's average sessions with a LineChart
 * @function CardAverage
 * @param { Object } average
 * @returns {JSX}
 */

function CardAverage({ average }) {
  const daysWeekTxt = (day) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[day - 1];
  };

  return (
    <div className="card-container-average">
      <h3>
        Durée moyenne des <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={200}
          height={200}
          data={average.sessions}
          margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            activeDot={{ r: 4, strokeOpacity: 0.3, strokeWidth: 8, fill: "#fff"}}
            stroke="url(#colorUv)"
            strokeWidth={2}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            mirror={true}
            padding={{ left: 10, right: 10 }}
            stroke="rgba(255, 255, 255, 0.7)"
            style={{ fontSize: 12, fontWeight: 500 }}
            tickLine={false}
            tickMargin={15}
            tickFormatter={daysWeekTxt}
          />
          <YAxis
            axisLine={false}
            domain={["dataMin - 20", "dataMax + 40"]}
            mirror={true}
            tickCount={0}
            tickLine={false}
          />
          <Tooltip
            content={CustomTooltip}
            cursor={<CustomizedCursor />}
            offset={20}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CardAverage;

// Proptypes

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CustomizedCursor.propTypes = {
  points: PropTypes.array,
};

CardAverage.propTypes = {
  average: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};
