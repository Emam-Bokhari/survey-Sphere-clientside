import DataTable from "react-data-table-component";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {

    // all users data
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/api/v1/all-users")
            return res.data
        }
    })

    // delete user
    const handleDeleteUser = (_id) => {
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

                axiosSecure.delete(`/api/v1/${_id}/deleteUser`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
        refetch()
    }

    // create admin
    const handleMakeAdmin = (_id) => {
        console.log(_id);
        axiosSecure.patch(`/api/v1/create-admin/${_id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    alert("update done")
                    refetch()
                }
            })
    }



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
            name: "Admin Role",
            cell: (row) => {
                return row.role === "admin" ? 'Admin'
                    : (
                        <button onClick={() => handleMakeAdmin(row._id)} className=" text-xl text-[#5ae4a7]  flex ">
                            <GrUserAdmin />
                        </button>
                    )
            }


        },
        {
            name: "Surveyor Role",
            cell: (row) =>
            (
                <button className=" text-xl text-[#2a2a2a]  flex ">
                    <FaUserEdit />
                </button>
            )

        },
        {
            name: "Action",
            cell: (row) => (
                <button onClick={() => handleDeleteUser(row._id)} className="bg-red-500 px-3 py-1 rounded text-white flex items-center gap-1">
                    <AiFillDelete className="text-lg" />  Delete
                </button>
            )
        }
    ]

    return (
        <div className="my-10 p-6">

            <DataTable
                columns={columns}
                data={users}
                pagination
                highlightOnHover
                responsive
            />

        </div>
    );
};

export default ManageUsers;