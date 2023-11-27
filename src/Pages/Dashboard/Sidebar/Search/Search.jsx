import { IoSearchSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const Search = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>


            <div className="bg-white shadow-lg p-6" >

                <div className="flex items-center justify-between" >

                    {/* search */}
                    <div className="flex items-center relative" >
                        <IoSearchSharp className="text-2xl absolute ml-2" />
                        <input className="border-2 border-[#ececec] rounded w-60 px-8 py-2" type="text" placeholder="Search" />
                    </div>

                    {/* user photo, name, email */}
                    <div className="flex items-center gap-5" >
                        <MdEmail className="text-2xl" />
                        <IoIosNotifications className="text-3xl" />

                        <div className="flex items-center gap-2" >

                            <div>
                                {user.photoURL ? (
                                    <img
                                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                                        src={user.photoURL}

                                    />
                                ) : (
                                    <FaCircleUser className="text-3xl" />
                                )}
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-[#4c4c4c]" >{user?.displayName || "User"}</h2>
                                <p className="text-[#d6d6d6]" >{user?.email}</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Search;