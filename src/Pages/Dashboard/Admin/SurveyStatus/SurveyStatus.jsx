import useAllSurvey from "../../../../hooks/useAllSurveys";
import DataTable from "react-data-table-component";
import Search from "../../Sidebar/Search/Search";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const SurveyStatus = () => {
    const axiosPublic=useAxiosPublic()
    const [allSurveys,refetch]=useAllSurvey()
    console.log(allSurveys);
    const feedback = 'I suggest enhancing the survey by incorporating more nuanced and aesthetically pleasing language to create a more engaging and enjoyable experience for participants.'


    // publish survey
    const handlePublish=(_id)=>{
        console.log('publish',_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Publish it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.patch(`/api/v1/publish-survey/${_id}`,{ status: 'Publish' })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Publish!",
                                text: "Survey has been published.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    // unpublished survey
    const handleUnPublished=(_id)=>{
        console.log('publish',_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Unpublish it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.patch(`/api/v1/publish-survey/${_id}`,{ status: 'unpublish',feedback })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "UnPublished!",
                                text: "Survey has been unpublished.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    
    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Surveyor Email",
            selector: (row) => row.surveyorEmail
        },
        {
            name: "Survey Title",
            selector: (row) => row.surveyTitle
        },
        {
            name: "Survey Category",
            selector: (row) => row.category
        },
        {
            name: "Approve",
            cell: (row) => (
                <button onClick={() => row.status === 'publish' ? handlePublish(row._id) : handlePublish(row._id)}
                className={`px-3 py-1 rounded  flex items-center gap-1 font-medium ${
                    row.status === 'Publish' ? 'bg-[#5ae4a7] text-[#2a2a2a]' : 'bg-[#ed5e68] text-white'
                }`}>
                Publish 
            </button>
                    )
        },
        {
            name: "Decline",
            cell: (row) => (
                <button onClick={() => row.status === 'publish' ? handleUnPublished(row._id) : handleUnPublished(row._id)}
                className={`px-3 py-1 rounded  flex items-center gap-1 font-medium ${
                    row.status === 'Publish' ? 'bg-[#5ae4a7] text-[#2a2a2a]' : 'bg-[#ed5e68] text-white'
                }`}>
                UnPublish
            </button>
                    )
        },
        
    ]


    return (
        <div>
            
            <Search />

            

<SectionTitle title="Publis or UnPublis Surveys" />

<DataTable
                    columns={columns}
                    data={allSurveys}
                    pagination
                    highlightOnHover
                    responsive
                />

        </div>
    );
};

export default SurveyStatus;