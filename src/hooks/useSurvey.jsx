import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useSurvey = () => {
    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
   
   const {refetch,data:surveys=[]}=useQuery({
    queryKey:['surveys',user?.email],
    queryFn:async()=>{
        const result=await axiosPublic.get(`/api/v1/show-survey-user-based?email=${user?.email}`)
        return result.data
    }
   })
   return [surveys,refetch]
};

export default useSurvey;