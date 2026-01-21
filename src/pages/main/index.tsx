import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";

export default function Main() {
    return (
            <main className="w-full">
                <HeroSection />
                <RecommendedSection />
                <RecommendedCountrySection />
            </main>
    );
};