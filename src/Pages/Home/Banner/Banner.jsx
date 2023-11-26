
const Banner = () => {
    return (
        <div>

            <div>

                <div>



                    <div className="flex items-center flex-col-reverse md:flex-row" >

                        {/* text and button */}
                        <div className="flex-1 space-y-3">

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2a2a2a]" >Welcome to SurveySphere</h2>

                            <p className="text-lg text-[#2c2c2c] font-medium text-justify" >Where every opinion is valued. Your insights shape our world, making each sentence a unique contribution to collective wisdom.</p>


                            {/* button */}
                            <div className="flex gap-3" >
                                <button className="px-6 py-3 rounded bg-[#19cb98] text-white text-base font-semibold" >Explore</button>

                                <button className="px-6 py-3 rounded bg-white text-black text-base font-semibold border-[1px] border-[#aabbd0]">About Us</button>
                            </div>
                        </div>


                        {/* photo */}
                        <div className=" flex-1" >
                            <img className="w-full h-[400px]" src="https://i.ibb.co/ggsSs5R/bg.jpg" />
                        </div>


                    </div>

                </div>




            </div>




        </div>
    );
};

export default Banner;