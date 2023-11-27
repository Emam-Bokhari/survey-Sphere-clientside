import DataTable from "react-data-table-component";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Search from "../../Sidebar/Search/Search";
import SectionTitle from "../../SectionTitle/SectionTitle";

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
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // create admin
    const handleMakeAdmin = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/api/v1/create-admin/${_id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Updated!",
                                text: "User has been updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    // create surveyor
    const handleMakeSurveyor = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/api/v1/create-surveyor/${_id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Updated!",
                                text: "User has been updated.",
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
            cell: (row) => {
                return row.role === "surveyor" ? 'Surveyor' : (
                    <button onClick={() => handleMakeSurveyor(row._id)} className=" text-xl text-[#2a2a2a]  flex ">
                        <FaUserEdit />
                    </button>
                )
            }

        },
        {
            name: "Action",
            cell: (row) => (
                <button onClick={() => handleDeleteUser(row._id)} className="bg-[#ed5e68] px-3 py-1 rounded text-white flex items-center gap-1">
                    <AiFillDelete className="text-lg" />  Delete
                </button>
            )
        }
    ]

    return (
        <div>

            <Search />

            <SectionTitle title="Manage Users" />

            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={users}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>

        </div>
    );
};

export default ManageUsers;