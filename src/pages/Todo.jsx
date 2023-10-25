import { useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../context/authContext";


export default function Todo() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (!auth.currentUser) {
            navigate('/login');
        }
    }, [auth.currentUser, navigate]);

    return (
        <div className="flex flex-col justify-center items-center m-6 p-12 max-w-[1280px] w-full bg-slate-600 rounded-2xl">
            <h1 className="text-3xl font-bold">Todo</h1>

        </div>
    );
}