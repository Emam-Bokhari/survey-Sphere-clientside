
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Navbar from './../../sharedComponents/Navbar/Navbar';
import SurveyCard from './SurveyCard/SurveyCard';
const SurveysPage = () => {
    const axiosPublic=useAxiosPublic()
    
    const {data:survey=[]}=useQuery({
        queryKey:['survey'],
        queryFn:async()=>{
            const res=await axiosPublic.get("/api/v1/show-servey")
            return res.data
        }
    })

    console.log(survey);
   
    return (
        <div className="my-10" >

            {/* Navbar */}
            <Navbar />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
        {survey.map((item, index) => <SurveyCard key={index} data={item} />)}
        </div>

        </div>
    );
};

export default SurveysPage;