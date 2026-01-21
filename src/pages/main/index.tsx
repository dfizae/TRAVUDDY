import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";

export default function Main() {
    return (
            <main className="w- bg-[#FAF9F8]">
                <HeroSection />
                <RecommendedSection />
                <RecommendedCountrySection />
            </main>
    );
};