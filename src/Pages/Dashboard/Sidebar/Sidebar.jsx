import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FcSurvey } from "react-icons/fc";
import { RiSurveyFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { RiSurveyLine } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import useSurveyor from "../../../hooks/useSurveyor";

const Sidebar = () => {

    const [isAdmin] = useAdmin()
    const [isSurveyor] = useSurveyor()


    return (
        <div className="my-10" >
            <nav className="w-[250px] " >

                <div className="flex justify-center" >
                    <h2 className="text-xl font-bold" >Survey <span className="text-[#5ae4a7]" >Sphere</span></h2>
                </div>


                <ul className="p-4" >


                    {isAdmin &&
                        <>
                            <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/adminHome"  > <FaHome className="text-xl" /> Admin Home</Link></li>

                            <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/manageUsers" > <FaUsers className="text-xl" /> Manage Users</Link></li>

                            <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/payments"  > <MdPayment className="text-xl" /> Payments</Link></li>

                            <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/admin/surveyResponses" > <FcSurvey className="text-xl" /> Survey Responses</Link></li>
                        </>}

                    {isSurveyor && <>
                        <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/surveyorHome"  > <FaHome className="text-xl" /> Surveyor Home</Link></li>

                        <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/createSurvey" > <IoIosCreate className="text-xl" /> Create Survey</Link></li>

                        <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/manageSurvey"  > <RiSurveyLine className="text-xl" /> Manage Survey</Link></li>

                        <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/surveyor/surveyResponses" > <FcSurvey className="text-xl" /> Survey Responses</Link></li>

                        <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/dashboard/userReport" > <MdReport className="text-xl" /> User Report</Link></li>
                    </>}


                    {/* horizontal line */}
                    <div className="my-5" >
                        <hr className="border-[1px] border-black" />
                    </div>

                    {/* Common navlink */}

                    <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/" > <FaHome className="text-xl" />Home</Link></li>

                    <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="/surveysPage" > <RiSurveyFill className="text-xl" />Surveys Page</Link></li>


                    <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link className="flex items-center gap-1" to="#" > <MdOutlineEmail className="text-xl" />Contact</Link></li>

                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;