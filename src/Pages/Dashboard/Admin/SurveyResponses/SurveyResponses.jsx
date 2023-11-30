import useSurveyVoted from "../../../../hooks/useSurveyVoted";
import DataTable from "react-data-table-component";
import Search from "../../Sidebar/Search/Search";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const SurveyResponses = () => {
    const axiosPublic=useAxiosPublic()
    const [voted] = useSurveyVoted()
  
  const surveyIds = voted.map(item => item.surveyId);


  const selectedSurveyId = surveyIds.length > 0 ? surveyIds[0] : null;

  const { data: totalVoted = [] } = useQuery({
    queryKey: ['totalVoted', selectedSurveyId],
    queryFn: async () => {
      if (!selectedSurveyId) {
        return [];
      }

      const res = await axiosPublic.get(`/api/v1/show-total-voted?surveyId=${selectedSurveyId}`);
      return res.data;
    },
  });
  
//   answer1

  console.log(totalVoted);

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Vote",
            selector: (row) => row.answer1
        },
       

    ]


    return (

        <div>
            <Search />



            <SectionTitle title="Survey Responses" />


            <DataTable
                columns={columns}
                data={voted}
                pagination
                highlightOnHover
                responsive
            />
        </div>
    );
};

export default SurveyResponses;