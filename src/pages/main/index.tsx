import { useState } from "react";
import Gnb from "../../components/Gnb";
import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";
import RecommendedTourSection from "./RecommendedTourSection";

export default function Main() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <main className={`w-full bg-[#FAF9F8] pt-16 md:pt-0 transition-all duration-300 ${isSidebarOpen ? 'md:pl-72' : 'md:pl-0'}`}>
            <Gnb isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
            <HeroSection />
            <RecommendedSection />
            <RecommendedTourSection />
            <RecommendedCountrySection />
        </main>
    );
}
