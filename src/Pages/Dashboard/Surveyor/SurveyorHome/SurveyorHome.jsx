import { useContext } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Search from "../../Sidebar/Search/Search";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const SurveyorHome = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {/*  */}

            {/* Search, and notification */}
            <Search />

            <SectionTitle title="Surveyor Home" />

            <div className="flex flex-col md:flex-row items-center justify-center gap-10" >

                <div>
                    <img className="h-[400px]" src="https://i.ibb.co/2PBfN4W/bg.jpg" alt="" />
                </div>


                <div className="flex justify-center my-20" >
                    <div className="px-6 " >

                        <div className="flex items-center gap-3" >
                            <div>

                                <h2 className="text-center font-medium text-[#2a2a2a]" >{user?.displayName || "User"}</h2>
                                <h2  >{user?.email}</h2>
                            </div>

                            <div>
                                {user.photoURL ? (
                                    <img
                                        className="w-24 h-24 rounded-full border-2 border-gray-300"
                                        src={user.photoURL}

                                    />
                                ) : (
                                    <FaCircleUser className="text-6xl" />
                                )}
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default SurveyorHome;