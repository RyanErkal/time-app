import { useState, useEffect, useContext } from "react";
import { login } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    function handleChange(e) {
        const { id, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(loginFormData.email, loginFormData.password);
    }

    useEffect(() => {
        if (auth.currentUser) {
            navigate('/dashboard');
        }
    }, [auth.currentUser, navigate]);


    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-slate-700">
            <div className="bg-slate-100 px-24 py-12 rounded-xl text-slate-800">
                <h1 className="font-bold text-2xl mb-6 text-center">Login</h1>
                <div>
                    <div className="m-2 flex flex-col items-center">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            value={loginFormData.email}
                            type="email"
                            id="email"
                            className="bg-slate-100 outline-none border-b-2 focus:border-blue-600 transition-all" />
                    </div>
                    <div className="m-2 flex flex-col items-center">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            value={loginFormData.password}
                            type="password"
                            id="password"
                            className="bg-slate-100 outline-none border-b-2 focus:border-blue-600 transition-all" />
                    </div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="font-bold text-xl bg-blue-800 text-slate-100 w-full p-2 rounded-full hover:bg-blue-600 shadow-2xl mt-6 transition-all">Login</button>
                </div>
            </div>
        </div>
    );
}
