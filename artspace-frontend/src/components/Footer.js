import React from "react";

const Footer = () => {
    const socialIcons = [
        {
            alt: "Twitter",
            src: "/assets/icons/twitter.png",
        },
        {
            alt: "Facebook",
            src: "/assets/icons/facebook.png",
        },
        {
            alt: "Instagram",
            src: "/assets/icons/instagram.png",
        },
        {
            alt: "LinkedIn",
            src: "/assets/icons/linkedin.png",
        },
    ];

    const footerData = {
        platform: {
            title: "Platform",
            links: ["Features", "Virtual Tours", "Exhibitions", "Collections"],
        },
        company: {
            title: "Company",
            links: ["About Us", "Careers", "Press", "Contact"],
        },
        legal: {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses"],
        },
    };

    return (
        <footer className="w-full bg-[#252321] py-14 mt-20">
            <div className="container mx-auto max-w-7xl px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
                    {/* Logo and company description */}
                    <div className="flex flex-col space-y-6">
                        <img
                            className="w-[99px] h-[99px] -mt-7 object-cover"
                            alt="ArtVerse Logo"
                            src="/assets/logos/logo_artspace.png"
                        />
                        <p className="font-garamond text-gray-400 text-base leading-4 max-w-[256px]">
                            Experience art in the digital age with our revolutionary 3D museum
                            platform.
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map((icon, index) => (
                                <div key={index} className="w-5 h-5 flex items-center justify-center">
                                    <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation columns */}
                    {Object.entries(footerData).map(([key, section]) => (
                        <div key={key} className="flex flex-col space-y-4">
                            <h3 className="font-garamond text-white text-base leading-4">
                                {section.title}
                            </h3>
                            <div className="flex flex-col space-y-6">
                                {section.links.map((link, index) => (
                                    <div key={index} className="h-6">
                                        <a
                                            href="#"
                                            className="font-garamond text-gray-400 text-base leading-4 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Copyright section */}
                <div className="mt-10 pt-2 border-t border-gray-800 flex justify-center">
                    <p className="font-garamond text-gray-400 text-base text-center mt-8">
                        © 2025 ArtVerse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;