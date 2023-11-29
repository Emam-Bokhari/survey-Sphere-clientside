import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAllSurvey = () => {

    const axiosPublic=useAxiosPublic()
   
   const {refetch,data:allSurveys=[]}=useQuery({
    queryKey:['Allsurveys'],
    queryFn:async()=>{
        const result=await axiosPublic.get("/api/v1/show-all-surveys")
        return result.data
    }
   })
   return [allSurveys,refetch]
};

export default useAllSurvey;