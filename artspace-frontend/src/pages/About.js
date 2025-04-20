import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/about/Section";
import MissionSection from "../components/about/MissionSection";
import ExperienceSection from "../components/about/ExperienceSection";
import Footer from "../components/Footer";

export default function About() {
    return (
        <main className="flex flex-col w-full">
            <Navbar />
            <Section />
            <MissionSection />
            <ExperienceSection />
            <Footer />
        </main>
    );
}