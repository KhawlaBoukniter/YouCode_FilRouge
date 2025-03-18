import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/admin/Sidebar";
import TopEventsTable from "../components/admin/TopEventsTable";
import ChartSection from "../components/admin/ChartSection";

export default function AdminStats() {
    return (
        <div className="flex flex-col ml-72 pt-10 min-h-screen">
            <div className="flex flex-1 w-full">
                <Sidebar />

                <main className="flex-1 pl-16 p-8 pb-20 space-y-10">
                    <TopEventsTable />
                    <ChartSection />
                </main>
            </div>

            <Footer />
        </div>
    );
}