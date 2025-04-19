import React from "react";
import Button from "../ui/button";
import heroImage from "../../assets/images/about-section.png";
import FadeIn from "../ui/FadeIn";

const Section = () => {
    return (
        <section className="relative w-full h-[800px] overflow-hidden">
            <div
                className="relative h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="absolute inset-0 bg-[#00000066]" />

                <div className="relative h-full flex items-center">
                    <div className="container px-20">
                        <div className="max-w-[768px]">
                            <FadeIn delay={0.3}>
                                <h1 className="text-6xl text-white font-normal font-garamond leading-[60px]">
                                    Where Art Meets Innovation
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.5}>
                                <p className="mt-8 text-xl text-white font-normal font-garamond leading-5 max-w-[683px]">
                                    Experience art like never before in our revolutionary 3D virtual
                                    museum, where tradition meets technology.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.7}>
                                <div className="mt-10 flex space-x-4">
                                    <Button className="h-[52px] w-44 rounded-full bg-white !text-black hover:bg-white/90">
                                        Take Virtual Tour
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="h-[52px] w-[126px] rounded-full border-2 border-white text-black hover:bg-white/10 hover:text-white"
                                    >
                                        Learn More
                                    </Button>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;