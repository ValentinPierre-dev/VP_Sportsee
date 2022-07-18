import styled from 'styled-components'
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import colors from '../../utils/style/colors';

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

const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: 0.50, fill:colors.primary },
  ];

function CardScore() {
    return (
        <CardContainer>
            <Title>Score</Title>
            <ScoreContent>
                <ScoreResult>{12}%</ScoreResult>
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
                outerRadius={70}
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