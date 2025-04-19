import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/admin/Sidebar";
import TopEventsTable from "../components/admin/TopEventsTable";
import ChartSection from "../components/admin/ChartSection";
import StatCards from "../components/admin/stats/StatCards";

export default function AdminStats() {
    return (
        <div className="flex flex-col md:ml-64 ml-4">
            <div className="flex-1">
                <Sidebar />

                <main className="flex-1 pl-16 p-8 md:py-20 py-10 space-y-10">
                    <TopEventsTable />
                    <ChartSection />
                </main>
            </div>

            <Footer />
        </div>
    );
}