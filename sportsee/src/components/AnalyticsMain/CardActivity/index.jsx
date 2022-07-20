// React
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import styled from 'styled-components'

const CardContainer = styled.div`
    height: 320px;
    width: 100%;
    background-color: #FBFBFB;
    border-radius: 5px;
`


function CardActivity({activity}) {

    return (
        <CardContainer>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={activity.sessions}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis orientation="right" domain={[60, 80]} />
                    <Tooltip />
                    <Bar dataKey="kilogram" fill='#282D30' barSize={10} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </CardContainer>
    );
  }
  
  export default CardActivity;