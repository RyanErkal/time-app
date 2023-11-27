import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';

export default function UserLayout() {

    return (
        <>
            <div className=" w-full h-full grid grid-cols-12 bg-slate-600">
                <div className="col-span-2 w-full h-full bg-slate-700">
                    <SideNav />
                </div>
                <div className="col-span-10 flex flex-col justify-start items-center bg-slate-600">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
