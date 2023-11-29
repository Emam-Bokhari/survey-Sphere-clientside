import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import RecentSurveyCard from "./RecentSurveyCard";

// /api/v1/recent-surveys
const RecentSurvey = () => {
    const axiosPublic = useAxiosPublic()

    const { data: recentSurvey = [] } = useQuery({
        queryKey: ['recentSurvey'],
        queryFn: async () => {
            const res = await axiosPublic.get("/api/v1/recent-surveys")
            return res.data
        }
    });
    console.log(recentSurvey);


    return (
        <div className="my-10" >

            <h2 className="text-3xl font-semibold text-center text-[#5ae4a7] mb-5">
                Recent Survey
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {recentSurvey.map((item, index) => <RecentSurveyCard key={index} data={item} />)}
            </div>




        </div>
    );
};

export default RecentSurvey;