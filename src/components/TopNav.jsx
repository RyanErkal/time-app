import { Link } from "react-router-dom";
import { logout } from "../api/firebase";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function TopNav() {
    const auth = useContext(AuthContext);

    return (
        <nav className="flex flex-row w-full justify-between items-center bg-slate-800">
            <h1 className="font-bold text-4xl px-12 py-4">
                <Link to="/">Time</Link>
            </h1>
            {!auth.currentUser ?
                <ul className="flex flex-row px-12 gap-6 font-bold text-lg">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
                :
                <ul className="flex flex-row px-12 gap-6 font-bold text-lg">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={logout}>
                        Logout
                    </li>
                </ul>
            }
        </nav>
    );
}
