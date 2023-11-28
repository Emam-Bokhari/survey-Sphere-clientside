
import { Outlet } from "react-router-dom";
import Footer from "../../sharedComponents/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            

            {/* Outlet */}
            <Outlet />
            
            <Footer/>
        </div>
    );
};

export default MainLayout;