import { useState } from "react";
import { signUp } from "../api/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [signupFormData, setSignupFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const navigate = useNavigate();

    function handleChange(e) {
        const { id, value } = e.target;
        setSignupFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        signUp(signupFormData.email, signupFormData.password);
        navigate('/login');
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-slate-700">
            <div className="bg-slate-100 px-24 py-12 rounded-xl text-slate-800">
                <h1 className="font-bold text-2xl mb-6 text-center">Sign Up</h1>
                <div>
                    <div className="m-2 flex flex-col items-center">
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={handleChange}
                            value={signupFormData.name}
                            type="text"
                            id="name"
                            className="bg-slate-100 outline-none border-b-2 focus:border-blue-600 transition-all" />
                    </div>
                    <div className="m-2 flex flex-col items-center">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleChange}
                            value={signupFormData.email}
                            type="email"
                            id="email"
                            className="bg-slate-100 outline-none border-b-2 focus:border-blue-600 transition-all" />
                    </div>
                    <div className="m-2 flex flex-col items-center">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            value={signupFormData.password}
                            type="password"
                            id="password"
                            className="bg-slate-100 outline-none border-b-2 focus:border-blue-600 transition-all" />
                    </div>
                    <div className="m-2 flex flex-col items-center">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input
                            onChange={handleChange}
                            value={signupFormData.password_confirmation}
                            type="password"
                            id="password_confirmation"
                            className="bg-slate-100 outline-none border-b-2 focus:border-blue-600 transition-all" />
                    </div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="font-bold text-xl bg-blue-800 text-slate-100 w-full p-2 rounded-full hover:bg-blue-600 shadow-2xl mt-6 transition-all">Sign Up</button>
                </div>
            </div>
        </div>
    );
}
