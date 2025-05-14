import {NavLink, Outlet} from "react-router-dom";

export default function Order() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold ">Order Section</h1>
            <div className="mt-4 space-x-4 ">
                <NavLink to="Invoice" className="text-blue-500"> Invoice</NavLink>
            </div>
            <div className="mt-6">
                <Outlet/>
            </div>
        </div>
    );
}