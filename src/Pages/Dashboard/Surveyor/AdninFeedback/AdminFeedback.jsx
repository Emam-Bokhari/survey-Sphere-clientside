import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import DataTable from "react-data-table-component";
import useAllSurvey from "../../../../hooks/useAllSurveys";

const AdminFedBack = () => {
   const [allSurveys]=useAllSurvey()

    // Step 3: Filter users based on the selected role
    const filtered = allSurveys.filter(sueve => {
        if (sueve.status !== 'Publish') {
            return true; // Display all sueves if no role is selected
        } else {
            // return sueve.role === selectedRole;
        }
    });
    console.log(allSurveys);


    const [selectedReport, setSelectedReport] = useState(null);

    const openModal = (feedback) => {
        setSelectedReport(feedback);
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
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Survey Title",
            selector: (row) => row.surveyTitle

        },
        {
            name: "Report",
            cell: (row) => (
                <button className="bg-[#ed5e68] px-3 py-1 rounded text-white" onClick={() => openModal(row)}>Feedback</button>
            )
        }
    ];
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-[#2a2a2a]">Report Details</h3>
                    
                    {selectedReport && (
                        <div className="space-y-3" >
                            <p className="text-base font-medium text-[#2c2c2c] " >Survey Title: {selectedReport.surveyTitle}</p>

                            <p className="text-[#767584]" >Feedback: {selectedReport.feedback}</p>
                            {/* Add more details as needed */}
                        </div>
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
                    data={filtered}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default AdminFedBack;