import { useLoaderData } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Search from "../../../Sidebar/Search/Search";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateSurvey = () => {
    const survey = useLoaderData()
    // console.log(survey);
    const { user } = useContext(AuthContext)
    const { surveyTitle, date, description, question1, question2, question3, question4, question5, _id } = survey || {}
    const axiosSecure = useAxiosSecure()

    const handleUpdateSurvey = async (event) => {
        event.preventDefault();
        const form = event.target;

        const updateSurveyData = {
            email: form.email.value,
            surveyTitle: form.surveyTitle.value,
            category: form.category.value,
            date: form.date.value,
            description: form.description.value,
            question1: form.question1.value,
        };
        // console.log(updateSurveyData);

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

                axiosSecure.patch(`/api/v1/${_id}/update-survey`, updateSurveyData)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Survey has been updated.",
                                icon: "success"
                            });
                        }
                    })
            }
        });



    }


    return (
        <div>
            <Search />

            <div>
                <SectionTitle title="Update Survey" />

                <div className="bg-gray-200 p-6 my-5 rounded-md">
                    <form onSubmit={handleUpdateSurvey}>
                        <div className="flex flex-col md:flex-row gap-5 my-5">
                            <div className="flex-1">
                                <input
                                    className="bg-white p-2 rounded-sm w-full outline-none"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={user?.email}
                                    readOnly

                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    className="bg-white p-2 rounded-sm w-full outline-none"
                                    type="text"
                                    name="surveyTitle"
                                    placeholder="Survey Title" required
                                    defaultValue={surveyTitle}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 my-5">
                            <div className="flex-1">
                                <select className="bg-white w-full p-2 rounded-sm outline-none" name="category" required>
                                    <option value="" >Select Category</option>
                                    <option value="Education">Education</option>
                                    <option value="Health Care">Health Care</option>
                                    <option value="Ecommerce">Ecommerce</option>
                                    <option value="Human Resources">Human Resources</option>
                                    <option value="Customers">Customers</option>
                                    <option value="Market Research">Market Research</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="date" defaultValue={date} />
                            </div>
                        </div>

                        <div className="my-5">
                            <textarea
                                className="w-full rounded-sm resize-none p-2 outline-none"
                                name="description"
                                rows="10"
                                placeholder="Description"
                                defaultValue={description}
                            ></textarea>
                        </div>

                        {/* question */}
                        <div className="space-y-2" >

                            <div>
                                <p className="text-lg text-[#2a2a2a]" >Question 1:</p>
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="text" name="question1" placeholder="Enter Your Question 1 ?" required defaultValue={question1} />
                            </div>

                        </div>





                        <div className="my-5">
                            <input
                                className="bg-[#19cb98] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                                type="submit"
                                value="Update"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateSurvey;