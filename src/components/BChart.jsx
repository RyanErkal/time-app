import { useState, useLayoutEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { getThisWeekData } from '../api/firebase';

export default function BChart() {
    const [thisWeekData, setThisWeekData] = useState([]);

    useLayoutEffect(() => {
        getThisWeekData().then((data) => {
            setThisWeekData(data);
        });
    }, []);

    /* const barData = JSON.stringify(data);
    console.log(barData); */

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={thisWeekData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="day" stroke='white' />
                <YAxis stroke='white' />
                <Legend />
                <Bar dataKey="coding" stackId="a" fill="#8884d8" />
                <Bar dataKey="reading" stackId="a" fill="#82ca9d" />
                <Bar dataKey="interview" stackId="a" fill="#12ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );

}
