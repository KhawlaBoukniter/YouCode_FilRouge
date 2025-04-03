import React from "react";
import { ArrowRight, Import, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./ui/button";
import heroImage from "../assets/images/hero-art.png";
import FadeIn from "./ui/FadeIn";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-gray-50 to-white w-full">
            <div className="max-w-[1280px] mx-auto px-20 py-20 pb-10 flex justify-between items-center">
                {/* Left Content */}
                <div className="w-[592px] space-y-[70px]">
                    <FadeIn>
                        <h1 className="font-garamond text-4xl text-black leading-[60px]">
                            Experience Art in a New Dimension
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="font-garamond text-xl text-gray-600 leading-5">
                            Step into the future of art exploration with our immersive 3D
                            museum platform. Discover masterpieces from around the world in
                            stunning detail.
                        </p>
                    </FadeIn>

                    <div className="flex space-x-3">
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
                            >
                                <Play className="h-4 w-3" aria-hidden="true" />
                                Watch Demo
                            </Button>
                        </FadeIn>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-[500px] h-[500px]">
                    <div
                        className="w-full h-full rounded-2xl bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroImage})`,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;