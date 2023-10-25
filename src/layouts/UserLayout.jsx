import { Outlet } from 'react-router-dom';
import SideNav from '../components/SideNav';

export default function UserLayout() {

    return (
        <>
            <div className=" w-full grid grid-cols-12">
                <div className="col-span-1 w-full ">
                    <SideNav />
                </div>
                <div className="col-span-10 flex flex-col justify-start items-center">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
