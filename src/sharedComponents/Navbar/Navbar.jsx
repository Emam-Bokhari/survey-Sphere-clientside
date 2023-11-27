'use client'
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {

    // const axiosPublic=useAxiosPublic()

    // const {data:users=[]}=useQuery({
    //     queryKey:['users'],
    //     queryFn:async()=>{
    //         const res=await axiosPublic.get("/api/v1/all-users")
    //         return res.data
    //     }
    // })


    const { user, logout } = useContext(AuthContext);


    // logout functionality
    const handleLogout = () => {
        logout()
            .then(() => {
                return toast.success('Logout Successful!');
            })
            .catch((error) => {
                return toast.error(error.message);
            });
    };

    return (
        <div className=" shadow-lg my-10">
            <div className="navbar">
                <div className="navbar-start">
                    {/* Dropdown menu for small screens */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <div className="text-2xl">
                                <BiMenu />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-48">

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/surveysPage">Surveys Page</Link></li>

                            <li><Link to="/goPro">Go Pro</Link></li>

                            <li><Link to="/dashboard">Dashboard</Link></li>

                        </ul>
                    </div>
                    {/* Logo */}
                    <div>
                        <img className="w-16 h-16" src="https://i.ibb.co/JcLhbRf/logo.png" alt="Logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Navigation links */}
                    <ul className="flex gap-5 text-[14px] md:text-base text-[#5c5776] font-normal">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#19cb98] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/surveysPage"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#19cb98] underline" : ""
                                }
                            >
                                Surveys Page
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/goPro"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#19cb98] underline" : ""
                                }
                            >
                                Go Pro
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#19cb98] underline" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* Conditional rendering of user profile or login button */}
                    {/* button */}
                    {user ? (
                        <div className="space-y-2">
                            <div className="flex gap-3 items-center ">
                                {user.photoURL ? (
                                    <img
                                        className="w-9 h-9 rounded-full border-2 border-gray-300"
                                        src={user.photoURL}

                                    />
                                ) : (
                                    <FaCircleUser className="text-3xl" />
                                )}
                                <p>{user.displayName || "User"}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="bg-[#19cb98] px-3 py-1 rounded-sm text-[#2a2a2a] font-semibold text-lg"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center">
                            <FaCircleUser className="text-3xl" />
                            <Link to="/signin">
                                <button className="bg-[#19cb98] px-2 py-1 rounded-sm text-lg font-semibold text-[#2a2a2a] tracking-wide">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;
