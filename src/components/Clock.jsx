import { useState, useEffect } from 'react';

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p className='font-bold text-7xl w-full text-center'>
            {date.toLocaleTimeString()}
        </p>
    );
}