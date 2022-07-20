// React
import React from 'react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components'
import colors from '../../../style/colors';

const CardContainer = styled.div`
    height: 260px;
    width: 31%;
    background-color: ${colors.grey};
    border-radius: 5px;
    position: relative;
      span {
        line-height: 1.1rem;
        font-size: 1vw;
      }

`

const Title = styled.h3`
    position: absolute;
    margin: 20px;
    font-size: 1vw;
`

const ScoreContent = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 0.7rem;
`

const ScoreResult = styled.strong`
    display: block;
    text-align: center;
    font-size: 2.1rem;
`

function CardScore({ score }) {

  const scoreData = score.todayScore || score.score;

  const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: scoreData, fill: '#ff0101' },
  ];

  if (!scoreData) {
    return null;
  }

    return (
        <CardContainer>
            <Title>Score</Title>
            <ScoreContent>
                <ScoreResult>{100 * scoreData}%</ScoreResult>
                <br />
                <span>
                de votre
                <br />
                objectif
                </span>
            </ScoreContent>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                width={200}
                height={200}
                startAngle={90}
                endAngle={450}
                innerRadius={90}
                outerRadius={55}
                barSize={7}
                data={scoreValue}
              >
                <RadialBar cornerRadius={50} dataKey="value" />
              </RadialBarChart>
            </ResponsiveContainer>
        </CardContainer>
    );
  }
  
  export default CardScore;