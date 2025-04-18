import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/admin/Sidebar";
import StatsSection from "../components/admin/StatsSection";
import ManageUsersSection from "../components/admin/ManageUsersSection";
import ValidateArtistsSection from "../components/admin/ValidateArtistsSection";
import ValidateEventsSection from "../components/admin/ValidateEventsSection";
import ManageEventsSection from "../components/admin/ManageEventsSection";

export default function AdminDash() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <div className="flex-1 ml-64">
                <Sidebar />

                <main className="flex-1 ">
                    <StatsSection />
                    <ManageUsersSection />
                    <ValidateArtistsSection />
                    <ValidateEventsSection />
                    <ManageEventsSection />
                </main>
            </div>

            <Footer />
        </div>
    );
}