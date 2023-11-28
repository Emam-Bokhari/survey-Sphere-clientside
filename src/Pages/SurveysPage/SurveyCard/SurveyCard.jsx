import { Link } from "react-router-dom";

const SurveyCard = ({ data }) => {
    // console.log(data);
    const { surveyTitle, description, _id } = data || {};

    return (



        <Link to={`/surveyDetails/${_id}`} className="flex flex-col min-h-full">
            <div className="bg-[#f7f7f7] p-8 rounded flex flex-col justify-between h-full">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#2c2a37]">{surveyTitle}</h2>

                    <p className="text-[#76757a] flex-grow">
                        {description?.length > 60
                            ? `${description.slice(0, 60)}...`
                            : description
                        }
                    </p>
                </div>

                <div className="flex justify-between" >
                    <p className="font-bold text-[#3abe2c]">Total Voted: 0</p>

                    <p className="font-bold text-blue-500">Total Like: 0</p>
                </div>

            </div>
        </Link>


    );
};

export default SurveyCard;
