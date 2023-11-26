import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../sharedComponents/Navbar/Navbar";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaComment } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import CommentData from "./CommentData";



const SurveyDetails = () => {
    const details = useLoaderData()
    // console.log(details);
    const { surveyTitle, description, _id } = details || {}
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const handleLike = async (_id) => {
        console.log('like', _id);
        const surveyLike = {
            surveyId: _id,
            count: 1,
            email: user?.email
        }
        const like = await axiosPublic.post("/api/v1/like-survey", surveyLike)
        console.log(like.data);
        if (like.data.insertedId) {
            alert('like done')
        }


    }

    // comment
    const handleComment = async (event) => {
        event.preventDefault()
        const form = event.target
        const comment = form.comment.value

        const commentInfo = {
            comment,
            commentId: _id,
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL
        }

        // console.log(comment,'done');


        const commentRes = await axiosPublic.post("/api/v1/comment", commentInfo)
        if (commentRes.data.insertedId) {
            alert('Your comment done!')
        }
        form.reset()
        console.log(commentRes.data);

    }

    const { data: comment = [], refetch } = useQuery({
        queryKey: ['comment'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/show-comment?commentId=${_id}`)
            return res.data
        }
    })
    // console.log(comment);
    // console.log(_id);
    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch();
        }, 5000); // Adjust the polling interval as needed (e.g., every 5 seconds)

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [refetch]);




    return (
        <div className="my-10" >

            {/* Navbar */}
            <Navbar />




            <div className="space-y-2" >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2a37]" >{surveyTitle}</h2>

                <p className="text-[#76757a] text-lg text-justify" >{description}</p>

                {/* like and dislike */}
                <div className="text-2xl flex items-center gap-2" >
                    <AiFillLike onClick={() => handleLike(_id)} className="cursor-pointer hover:text-blue-500" /> 0


                    <AiFillDislike className="cursor-pointer hover:text-blue-500" /> 0
                </div>
            </div>

            {/* start survey */}
            <div className="my-5" >
                <Link to={`/startSurvey/${_id}`} >
                    <button className="bg-[#5ae4a7] text-[2a2a2a] font-bold text-lg rounded px-3 py-2">Start Survey</button>
                </Link>
            </div>


            {/* comment */}
            <form  onSubmit={handleComment} >

                <div className="flex gap-5" >
                    <FaComment className="text-6xl md:text-7xl lg:text-8xl" />

                    <textarea className=" w-full md:h-40 border-2 border-gray-300 p-4 text-[2a2a2a] text-lg " name="comment" placeholder="Share your thoughts..."></textarea>

                </div>

                <div className="text-end my-5 " >
                    <input className="bg-[#5ae4a7] px-3 py-2 cursor-pointer rounded text-base font-semibold" type="submit" value="Submit" />
                </div>

            </form>


            <div className="grid grid-cols-1 gap-5" >
                {comment.map((item, index) => <CommentData key={index} data={item} />)}
            </div>








        </div>
    );
};

export default SurveyDetails;