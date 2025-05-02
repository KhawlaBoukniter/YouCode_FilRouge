import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/artistDash/Header";
import Stats from "../components/artistDash/Stats";
import RecentArtworks from "../components/artistDash/RecentArtworks";
import UpcomingEvents from "../components/artistDash/UpcomingEvents";
import useAuth from "../useAuth";
import ChooseRoomStyle from "../components/ChooseRoomStyle";

export default function ArtistDash() {
    const auth = useAuth();

    if (!auth || !auth.user) return <p>Chargement...</p>;

    const { user } = auth;

    console.log(user);


    if (!user) return <p>Chargement</p>;

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-12">
                    <Header user={user} artist={user?.artist} />
                    <Stats user={user} />
                    <RecentArtworks user={user} />
                    <UpcomingEvents user={user} />
                    <ChooseRoomStyle artist={user.artist} />
                </div>
            </main>
            <Footer />
        </div>
    );
}