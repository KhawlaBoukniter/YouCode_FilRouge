import React from "react";

const CallToAction = () => {
    return (
        <section className="px-4 sm:px-6 md:px-10 lg:px-12 mb-20">
            <div className="max-w-[1232px] mx-auto relative">
                <img
                    src="/assets/images/cta-bg.png"
                    alt="CTA Background"
                    className="w-full h-64 sm:h-72 md:h-[286px] object-cover rounded-[20px]"
                />

                <div className="absolute inset-0 bg-[#c8c09db2] rounded-[20px] flex flex-col items-center justify-center px-4 py-8 text-center space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-black font-playfair leading-snug">
                        Ready to Start <br className="block sm:hidden" />
                        Your Virtual Journey?
                    </h3>

                    <p className="text-sm sm:text-base text-gray-900 max-w-[90%] sm:max-w-[672px] font-playfair leading-relaxed">
                        Join thousands of art enthusiasts exploring masterpieces in stunning 3D detail. Get started today with our free trial.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a href="/register" className="w-full sm:w-auto max-w-[280px]">
                            <button className="bg-gray-900 text-[#d3bb75] rounded-full h-[44px] px-6 font-garamond font-bold text-sm sm:text-base transition hover:opacity-90 w-full">
                                Start Free Trial
                            </button>
                        </a>
                        <a href="/about" className="w-full sm:w-auto max-w-[280px]">
                            <button className="border border-black rounded-full h-[44px] px-6 text-black font-playfair text-sm sm:text-base hover:bg-black hover:text-white hover:shadow-sm transition w-full">
                                Learn More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;