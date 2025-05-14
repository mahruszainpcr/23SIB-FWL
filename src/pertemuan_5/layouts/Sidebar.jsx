import { MdDashboard } from "react-icons/md"; 
import { RiCustomerServiceFill } from "react-icons/ri"; 
import { AiOutlineUnorderedList } from "react-icons/ai"; 
import {FaSignInAlt} from "react-icons/fa"
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const baseClass = "flex items-center space-x-3 p-3 rounded-md text-gray-600 hover:bg-green-200 hover:font-semibold";
    const activeClass = "bg-green-500 text-white font-semibold";

    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo Section */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins font-extrabold text-4xl">
                    Sedap <b id="logo-dot" className="text-green-500">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">
                    Modern Admin Dashboard
                </span>
            </div>

            {/* Sidebar Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    {/* Dashboard */}
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? activeClass : ""}`
                            }
                            aria-label="Navigate to Dashboard"
                        >
                            <MdDashboard className="mr-4 text-xl" />
                            Dashboard
                        </NavLink>
                    </li>
                    {/* Orders */}
                    <li>
                        <NavLink
                            to="/order"
                            end
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? activeClass : ""}`
                            }
                            aria-label="Navigate to Orders"
                        >
                            <AiOutlineUnorderedList className="mr-4 text-xl" />
                            Orders
                        </NavLink>
                    </li>
                    {/* Customers */}
                    <li>
                        <NavLink
                            to="/customer"
                            end
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? activeClass : ""}`
                            }
                            aria-label="Navigate to Customers"
                        >
                            <RiCustomerServiceFill className="mr-4 text-xl" />
                            Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            end
                            className={({ isActive }) =>
                                `${baseClass} ${isActive ? activeClass : ""}`
                            }
                            aria-label="Navigate to Customers"
                        >
                             <FaSignInAlt className="mr-4 text-xl" />
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div
                    id="footer-card"
                    className="flex items-center px-4 py-2 rounded-md shadow-lg mb-10 bg-green-500"
                >
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through the button below!</span>
                        <div
                            id="add-menu-button"
                            className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
                            onClick={() => alert("Add Menus clicked!")}
                        >
                            <span className="text-gray-600 flex items-center">Add Menus</span>
                        </div>
                    </div>
                    <img
                        id="footer-avatar"
                        src="https://avatar.iran.liara.run/public/28"
                        className="w-20 rounded-full ml-auto"
                        alt="Footer Avatar"
                    />
                </div>
                <span id="footer-brand" className="block font-semibold text-gray-600">
                    Sedap Restaurant Admin Dashboard
                </span>
                <p id="footer-copyright" className="font-light text-gray-400">
                    &copy; 2025 All Rights Reserved
                </p>
            </div>
        </div>
    );
}
