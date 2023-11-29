
import Navbar from "../../sharedComponents/Navbar/Navbar";
// import Accordian from "./Accordian/Accordian";
import Banner from "./Banner/Banner";
import RecentSurvey from "./RecentSurvey/RecentSurvey";
import Testimonials from "./Testomonials/Testomonials";

const Home = () => {

    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <Banner />

            {/* Recent Survey */}
            <RecentSurvey />


            {/* Accordian */}
            {/* <Accordian /> */}

            {/* reviews */}
            <Testimonials />




        </div>
    );
};

export default Home;