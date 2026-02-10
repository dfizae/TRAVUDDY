import { useState } from "react";
import { DataCourse } from "./data/DataCourse";

export default function CourseLayout() {
    const [likedByIndex, setLikedByIndex] = useState<Record<number, boolean>>({});

    const toggleLike = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setLikedByIndex((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            <ul className="px-4">
                {DataCourse.map((course, index) => (
                    <li key={index} className="mb-4 rounded-lg bg-white">
                        <div className="relative">
                            <img src={course.img_src} alt={course.img_alt} className="w-full bg-cover bg-center bg-no-repeat"/>
                            {/* 하트 버튼 */}
                            <div
                                onClick={toggleLike(index)}
                                className="absolute top-2 left-2 z-30 cursor-pointer p-2"
                            >
                                <img
                                    src={likedByIndex[index]
                                        ? "../../../../public/images/icons/ico-heart.svg"
                                        : "../../../../public/images/icons/ico-emptyheart.svg"
                                    }
                                    alt="좋아요"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 pt-2 pb-2.5 px-2">
                            <div className="flex justify-between">
                                <span className="flex items-center text-xs text-[#938F8D] gap-1.5 mb-0.5">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_566_4713)">
                                            <path d="M13.1431 5.71427C13.1431 9.14284 8.00028 13.1428 8.00028 13.1428C8.00028 13.1428 2.85742 9.14284 2.85742 5.71427C2.85742 2.91313 5.19914 0.571411 8.00028 0.571411C10.8014 0.571411 13.1431 2.91313 13.1431 5.71427Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.99944 7.42869C8.94622 7.42869 9.71373 6.66119 9.71373 5.71441C9.71373 4.76763 8.94622 4.00012 7.99944 4.00012C7.05266 4.00012 6.28516 4.76763 6.28516 5.71441C6.28516 6.66119 7.05266 7.42869 7.99944 7.42869Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.6596 11.4286H13.7141L15.4284 15.4286H0.571289L2.28557 11.4286H3.34009" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_566_4713">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    {course.location}
                                </span>
                                <span className="text-xs text-[#938F8D] flex items-center gap-1.5 mb-0.5">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 4V8H12" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.99967 14.6667C11.6815 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6815 1.33337 7.99967 1.33337C4.31777 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31777 14.6667 7.99967 14.6667Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {course.time}
                                </span>
                            </div>
                            <h3 className="text-base font-semibold leading-5 text-[#1A1A1A]">{course.title}</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-base font-semibold leading-5 text-[#D95500]">{course.cost}
                                </span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18" height="18" rx="9" fill="#938F8D" />
                                    <path d="M8.12305 14.377V6.95312H9.87305V14.377H8.12305ZM9.01172 5.90039C8.46484 5.90039 8 5.47656 8 4.94336C8 4.42383 8.46484 4 9.01172 4C9.57227 4 10.0234 4.42383 10.0234 4.94336C10.0234 5.47656 9.57227 5.90039 9.01172 5.90039Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}