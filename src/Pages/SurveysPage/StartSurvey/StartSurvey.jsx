import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../../sharedComponents/Navbar/Navbar";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const StartSurvey = () => {
  const surveyDetails = useLoaderData()
  // console.log(surveyDetails);
  const axiosPublic=useAxiosPublic()
  const navigate=useNavigate()
  // console.log(surveyDetails);
  const { question1,category,_id } = surveyDetails || {}
  const {user}=useContext(AuthContext)


  const handleSubmit =async (event) => {
    event.preventDefault()
    const form = event.target
    // question 
    const question1 = form.question1.value
    // answer
    const answer1 = form.answer1.value

    const surveyVote={
      name:user?.displayName||"User",
      email:user?.email,
      time: new Date().toLocaleTimeString(),
      question1,
      answer1,
      category,
      surveyId:_id
    }
    console.log(surveyVote);

   
      const surveyVoteRes = await axiosPublic.post("/api/v1/create-surveyVote", surveyVote)
      console.log(surveyVoteRes.data);
      console.log(surveyVoteRes.data.message);
      if(surveyVoteRes.data.insertedId){
        navigate("/")
        toast.success("Your vote has been done!")
      }
      else{
        toast.error("You are already voted this survey!")
      }
      form.reset()
      
    


  }

  return (
    <div className="mb-80" >

      {/* Navbar */}

      <Navbar />

      <form onSubmit={handleSubmit}  >

        {/* question 1 */}
        <input
          className="  text-2xl text-[#2a2a2a] font-bold outline-none" defaultValue={question1} name="question1" readOnly />

        <div className="flex my-2">
          <label className="mr-3">
            <input type="radio" value="yes" name="answer1" />
            Yes
          </label>
          <label>
            <input type="radio" name="answer1" value="no" />
            No
          </label>
        </div>


        {/* submit button */}
        <div className="my-5" >
          <input className="bg-[#5ae4a7] text-lg font-bold px-4 py-2 rounded cursor-pointer" type="submit" value="Submit" />
        </div>

      </form>
    </div>
  );
};

export default StartSurvey;