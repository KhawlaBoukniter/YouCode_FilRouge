import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/button";
import heroImage from "../../assets/images/hero-art.png";
import FadeIn from "../ui/FadeIn";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-gray-50 to-white w-full">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-20 pb-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="w-full lg:w-[592px] space-y-10 md:space-y-[70px] text-center lg:text-left">
                    <FadeIn>
                        <h1 className="font-garamond text-3xl md:text-4xl text-black leading-snug">
                            Experience Art in a New Dimension
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="font-garamond text-base md:text-xl text-gray-600 leading-6 md:leading-5">
                            Step into the future of art exploration with our immersive 3D
                            museum platform. Discover masterpieces from around the world in
                            stunning detail.
                        </p>
                    </FadeIn>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                        <FadeIn delay={0.4}>
                            <Button className="h-[50px] w-[186px] rounded-full bg-[#3a6b8f] text-white font-garamond text-base">
                                <Link
                                    to='/museum/trending'
                                    className="flex items-center gap-2"
                                >
                                    Start Exploring
                                    <ArrowRight className="h-4 w-3.5" aria-hidden="true" />
                                </Link>
                            </Button>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <Button
                                variant="outline"
                                className="h-[50px] w-[171px] rounded-full border-gray-300 text-black font-garamond text-base flex items-center gap-2"
                                onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
                            >
                                <Play className="h-4 w-3" aria-hidden="true" />
                                Watch Demo
                            </Button>
                        </FadeIn>
                    </div>
                </div>

                <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px]">
                    <div
                        className="w-full h-full rounded-2xl bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroImage})`,
                        }}
                    />
                </div>
            </div >
        </section >
    );
};

export default HeroSection;