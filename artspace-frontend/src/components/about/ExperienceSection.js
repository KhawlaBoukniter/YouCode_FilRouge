import React from "react";
import { Card, CardContent } from "../ui/card";

const ExperienceSection = () => {
    const experienceCards = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clip-path="url(#clip0_7_1954)">
                        <path d="M30 15C30 15.0527 30 15.1055 30 15.1582C29.9766 17.2969 28.0312 18.75 25.8926 18.75H20.1562C18.6035 18.75 17.3438 20.0098 17.3438 21.5625C17.3438 21.7617 17.3672 21.9551 17.4023 22.1426C17.5254 22.7402 17.7832 23.3145 18.0352 23.8945C18.3926 24.7031 18.7441 25.5059 18.7441 26.3555C18.7441 28.2188 17.4785 29.9121 15.6152 29.9883C15.4102 29.9941 15.2051 30 14.9941 30C6.71484 30 0 23.2852 0 15C0 6.71484 6.71484 0 15 0C23.2852 0 30 6.71484 30 15ZM7.5 16.875C7.5 16.3777 7.30246 15.9008 6.95083 15.5492C6.59919 15.1975 6.12228 15 5.625 15C5.12772 15 4.65081 15.1975 4.29917 15.5492C3.94754 15.9008 3.75 16.3777 3.75 16.875C3.75 17.3723 3.94754 17.8492 4.29917 18.2008C4.65081 18.5525 5.12772 18.75 5.625 18.75C6.12228 18.75 6.59919 18.5525 6.95083 18.2008C7.30246 17.8492 7.5 17.3723 7.5 16.875ZM7.5 11.25C7.99728 11.25 8.47419 11.0525 8.82582 10.7008C9.17746 10.3492 9.375 9.87228 9.375 9.375C9.375 8.87772 9.17746 8.40081 8.82582 8.04918C8.47419 7.69754 7.99728 7.5 7.5 7.5C7.00272 7.5 6.52581 7.69754 6.17417 8.04918C5.82254 8.40081 5.625 8.87772 5.625 9.375C5.625 9.87228 5.82254 10.3492 6.17417 10.7008C6.52581 11.0525 7.00272 11.25 7.5 11.25ZM16.875 5.625C16.875 5.12772 16.6775 4.65081 16.3258 4.29917C15.9742 3.94754 15.4973 3.75 15 3.75C14.5027 3.75 14.0258 3.94754 13.6742 4.29917C13.3225 4.65081 13.125 5.12772 13.125 5.625C13.125 6.12228 13.3225 6.59919 13.6742 6.95083C14.0258 7.30246 14.5027 7.5 15 7.5C15.4973 7.5 15.9742 7.30246 16.3258 6.95083C16.6775 6.59919 16.875 6.12228 16.875 5.625ZM22.5 11.25C22.9973 11.25 23.4742 11.0525 23.8258 10.7008C24.1775 10.3492 24.375 9.87228 24.375 9.375C24.375 8.87772 24.1775 8.40081 23.8258 8.04918C23.4742 7.69754 22.9973 7.5 22.5 7.5C22.0027 7.5 21.5258 7.69754 21.1742 8.04918C20.8225 8.40081 20.625 8.87772 20.625 9.375C20.625 9.87228 20.8225 10.3492 21.1742 10.7008C21.5258 11.0525 22.0027 11.25 22.5 11.25Z" fill="#3B6C8F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7_1954">
                            <path d="M0 0H30V30H0V0Z" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Collaborations artistiques",
            description:
                "Découvrez des installations numériques exclusives créées par des artistes contemporains.",
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clip-path="url(#clip0_7_1284)">
                        <path d="M13.7402 0.333984C14.5547 0.0410156 15.4453 0.0410156 16.2656 0.333984L27.5156 4.35352C29.0039 4.88672 30 6.29883 30 7.88672V22.1133C30 23.6953 29.0039 25.1133 27.5098 25.6465L16.2598 29.666C15.4453 29.959 14.5547 29.959 13.7344 29.666L2.48438 25.6465C0.996094 25.1133 0 23.7012 0 22.1133V7.88672C0 6.30469 0.996094 4.88672 2.49023 4.35352L13.7402 0.333984ZM15 3.86719L4.82227 7.5L15 11.1328L25.1777 7.5L15 3.86719ZM16.875 25.4648L26.25 22.1191V11.1035L16.875 14.4492V25.4648Z" fill="#3B6C8F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7_1284">
                            <path d="M0 0H30V30H0V0Z" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Visualisation 3D",
            description:
                "Examinez les œuvres sous tous les angles grâce à notre technologie immersive.",
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                    <g clip-path="url(#clip0_7_1293)">
                        <path d="M12.1874 20.625C18.9198 20.625 24.3749 16.0078 24.3749 10.3125C24.3749 4.61719 18.9198 0 12.1874 0C5.45499 0 -9.11459e-05 4.61719 -9.11459e-05 10.3125C-9.11459e-05 12.5742 0.861237 14.666 2.32022 16.3711C2.11514 16.9219 1.81046 17.4082 1.48819 17.8184C1.20694 18.1816 0.919831 18.4629 0.708893 18.6562C0.603424 18.75 0.515534 18.8262 0.45694 18.873C0.427643 18.8965 0.404206 18.9141 0.392487 18.9199L0.380768 18.9316C0.0585026 19.1719 -0.0821224 19.5938 0.0467839 19.9746C0.17569 20.3555 0.533112 20.625 0.937409 20.625C2.21475 20.625 3.50382 20.2969 4.57608 19.8926C5.11514 19.6875 5.61905 19.459 6.0585 19.2246C7.85733 20.1152 9.94913 20.625 12.1874 20.625ZM26.2499 10.3125C26.2499 16.8926 20.4433 21.8496 13.5644 22.4414C14.9882 26.8008 19.7108 30 25.3124 30C27.5507 30 29.6425 29.4902 31.4472 28.5996C31.8866 28.834 32.3847 29.0625 32.9237 29.2676C33.996 29.6719 35.2851 30 36.5624 30C36.9667 30 37.33 29.7363 37.453 29.3496C37.5761 28.9629 37.4413 28.541 37.1132 28.3008L37.1015 28.2891C37.0898 28.2773 37.0663 28.2656 37.037 28.2422C36.9784 28.1953 36.8905 28.125 36.7851 28.0254C36.5741 27.832 36.287 27.5508 36.0058 27.1875C35.6835 26.7773 35.3788 26.2852 35.1737 25.7402C36.6327 24.041 37.494 21.9492 37.494 19.6816C37.494 14.2441 32.5194 9.78516 26.2089 9.39844C26.2323 9.69727 26.244 10.002 26.244 10.3066L26.2499 10.3125Z" fill="#3B6C8F" />
                    </g>
                    <defs>
                        <clipPath id="clip0_7_1293">
                            <path d="M0 0H37.5V30H0V0Z" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Sessions interactives",
            description:
                "Participez à des discussions en temps réel avec artistes et conservateurs.",
        },
    ];

    return (
        <section className="w-full py-24">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center mb-16">
                    <h2 className="text-3xl text-center font-normal font-garamond leading-9 mb-6">
                        Une nouvelle dimension artistique
                    </h2>
                    <p className="text-base text-center text-gray-600 font-normal font-garamond leading-4">
                        Notre technologie de pointe donne vie à l’art comme jamais auparavant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto px-6">
                    {experienceCards.map((card) => (
                        <Card
                            key={card.id}
                            className="rounded-2xl border border-solid border-gray-100"
                        >
                            <CardContent className="p-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center justify-start h-[30px]">
                                        {card.icon}

                                    </div>
                                    <h3 className="text-xl font-normal [font-family:'Cormorant_Garamond',Helvetica] text-black leading-5">
                                        {card.title}
                                    </h3>
                                    <p className="text-base font-normal [font-family:'Cormorant_Garamond',Helvetica] text-gray-600 leading-4">
                                        {card.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;