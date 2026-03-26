import { useState } from "react";
import CourseLayout from "./Layouts/CourseLayout";
import ReviewLayout from "./Layouts/ReviewLayout";

export default function InformationSection() {
    const [isClicked, setIsClicked] = useState(true);

    const handleToggleClick = (section: string) => {
        if (section === "course") {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }

    return (
        <>
            {/* toggle 버튼 섹션 */}
            <div className="flex gap-3 items-center justify-center px-4 py-5 mb-5">
                <button className="flex flex-col gap-1 items-center border-b px-12" onClick={() => handleToggleClick("course")}>
                    <img src={isClicked ? "/images/icons/ico-course_active.svg" : "/images/icons/ico-course_default.svg"} alt="Course" />
                    <span className={`text-xs pb-0.5 font-semibold ${isClicked ? "text-black-600" : "text-gray-500"}`}>3·Course</span>
                </button>
                <button className="flex flex-col gap-1 items-center border-b px-12" onClick={() => handleToggleClick("review")}>
                    <img src={isClicked ? "/images/icons/ico-review_default.svg" : "/images/icons/ico-review_active.svg"} alt="Review" />
                    <span className={`text-xs pb-0.5 font-semibold ${!isClicked ? "text-black-600" : "text-gray-500"}`}>4·Review</span>
                </button>
            </div>
            {isClicked ? <CourseLayout /> : <ReviewLayout />}
        </>
    );
}