import { useState } from "react";
import CourseLayout from "./Layouts/CourseLayout";
import ReviewLayout from "./Layouts/ReviewLayout";

export default function InformationSection() {
    const [isLiked, setIsLiked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(!isLiked);
    };
    
    const handleToggleClick = (section: string) => {
        if (section === "course") {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }

    return(
        <>
            {/* toggle 버튼 섹션 */}
            <div className="flex gap-3 items-center justify-center px-4 py-3 border-t border-b border-[#E6E2DF] mb-5">
                <button className="flex justify-center border-b px-12" onClick={() => handleToggleClick("course")}>
                    <i></i>
                    <span className="text-xs pb-0.5 font-semibold">3·Course</span>
                </button>
                <button className="flex justify-center border-b px-12" onClick={() => handleToggleClick("review")}>
                    <i></i>
                    <span className="text-xs pb-0.5 font-semibold">4·Review</span>
                </button>
            </div>
            <div className="px-4 -mt-22 relative z-20 mb-5">
                <div className="rounded-2xl p-4 relative">
                    {/* 하트 버튼 */}
                    <div 
                        onClick={toggleLike}
                        className="absolute top-4 left-4 z-30 cursor-pointer p-2"
                    >
                        <img 
                            src={isLiked 
                                ? "../../../../public/images/icons/ico-heart.svg"
                                : "../../../../public/images/icons/ico-emptyheart.svg"
                            } 
                            alt="좋아요" 
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            </div>
            {isClicked ? <CourseLayout /> : <ReviewLayout />}
        </>
    );
}