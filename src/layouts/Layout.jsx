import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

export default function Layout() {
    return (
        <div className="w-screen h-full min-h-screen flex flex-col justify-start items-center bg-slate-700">
            <TopNav />
            <Outlet />
        </div>
    );
}
