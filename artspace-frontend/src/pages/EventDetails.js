import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/event/Header";
import Description from "../components/event/Description";
import Tickets from "../components/event/Tickets";

export default function EventDetails() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <Header />
                    <Description />
                    <Tickets />
                </div>
            </main>

            <Footer />
        </div>
    );
}