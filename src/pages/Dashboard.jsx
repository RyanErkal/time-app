import { useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../context/authContext";
import BChart from "../components/BChart";
import RChart from "../components/RChart";
import PChart from "../components/PChart";
import LChart from "../components/LChart";

export default function Dashboard() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();


    useLayoutEffect(() => {
        if (!auth.currentUser) {
            navigate('/login');
        }
    }, [auth.currentUser, navigate]);

    return (
        <div className="flex flex-col justify-center items-center m-6 p-12 max-w-[1280px] w-full bg-slate-600 rounded-2xl">
            <h1 className="text-3xl font-bold">Dashboard - {date} - {time}</h1>
            <section className="flex flex-col justify-center items-center mt-12 w-full">
                <h2 className="text-2xl font-bold">All Time</h2>
                <div className="w-full">
                    <p>Total mins focused: 500</p>
                    <p>Total focus sessions: 40</p>
                    <p>Avg focus duration: 35</p>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center mt-12 w-full">
                <h2 className="text-2xl font-bold">This Week</h2>
                <div className="w-full h-[30vh]">
                    <BChart />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center mt-12 w-full">
                <h2 className="text-2xl font-bold">This Month</h2>
                <div className="w-full h-[30vh] flex">
                    <RChart />
                    <PChart />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center mt-12 w-full">
                <h2 className="text-2xl font-bold">This Year</h2>
                <div className="w-full h-[30vh]">
                    <LChart />
                </div>
            </section>
        </div>
    );
}
