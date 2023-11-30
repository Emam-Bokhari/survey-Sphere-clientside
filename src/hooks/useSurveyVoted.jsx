import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useSurveyVoted = () => {

    const axiosPublic=useAxiosPublic()
   
   const {refetch,data:voted=[]}=useQuery({
    queryKey:['allVoted'],
    queryFn:async()=>{
        const result=await axiosPublic.get("/api/v1/show-survey-vote")
        return result.data
    }
   })
   return [voted,refetch]
};

export default useSurveyVoted;