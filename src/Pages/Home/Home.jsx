import { useLoaderData } from "react-router-dom";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import Accordian from "./Accordian/Accordian";
import Banner from "./Banner/Banner";

const Home = () => {
    const reviewData=useLoaderData()
    console.log(reviewData);
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <Banner />


            {/* Accordian */}
            <Accordian />




        </div>
    );
};

export default Home;