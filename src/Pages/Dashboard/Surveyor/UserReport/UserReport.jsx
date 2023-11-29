import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../../../../hooks/useAxiosPublic';
import Search from "../../Sidebar/Search/Search";
import SectionTitle from "../../SectionTitle/SectionTitle";

const UserReport = () => {
    const axiosPublic = useAxiosPublic();

    


    const { data: report = [] } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            const res = await axiosPublic.get("/api/v1/show-report")
            return res.data
        }
    });
    // console.log(report);

    const [selectedReport, setSelectedReport] = useState(null);

    const openModal = (report) => {
        setSelectedReport(report);
        document.getElementById('my_modal_5').showModal();
    };

    const closeModal = () => {
        setSelectedReport(null);
        document.getElementById('my_modal_5').close();
    };

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "name",
            selector: (row) => row.name
        },
        {
            name: "Category",
            selector: (row) => row.email
        },
        {
            name: "Survey Title",
            selector: (row) => row.surveyTitle

        },
        {
            name: "Report",
            cell: (row) => (
                <button className="bg-[#ed5e68] px-3 py-1 rounded text-white" onClick={() => openModal(row)}>Report</button>
            )
        }
    ];

    return (
        <div>
            <Search />
            <SectionTitle title="User Report" />

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Report Details</h3>
                    {selectedReport && (
                        <>
                            <p className='text-lg' >Name: {selectedReport.name}</p>
                            <p>Email: {selectedReport.email}</p>
                            <p>Survey Title: {selectedReport.surveyTitle}</p>
                            <p>Report: {selectedReport.report}</p>
                            {/* Add more details as needed */}
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={report}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default UserReport;
