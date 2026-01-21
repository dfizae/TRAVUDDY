import ProfileSection from "./ProfileSection";
import InformationSection from "./InformationSection";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function GuideInformation(){
    const { name } = useParams();

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
                    <ProfileSection name={name}/>
                    <InformationSection name={name}/>
                </div>
            </motion.div>
            
        </>
    );
}