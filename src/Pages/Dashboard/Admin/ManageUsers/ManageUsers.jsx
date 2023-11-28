import DataTable from "react-data-table-component";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AiFillDelete } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Search from "../../Sidebar/Search/Search";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useState } from "react";

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


    const [selectedRole, setSelectedRole] = useState(''); // Step 1: State for selected role

    // Step 3: Filter users based on the selected role
    const filteredUsers = users.filter(user => {
        if (selectedRole === '') {
            return true; // Display all users if no role is selected
        } else {
            return user.role === selectedRole;
        }
    });


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
            name: "Pro User",
            selector: (row) => row.role === 'prouser' ? 'Prouser' : ''
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

            <div className="px-6">
                <label className="text-lg font-medium" htmlFor="roleFilter">Filter by Role: </label>
                <select className=" text-base md:text-lg"
                    id="roleFilter"
                    onChange={(e) => setSelectedRole(e.target.value)}
                    value={selectedRole}
                >
                    <option value="">All</option>
                    <option value="user">User</option>
                    <option value="prouser">Pro User</option>
                    <option value="admin">Admin</option>
                    <option value="surveyor">Surveyor</option>
                </select>
            </div>

            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={filteredUsers}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>

        </div>
    );
};

export default ManageUsers;