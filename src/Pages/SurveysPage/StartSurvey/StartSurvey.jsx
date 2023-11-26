import { useLoaderData } from "react-router-dom";

const StartSurvey = () => {
    const surveyDetails = useLoaderData()
    console.log(surveyDetails);
    const { question1,question2 } = surveyDetails || {}


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const question1 = form.question1.value
        const question2 = form.question2.value
        const answer1=form.answer1.value 
        const answer2=form.answer2.value 

        console.log(question1);
        console.log(question2);
        console.log(answer1);
        console.log(answer2);
        
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}  >

            
                <input 
                  className=" rounded-sm p-2 " defaultValue={question1} name="question1" />
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

                <br />

                <input 
                  className=" rounded-sm p-2 " defaultValue={question2} name="question2" />


            <div className="flex my-2">
                  <label className="mr-3">
                    <input type="radio" value="yes" name="answer2" />
                    Yes
                  </label>
                  <label>
                    <input type="radio" name="answer2" value="no" />
                    No
                  </label>
                </div>

                <input className="bg-green-500 px-3 py-1 rounded" type="submit"  value="Submit"  />

            </form>
        </div>
    );
};

export default StartSurvey;