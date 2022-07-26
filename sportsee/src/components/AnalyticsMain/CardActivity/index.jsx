// React
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PropTypes } from "prop-types";

// Assets
import weightPoint from "../../../assets/weight-point.svg";
import caloriesPoint from "../../../assets/calories-point.svg";

/**
 * Returns the tooltip's information on user hovers
 * @function CustomTooltip
 * @param { boolean } active: inital value false / becomes true when hover on BarChart
 * @param { array } payload: contains datas to be displayed on hover
 * @returns { JSX }
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#E60000",
          height: 100,
          color: "white",
          fontSize: 15,
          textAlign: "center",
          padding: 20,
        }}
      >
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Returns User's activity with a double BarChart
 * @function CardActivity
 * @param { Object } activity
 * @returns { JSX }
 */

function CardActivity({ activity }) {
  return activity.sessions ? (
    <div className="card-container-activity">
      <div className="legend">
        <h3>Activité quotidienne</h3>
        <div className="legendItems">
          <div>
            <span>
              <img src={weightPoint} alt="Légende Poids" />
            </span>
            Poids (kg)
          </div>
          <div>
            <span>
              <img src={caloriesPoint} alt="Légende Calories" />
            </span>
            Calories Brulées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={activity.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => day.slice(-1)} 
            tickLine={false}
            axisLine={false}
            tickMargin={15}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={25}
          />
          <Tooltip content={CustomTooltip} offset={30} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div></div>
  );
}

export default CardActivity;

// Proptypes

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

CardActivity.propTypes = {
  activity: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]),
};
