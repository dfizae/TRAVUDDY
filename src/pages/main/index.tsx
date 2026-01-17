import HeroSection from "./HeroSection";
import RecommendedCountrySection from "./RecommendedCountrySection";
import RecommendedSection from "./RecommendedSection";

export default function Main() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center">
            <main className="w-full max-w-90 min-h-screen bg-[#FAF9F8] shadow-2xl">
                <HeroSection />
                <RecommendedSection />
                <RecommendedCountrySection />
            </main>
        </div>
    );
};