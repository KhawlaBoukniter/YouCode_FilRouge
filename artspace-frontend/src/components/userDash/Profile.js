import React from "react";
import { MailIcon, MapPinIcon, LogOutIcon, PenSquareIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Button from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Profile() {
    const userProfile = {
        name: "Sophie Laurent",
        occupation: "Art Enthusiast & Collector",
        email: "sophie@artspace.com",
        location: "Paris, France",
        avatar: "https://c.animaapp.com/m9y8ql4xx8o8m6/img/img.png",
    };

    return (
        <Card className="w-full rounded-2xl shadow-md">
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative">
                        <Avatar className="h-28 w-28 md:h-32 md:w-32 border-4 border-white shadow-md">
                            <AvatarImage src={userProfile.avatar} alt="Profile" />
                            <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#3a6b8f] rounded-full flex items-center justify-center shadow-md">
                            <img
                                src="https://c.animaapp.com/m9y8ql4xx8o8m6/img/frame-4.svg"
                                alt="edit"
                                className="w-4 h-4"
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h2 className="text-2xl font-playfair text-gray-800">{userProfile.name}</h2>
                                <p className="text-gray-500 font-playfair mt-2">{userProfile.occupation}</p>

                                <div className="mt-4 flex flex-col sm:flex-row gap-4 text-gray-600 font-playfair">
                                    <div className="flex items-center gap-2">
                                        <MailIcon className="h-4 w-4" />
                                        <span>{userProfile.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPinIcon className="h-4 w-4" />
                                        <span>{userProfile.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    variant="outline"
                                    className="h-10 bg-gray-100 rounded-lg text-gray-700"
                                >
                                    <PenSquareIcon className="w-4 h-4 mr-2" />
                                    Modifier
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-10 bg-red-50 text-red-600 rounded-lg"
                                >
                                    <LogOutIcon className="w-4 h-4 mr-2" />
                                    Déconnexion
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}