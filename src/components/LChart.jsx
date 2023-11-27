import { useState, useLayoutEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { getThisYearData } from '../api/firebase';

export default function LChart() {
    const [thisYearData, setThisYearData] = useState([]);

    useLayoutEffect(() => {
        getThisYearData().then((data) => {
            setThisYearData(data.line);
        });
    }, []);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={thisYearData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="1 4" />
                <XAxis dataKey="month" stroke="white" />
                <YAxis stroke="white" />
                <Legend />
                <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

