import React from "react";
import { Card, CardContent } from "../ui/card";
import {
    MailIcon,
    MapPinIcon,
    InstagramIcon,
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon,
    HashIcon,
} from "lucide-react";
import FadeIn from "../ui/FadeIn";

const contactCards = [
    {
        id: 1,
        title: "Visit Us",
        content: ["123 ArtSpace Avenue", "Creative District, CA 90210"],
        icon: <MapPinIcon className="h-6 w-6 text-white" />,
        bgColor: "bg-[#3a6b8f]",
    },
    {
        id: 2,
        title: "Email Us",
        content: ["hello@artspace.gallery", "exhibitions@artspace.gallery"],
        icon: <MailIcon className="h-6 w-6 text-white" />,
        bgColor: "bg-[#c5b585]",
    },
    {
        id: 3,
        title: "Follow Us",
        socialIcons: true,
        icon: <HashIcon className="h-6 w-6 text-white" />,
        bgColor: "bg-[#3a6b8f]",
    },
];

const ContactInfoCards = () => {
    return (
        <div className="w-full -z-10 max-w-[95%] sm:max-w-lg lg:max-w-xl space-y-6 mx-auto my-5">
            {contactCards.map((card, i) => (
                <FadeIn key={card.id} delay={0.4 * i}>
                    <Card
                        className={`bg-[#D6D5D5] !h-[8.25rem] !my-auto rounded-3xl border-0 opacity-70 ${card.socialIcons ? "h-32" : "h-36"
                            }`}
                    >
                        <CardContent className="p-8 flex items-start">
                            <div
                                className={`w-16 h-16 ${card.bgColor} rounded-full flex items-center justify-center mr-8`}
                            >
                                {card.icon}
                            </div>

                            <div>
                                <h3 className="font-playfair text-[#232528] text-xl mb-2">
                                    {card.title}
                                </h3>

                                {card.content &&
                                    card.content.map((line, idx) => (
                                        <p
                                            key={idx}
                                            className="font-playfair text-[#51555e] text-base leading-6"
                                        >
                                            {line}
                                        </p>
                                    ))}

                                {card.socialIcons && (
                                    <div className="flex space-x-6 mt-4">
                                        <a href="https://www.instagram.com/artspace" target="_blank" rel="noopener noreferrer">
                                            <InstagramIcon className="h-6 w-6 text-[#51555e] hover:text-[#3a6b8f]" />
                                        </a>
                                        <a href="https://twitter.com/artspace" target="_blank" rel="noopener noreferrer">
                                            <TwitterIcon className="h-6 w-6 text-[#51555e] hover:text-[#3a6b8f]" />
                                        </a>
                                        <a href="https://facebook.com/artspace" target="_blank" rel="noopener noreferrer">
                                            <FacebookIcon className="h-6 w-6 text-[#51555e] hover:text-[#3a6b8f]" />
                                        </a>
                                        <a href="https://linkedin.com/company/artspace" target="_blank" rel="noopener noreferrer">
                                            <LinkedinIcon className="h-6 w-6 text-[#51555e] hover:text-[#3a6b8f]" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </FadeIn>
            ))}
        </div>
    );
};

export default ContactInfoCards;