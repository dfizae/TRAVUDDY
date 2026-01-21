import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";

export default function Main() {
    return (
            <main className="w-full bg-[#FAF9F8] shadow-2xl">
                <HeroSection />
                <RecommendedSection />
                <RecommendedCountrySection />
            </main>
    );
};