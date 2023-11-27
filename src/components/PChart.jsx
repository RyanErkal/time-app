import { useState, useLayoutEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, LabelList } from 'recharts';
import { getThisMonthData } from '../api/firebase';

const COLORS = ['#8884d8', '#82ca9d', '#12ca9d', '#1884d8'];

export default function PChart() {

    const [thisMonthData, setThisMonthData] = useState([]);

    useLayoutEffect(() => {
        getThisMonthData().then((data) => {
            setThisMonthData(data.pie);
        });
    }, []);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={thisMonthData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={true}
                    outerRadius={200}
                    dataKey="duration"
                >
                    <Legend dataKey="area" />
                    <LabelList dataKey="area" position="top" fill="white" />

                    {thisMonthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} style={{ outline: 'none' }} fill={COLORS[index % COLORS.length]} />
                    ))}

                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

