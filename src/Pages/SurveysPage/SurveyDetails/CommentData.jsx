
const CommentData = ({data}) => {
    // console.log(data);
    const {comment,name,photo}=data||{}
    return (
        <div>
            
            <div className="flex gap-5" >
                <img className="w-16 rounded-full" src={photo}  />

                <div>
                    <h2 className="font-semibold text-lg" >{name}</h2>
                    <p>{comment}</p>
                </div>
            </div>

        </div>
    );
};

export default CommentData;