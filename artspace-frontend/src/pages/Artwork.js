import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/artwork/Header";
import Description from "../components/artwork/Description";
import Comments from "../components/artwork/Comments";
import AddCommentForm from "../components/artwork/AddCommentForm";

export default function Artwork() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />
            <main className="flex-1 w-full py-24 px-5 md:px-20">
                <div className="max-w-[1280px] mx-auto space-y-8">
                    <Header />
                    <Description />
                    <Comments />
                    <AddCommentForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}