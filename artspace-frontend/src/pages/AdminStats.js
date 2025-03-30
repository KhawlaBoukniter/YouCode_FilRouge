import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/admin/Sidebar";
import StatCards from "../components/admin/stats/StatCards";
import TopEventsTable from "../components/admin/stats/TopEventsTable";
import ChartSection from "../components/admin/stats/ChartSection";

export default function AdminStats() {
    return (
        <div className="flex flex-col ml-72 pt-10 min-h-screen bg-[#f8f7f4]">
            <div className="flex flex-1 w-full">
                <Sidebar />

                <main className="flex-1 pl-16 p-8 space-y-10">
                    <TopEventsTable />
                    <ChartSection />
                </main>
            </div>

            <Footer />
        </div>
    );
}