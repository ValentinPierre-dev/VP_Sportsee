// React
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

import styled from 'styled-components'

const CardContainer = styled.div`
    height: 260px;
    width: 31%;
    background-color: red;
    border-radius: 5px;
`

function CardAverage({ average }) {

    const daysWeekTxt = (day) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[day - 1];
      };


    return (
        <CardContainer>
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
                <Line
                  type="monotone"
                  dataKey="sessionLength"
                  dot={false}
                  activeDot={{ r: 5, strokeOpacity: 0.2, strokeWidth: 10 }}
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth={2}
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  mirror={true}
                  padding={{ left: 10, right: 10 }}
                  stroke="rgba(255, 255, 255, 0.5)"
                  style={{ fontSize: 12, fontWeight: 500 }}
                  tickLine={false}
                  tickMargin={15}
                  tickFormatter={daysWeekTxt}
                />
                <YAxis
                  axisLine={false}
                  domain={['dataMin - 20', 'dataMax + 40']}
                  mirror={true}
                  tickCount={0}
                  tickLine={false}
                />
              </LineChart>
          </ResponsiveContainer>
        </CardContainer>
    );
  }
  
  export default CardAverage;