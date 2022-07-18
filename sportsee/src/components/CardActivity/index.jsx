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
      name: "1",
      poids: 4000,
      calories: 2400
    },
    {
      name: "2",
      poids: 3000,
      calories: 1398
    },
    {
      name: "3",
      poids: 2000,
      calories: 9800
    },
    {
      name: "4",
      poids: 2780,
      calories: 3908
    },
    {
      name: "5",
      poids: 1890,
      calories: 4800
    },
    {
      name: "6",
      poids: 2390,
      calories: 3800
    },
    {
      name: "7",
      poids: 3490,
      calories: 4300
    },
    {
      name: "8",
      poids: 3490,
      calories: 4300
    },
    {
      name: "9",
      poids: 3490,
      calories: 4300
    },
    {
      name: "10",
      poids: 3490,
      calories: 4300
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