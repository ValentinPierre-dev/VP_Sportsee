// React
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components'


const CardContainer = styled.div`
    height: 260px;
    width: 31%;
    background-color: #282D30;
    border-radius: 5px;
`

function CardPerformance( {performance} ) {

  const TransformKind = (tickItem) => {
    const Kind = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ];
    if (tickItem) return Kind[tickItem - 1];
  };

  console.log(performance.data)
    return (
        <CardContainer>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              width={200}
              height={200}
              cx="50%"
              cy="50%"
              outerRadius="65%"
              data={performance.data}
            >
              <PolarGrid radialLines={false} />

              <PolarAngleAxis
                dataKey="kind"
                tickFormatter={TransformKind}
                stroke={`#fff`}
                dy={4}
                tickLine={false}
                style={{
                  fontSize: '.7vw',
                  fontWeight: '500',
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
        </CardContainer>
    );
  }
  
  export default CardPerformance;