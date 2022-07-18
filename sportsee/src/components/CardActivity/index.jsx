import styled from 'styled-components'
import colors from '../../utils/style/colors';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
  
  const data = [
    {
      name: "Page A",
      poids: 4000,
      calories: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      poids: 3000,
      calories: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      poids: 2000,
      calories: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      poids: 2780,
      calories: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      poids: 1890,
      calories: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      poids: 2390,
      calories: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      poids: 3490,
      calories: 4300,
      amt: 2100
    }
  ];

const CardContainer = styled.div`
    height: 320px;
    width: 100%;
    background-color: ${colors.grey};
    border-radius: 5px;
`

function CardActivity() {
    return (
        <CardContainer>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="poids" fill={colors.secondary} barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill={colors.primary} barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </CardContainer>
    );
  }
  
  export default CardActivity;