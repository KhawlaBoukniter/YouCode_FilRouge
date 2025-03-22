import React from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Art Curator",
        quote:
            "The 3D viewing experience is revolutionary. It's changing how we interact with art in the digital age.",
        image: "/assets/testimonials/avatar.png",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Digital Artist",
        quote:
            "As an artist, this platform gives me new ways to showcase my work to a global audience.",
        image: "/assets/testimonials/avatar.png",
    },
    {
        id: 3,
        name: "Emma Davis",
        role: "Art Collector",
        quote:
            "The detail and quality of the 3D scans are incredible. It's like being in the museum.",
        image: "/assets/testimonials/avatar.png",
    },
];

const Testimonials = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-12">
                <div className="text-center mb-16">
                    <h2 className="[font-family:'Cormorant_Garamond',Helvetica] font-normal text-4xl mb-6 text-black leading-9">
                        What Art Lovers Say
                    </h2>
                    <p className="[font-family:'Cormorant_Garamond',Helvetica] font-normal text-xl text-gray-600 leading-5">
                        Hear from our passionate community of art enthusiasts
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="rounded-[20px] bg-white shadow-[0px_10px_15px_#0000000a] p-6"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="[font-family:'Playfair_Display',Helvetica] text-base text-black font-medium leading-4">
                                        {t.name}
                                    </h4>
                                    <p className="[font-family:'Cormorant_Garamond',Helvetica] text-sm text-gray-600">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                            <p className="[font-family:'Cormorant_Garamond',Helvetica] italic text-gray-700 text-base leading-relaxed">
                                "{t.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;