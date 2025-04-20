import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/userDash/Profile";
import Stats from "../components/userDash/Stats";
import FavoriteArtworks from "../components/userDash/FavoriteArtworks";
import PurchaseHistory from "../components/userDash/PurchaseHistory";
import useAuth from "../useAuth";

export default function UserDash() {
    const auth = useAuth();

    if (!auth || !auth.user) return <p>Chargement...</p>;

    const { user } = auth;

    console.log(user);

    if (!user) return <p>Chargement...</p>;

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-12">

                <div className="max-w-[1280px] mx-auto space-y-8">
                    <Profile user={user} />
                    <Stats user={user} />
                    <FavoriteArtworks user={user} />
                    <PurchaseHistory user={user} />
                </div>
            </main>
            <Footer />
        </div>
    );
}