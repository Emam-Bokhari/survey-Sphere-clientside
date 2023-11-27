import { AiFillDelete } from "react-icons/ai";
import useSurvey from "../../../../hooks/useSurvey";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Search from "../../Sidebar/Search/Search";
import DataTable from "react-data-table-component";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageSurvey = () => {
    const [surveys,refetch]=useSurvey()
    console.log(surveys);
    const axiosSecure=useAxiosSecure()

// /api/v1/:surveyId/delete-survey

const handleDeleteSurvey = (_id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/api/v1/${_id}/delete-survey`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Survey has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
    refetch()
}
    
    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Title",
            selector: (row) => row.surveyTitle
        },
        {
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Action",
            cell: (row) =>   (
               <Link to={`/dashboard/updateSurvey/${row._id}`} >
                <button className="bg-[#5ae4a7] px-3 py-1 rounded text-[#2a2a2a] flex items-center gap-1">
                    <FaEdit className="text-lg" />Update
                </button>
               </Link>
            )
        },
        {
            name: "Action",
            cell: (row) =>   (
                <button onClick={() => handleDeleteSurvey(row._id)}  className="bg-[#ed5e68] px-3 py-1 rounded text-white flex items-center gap-1">
                    <AiFillDelete className="text-lg" />  Delete
                </button>
            )
        }
    ]
    
    return (
        <div>

            <Search/>

           <SectionTitle title="Manage Survey" />

           <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={surveys}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
            

        </div>
    );
};

export default ManageSurvey;