import React from "react";
import Button from "../ui/button";

const SubscriptionSection = () => {
    return (
        <section className="relative w-full bg-cover bg-center mt-20" >

            < div className="w-full max-w-7xl mx-auto" >
                < img
                    src="/assets/images/cta-bg.png"
                    alt="CTA Background"
                    className="w-full object-cover h-80"
                />

                < div className="absolute inset-0 bg-[#c8c09db2] gap-7 flex flex-col items-center justify-center text-center" >
                    <h2 className="text-center text-2xl md:text-3xl text-black font-playfair">
                        Stay Updated with Our Collection
                    </h2>

                    <p className="text-center text-gray-600 text-base leading-5 max-w-xl font-playfair">
                        Subscribe to our newsletter for exclusive previews and exhibition announcements
                    </p>

                    <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-96 h-14 rounded-full border border-gray-300 px-6 text-base"
                        />
                        <Button className="w-36 h-14 bg-black text-white rounded-full font-playfair">
                            Subscribe
                        </Button>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default SubscriptionSection;