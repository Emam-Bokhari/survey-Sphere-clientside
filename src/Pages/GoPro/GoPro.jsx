import Navbar from "../../sharedComponents/Navbar/Navbar";
import Payment from "./Payment/Payment";

const GoPro = () => {
    return (
        <div className="my-10" >

            <Navbar />

            <div className="shadow-md p-4 rounded " >
                <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#2a2a2a]" >Pay <span className=" text-[#5ae4a7]">$50</span> for Pro-User</h2>

                <p className="text-center text-[#2c2c2c] text-base" >If you are a pro user, you can comment on any survey</p>

                <img className="w-full md:h-[500px] " src="https://i.ibb.co/L0YSHqs/go-pro.jpg" alt="" />

            </div>


            {/* payment component */}
            <div className="my-10" >
                <Payment />
            </div>



        </div>
    );
};

export default GoPro;