import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/artistDash/Header";
import Stats from "../components/artistDash/Stats";
import RecentArtworks from "../components/artistDash/RecentArtworks";
import UpcomingEvents from "../components/artistDash/UpcomingEvents";

export default function ArtistDash() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-12">
                    <Header />
                    <Stats />
                    <RecentArtworks />
                    <UpcomingEvents />
                </div>
            </main>
            <Footer />
        </div>
    );
}