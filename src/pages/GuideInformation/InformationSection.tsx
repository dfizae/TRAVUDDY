import { useState } from "react";
import CourseLayout from "./Layouts/CourseLayout";
import ReviewLayout from "./Layouts/ReviewLayout";

export default function InformationSection() {
    const [isClicked, setIsClicked] = useState(false);

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
            <div className="flex gap-3 items-center justify-center px-4 py-3 border-t border-b border-[#E6E2DF] mb-5">
                <button className="flex flex-col gap-1 items-center border-b px-12" onClick={() => handleToggleClick("course")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8929 23.0357C18.047 23.0357 23.0357 18.047 23.0357 11.8929C23.0357 5.73883 18.047 0.75 11.8929 0.75C5.73883 0.75 0.75 5.73883 0.75 11.8929C0.75 18.047 5.73883 23.0357 11.8929 23.0357Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.60742 16.1785H4.60742C5.40307 16.1785 6.16614 15.8624 6.72875 15.2998C7.29136 14.7372 7.60742 13.9741 7.60742 13.1785V10.607C7.60742 9.81137 7.92348 9.04831 8.4861 8.4857C9.04871 7.92309 9.81177 7.60702 10.6074 7.60702C11.4031 7.60702 12.1661 7.29094 12.7287 6.72833C13.2914 6.16572 13.6074 5.40267 13.6074 4.60702V0.869873" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.036 11.7215C22.1777 11.2761 21.2259 11.0411 20.2589 11.0358H16.6074C15.8118 11.0358 15.0487 11.3518 14.4861 11.9144C13.9235 12.4771 13.6074 13.2401 13.6074 14.0358C13.6074 14.8314 13.9235 15.5945 14.4861 16.1571C15.0487 16.7197 15.8118 17.0358 16.6074 17.0358C17.1757 17.0358 17.7208 17.2615 18.1227 17.6634C18.5245 18.0652 18.7503 18.6103 18.7503 19.1786V20.6701" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="text-xs pb-0.5 font-semibold">3·Course</span>
                </button>
                <button className="flex flex-col gap-1 items-center border-b px-12" onClick={() => handleToggleClick("review")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7892 0.750002C9.7924 0.750624 7.83311 1.29286 6.12006 2.31895C4.40703 3.34506 3.00438 4.81658 2.06152 6.57681C1.11866 8.33704 0.67091 10.3201 0.765946 12.3146C0.860981 14.3092 1.49525 16.2407 2.6012 17.9032L0.75 22.8285L6.94895 21.7076C8.44165 22.437 10.0797 22.8201 11.7411 22.8284C13.4024 22.8366 15.0442 22.4697 16.5441 21.7551C18.0439 21.0405 19.3632 19.9965 20.4033 18.7011C21.4435 17.4057 22.1781 15.8922 22.5518 14.2734C22.9257 12.6547 22.9294 10.9724 22.5626 9.352C22.1957 7.73161 21.468 6.21491 20.4334 4.91497C19.3989 3.61501 18.0842 2.56535 16.5875 1.8442C15.0908 1.12305 13.4506 0.749021 11.7892 0.750002Z" stroke="#938F8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.13477 13.5033C6.99191 16.589 10.4205 18.4747 13.5062 17.6176C15.3919 16.9319 16.9348 15.389 17.4491 13.5033" stroke="#938F8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.93541 9.21762C7.69872 9.21762 7.50684 9.02574 7.50684 8.78905C7.50684 8.55235 7.69872 8.36047 7.93541 8.36047" stroke="#938F8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.93555 9.21762C8.17224 9.21762 8.36412 9.02574 8.36412 8.78905C8.36412 8.55235 8.17224 8.36047 7.93555 8.36047" stroke="#938F8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.6493 9.21762C15.4126 9.21762 15.2207 9.02574 15.2207 8.78905C15.2207 8.55235 15.4126 8.36047 15.6493 8.36047" stroke="#938F8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.6494 9.21762C15.8861 9.21762 16.078 9.02574 16.078 8.78905C16.078 8.55235 15.8861 8.36047 15.6494 8.36047" stroke="#938F8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="text-xs pb-0.5 font-semibold">4·Review</span>
                </button>
            </div>
            {isClicked ? <CourseLayout /> : <ReviewLayout />}
        </>
    );
}