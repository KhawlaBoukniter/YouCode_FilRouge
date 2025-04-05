import React from "react";
import { Card, CardContent } from "../ui/card";

const ContactForm = () => {
    return (
        <Card className="w-full md:max-w-xl max-h-full !bg-[#D6D5D5] rounded-3xl border-0 mx-10 my-5 opacity-70">
            <CardContent className="p-10">
                <form className="space-y-8">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full h-14 bg-transparent border-0 border-b-2 border-transparent outline-none text-[#a09048] text-base font-playfair px-0"
                            style={{
                                borderImage: "linear-gradient(90deg, rgba(59,108,143,1) 0%, rgba(197,181,133,1) 100%) 1",
                            }}
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full h-14 bg-transparent border-0 border-b-2 border-transparent outline-none text-[#a09048] text-base font-playfair px-0"
                            style={{
                                borderImage: "linear-gradient(90deg, rgba(59,108,143,1) 0%, rgba(197,181,133,1) 100%) 1",
                            }}
                        />

                        <textarea
                            placeholder="Your Message"
                            className="w-full pt-4 h-32 bg-transparent border-0 border-b-2 border-transparent text-[#a09048] text-base font-playfair resize-none outline-none px-0"
                            style={{
                                borderImage: "linear-gradient(90deg, rgba(59,108,143,1), rgba(197,181,133,1)) 1",
                                borderImageSlice: 1,
                                borderImageRepeat: "stretch",
                                borderImageSource: "linear-gradient(90deg, rgba(59,108,143,1), rgba(197,181,133,1))"
                            }}
                        />
                    </div>

                    <div class="flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-44 h-14 rounded-full text-white text-lg font-playfair "
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(59,108,143,1) 0%, rgba(204,185,132,1) 100%)",
                            }}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </CardContent>
        </Card>


    );
};

export default ContactForm;