import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function Layout() {
    return (
        <div className="w-screen h-screen min-h-screen flex flex-col justify-start items-center bg-slate-600">
            <TopNav />
            <Outlet />
        </div>
    );
}
