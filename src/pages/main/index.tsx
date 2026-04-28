import Gnb from "../../components/Gnb";
import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";
import RecommendedTourSection from "./RecommendedTourSection";

interface MainProps {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
}

export default function Main({ isSidebarOpen, onToggleSidebar }: MainProps) {
    return (
        <main className={`w-full bg-[#FAF9F8] pt-16 md:pt-0 transition-all duration-300 ${isSidebarOpen ? 'md:pl-72' : 'md:pl-0'}`}>
            <Gnb isSidebarOpen={isSidebarOpen} onToggleSidebar={onToggleSidebar} />
            <HeroSection />
            <RecommendedSection />
            <RecommendedTourSection />
            <RecommendedCountrySection />
        </main>
    );
}
