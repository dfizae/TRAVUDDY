import ProfileSection from "./ProfileSection";
import InformationSection from "./InformationSection";
import { useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function GuideInformation(){
    const { name, location, star_rate, hashtag_1, hashtag_2, hashtag_3, hashtag_4, hashtag_5, hashtag_6 } = useParams();
    const { state } = useLocation() as {
        state?: {
            name?: string;
            location?: string;
            star_rate?: number;
            hashtag_1?: string;
            hashtag_2?: string;
            hashtag_3?: string;
            hashtag_4?: string;
            hashtag_5?: string;
            hashtag_6?: string;
        };
    };

    const parsedStarRate = star_rate ? Number(star_rate) : 0;
    const safeStarRate = Number.isFinite(parsedStarRate) ? parsedStarRate : 0;
    const data = {
        name: state?.name ?? name ?? "",
        location: state?.location ?? location ?? "",
        star_rate: state?.star_rate ?? safeStarRate,
        hashtag_1: state?.hashtag_1 ?? hashtag_1 ?? "",
        hashtag_2: state?.hashtag_2 ?? hashtag_2 ?? "",
        hashtag_3: state?.hashtag_3 ?? hashtag_3 ?? "",
        hashtag_4: state?.hashtag_4 ?? hashtag_4 ?? "",
        hashtag_5: state?.hashtag_5 ?? hashtag_5 ?? "",
        hashtag_6: state?.hashtag_6 ?? hashtag_6 ?? "",
    };

    return(
        <>
            <motion.div
                // 1. 초기 상태: 오른쪽 밖 (100%)
                initial={{ x: "100%" }} 
                // 2. 애니메이션 상태: 제자리 (0)
                animate={{ x: 0 }} 
                // 3. 나갈 때 상태: 다시 오른쪽 밖으로
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-white z-50 overflow-y-auto"
            >
                <div className="w-full">
                    <ProfileSection data={data}/>
                    <InformationSection/>
                </div>
            </motion.div>
            
        </>
    );
}