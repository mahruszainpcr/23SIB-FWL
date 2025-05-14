import {NavLink, Outlet} from "react-router-dom";

export default function customer() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold ">Customer Section</h1>
            <div className="mt-4 space-x-4 ">
                <NavLink to="Settings" className="text-blue-500"> Settings</NavLink>
            </div>
            <div className="mt-6">
                <Outlet/>
            </div>
        </div>
    );
}