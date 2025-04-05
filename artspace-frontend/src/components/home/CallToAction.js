import React from "react";

const CallToAction = () => {
    return (
        <section className="px-12 mb-20">
            < div className="max-w-[1232px] mx-auto relative" >
                {/* Background Image */}
                < img
                    src="/assets/images/cta-bg.png"
                    alt="CTA Background"
                    className="w-full h-[286px] object-cover rounded-[20px]"
                />

                {/* Overlay */}
                < div className="absolute inset-0 bg-[#c8c09db2] rounded-[20px] flex flex-col items-center justify-center p-12 text-center" >
                    <h3 className="text-3xl mb-6 text-black font-playfair">
                        Ready to Start Your Virtual Journey?
                    </h3>

                    <p className="text-base text-gray-900 max-w-[672px] mb-10 font-playfair">
                        Join thousands of art enthusiasts exploring masterpieces in stunning 3D detail. Get started today with our free trial.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-gray-900 text-[#d3bb75] rounded-full h-[52px] px-6 font-garamond font-bold text-base transition hover:opacity-90">
                            Start Free Trial
                        </button>
                        <button className="border border-black rounded-full h-[50px] px-6 text-black font-playfair text-base hover:bg-black hover:text-white transition">
                            Learn More
                        </button>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default CallToAction;