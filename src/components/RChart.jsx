import { useState, useLayoutEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { getThisMonthData } from '../api/firebase';

export default function RChart() {

    const [thisMonthData, setThisMonthData] = useState([]);

    useLayoutEffect(() => {
        getThisMonthData().then((data) => {
            setThisMonthData(data.radar);
        });
    }, []);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="100%" data={thisMonthData}>
                <PolarGrid stroke='white' />
                <PolarAngleAxis dataKey="area" stroke='white' />
                <PolarRadiusAxis angle={50} stroke='white' />
                <Radar dataKey="duration" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );

}
