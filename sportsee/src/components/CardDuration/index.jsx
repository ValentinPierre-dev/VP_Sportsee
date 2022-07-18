import styled from 'styled-components'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
import colors from '../../utils/style/colors';

const CardContainer = styled.div`
    height: 260px;
    width: 31%;
    background-color: ${colors.primary};
    border-radius: 5px;
`

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function CardDuration() {

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
                data={data}
                margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
                >
                    <Line
                        type="monotone"
                        dataKey="pv"
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
  
  export default CardDuration;