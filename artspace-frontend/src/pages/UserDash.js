import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/userDash/Profile";
import Stats from "../components/userDash/Stats";
import FavoriteArtworks from "../components/userDash/FavoriteArtworks";
import PurchaseHistory from "../components/userDash/PurchaseHistory";

export default function UserDash() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <Profile />
                    <Stats />
                    <FavoriteArtworks />
                    <PurchaseHistory />
                </div>
            </main>
            <Footer />
        </div>
    );
}