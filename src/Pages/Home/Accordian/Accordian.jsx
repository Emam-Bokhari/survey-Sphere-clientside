


const Accordian = () => {
    return (
        <div className="my-10">
            <div >
                <h2 className="text-3xl font-semibold text-center text-[#5ae4a7]">
                    FAQ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10 gap-6">
                    <div className="collapse collapse-plus bg-dark-03 text-black">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-semibold">
                           What are the main goals or intentions driving this survey?
                        </div>
                        <div className="collapse-content">
                            <p>
                            The survey aims to collect relevant information on a specific topic or set of topics.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-dark-03 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                            Who can participate in the survey?
                        </div>
                        <div className="collapse-content">
                            <p>Specify the target audience or criteria for participation.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-dark-03 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                            Will the results be made public?
                        </div>
                        <div className="collapse-content">
                            <p>
                            The findings will be utilised to justify the objectives, such as decision-making, research, and improvement. Data that has been anonymized and aggregated may be made available to the public.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-dark-03 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                        Is it possible for me to skip questions?
                        </div>
                        <div className="collapse-content">
                            <p>
                            You are allowed to skip questions. Nonetheless, in order to give thorough input, we strongly advise you to respond to every question.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-dark-03 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                        How can I get in touch with the survey administrators if I have any further questions?
                        </div>
                        <div className="collapse-content">
                            <p>
                            If you have any additional inquiries, don't hesitate to contact us and provide us with your contact information.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-dark-03 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">
                        What is the outcome of my data after I complete the survey?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Show your survey results visually.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;