import { NavLink } from 'react-router-dom';

export default function SideNav() {
    const activeStyle = {
        color: "#8884d8",
    };

    return (
        <div className="flex xl:flex-col h-max bg-slate-700 py-6">
            <NavLink
                to="/dashboard"
                className="text-xl font-bold p-4 xl:p-6 xl:pl-12 transition-all"
                style={({ isActive }) => isActive ? activeStyle : null}
            >Dashboard</NavLink>
            <NavLink
                to="/focus"
                className="text-xl font-bold p-4 xl:p-6 xl:pl-12 transition-all"
                style={({ isActive }) => isActive ? activeStyle : null}
            >Focus</NavLink>
            <NavLink
                to="/todo"
                className="text-xl font-bold p-4 xl:p-6 xl:pl-12 transition-all"
                style={({ isActive }) => isActive ? activeStyle : null}
            >Todo</NavLink>
        </div>
    );
}
