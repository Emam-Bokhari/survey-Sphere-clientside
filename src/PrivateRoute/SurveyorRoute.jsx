
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useSurveyor from './../hooks/useSurveyor';


const SurveyorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSurveyor, isSurveyorLoading] = useSurveyor()



    if (loading || isSurveyorLoading) {
        return <div className="flex justify-center items-center h-[50vh]" ><span className="loading loading-spinner loading-lg text-primary"></span></div>
    }
    if (user && isSurveyor) {
        return children
    }

    return <Navigate to="/" />
};

export default SurveyorRoute;