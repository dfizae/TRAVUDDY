import Gnb from "../../components/Gnb";
import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";
import RecommendedTourSection from "./RecommendedTourSection";

export default function Main() {
    return (
            <main className="w-full bg-[#FAF9F8] pt-16 md:pl-72">
                <Gnb />
                <HeroSection />
                <RecommendedSection />
                <RecommendedTourSection />
                <RecommendedCountrySection />
            </main>
    );
};