import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";




const useSurveyor = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()

    const {data:isSurveyor,isPending:isSurveyorLoading}=useQuery({
        queryKey:[user?.email,'isSurveyor'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/api/v1/check-surveyor?email=${user?.email}`)
            console.log(res.data);
            return res.data?.surveyor
        }
    })
    return [isSurveyor,isSurveyorLoading]
   
};

export default useSurveyor;