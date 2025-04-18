import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsSection from "../components/admin/StatsSection";
import ManageUsersSection from "../components/admin/ManageUsersSection";
import ValidateArtistsSection from "../components/admin/ValidateArtistsSection";
import ValidateEventsSection from "../components/admin/ValidateEventsSection";
import ManageEventsSection from "../components/admin/ManageEventsSection";

export default function AdminDashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
            <Navbar />

            <main className="flex-1 w-full">
                <StatsSection />
                <ManageUsersSection />
                <ValidateArtistsSection />
                <ValidateEventsSection />
                <ManageEventsSection />
            </main>

            <Footer />
        </div>
    );
}