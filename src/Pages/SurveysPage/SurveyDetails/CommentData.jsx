import { FaUserCircle } from "react-icons/fa";

const CommentData = ({data}) => {
    // console.log(data);
    const {comment,name,photo}=data||{}
    return (
        <div>
            
            <div className="flex gap-5" >
                {photo?(<img className="w-16 rounded-full" src={photo}  />)
                :
                (<FaUserCircle className="text-6xl" />)}

                <div>
                    {name?<h2 className="font-semibold text-lg" >{name}</h2>:<h2 className="font-semibold text-lg">User</h2>}
                    <p>{comment}</p>
                </div>
            </div>

        </div>
    );
};

export default CommentData;