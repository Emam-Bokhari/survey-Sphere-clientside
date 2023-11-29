import { Outlet } from "react-router-dom";
import Sidebar from "../../Pages/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {

    return (
        <div>

          
            <div className="flex min-h-screen" >

                {/* sidebar */}
                <div className="bg-[#f3f7fa]" >
                    <Sidebar />
                </div>

                {/* outlet */}
                <div className="bg-[#F6F6F6] flex-1" >
  
                    <Outlet />
                    
                </div>

            

            </div>
        </div>
    );
};

export default DashboardLayout;