interface CourseDetailPanelProps {
    course: {
        img_src: string;
        img_alt: string;
        title: string;
        location?: string;
        cost?: string;
    };
    onClose: () => void;
}

export default function CourseDetailPanel({ course, onClose }: CourseDetailPanelProps) {
    return (
        <div className="fixed inset-0 z-50 flex">
            {/* 배경 오버레이 */}
            <div 
                className="flex-1 bg-black/20"
                onClick={onClose}
            />
            
            {/* 슬라이드 패널 */}
            <div className="w-full sm:w-96 bg-white overflow-y-auto animate-slideInRight">
                {/* 상단 닫기 버튼 */}
                <div className="flex items-center justify-between p-4 sticky top-0 bg-white border-b">
                    <button 
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ←
                    </button>
                    <button className="text-2xl">⋮</button>
                </div>

                {/* 이미지 */}
                <div className="relative">
                    <img 
                        src={course.img_src} 
                        alt={course.img_alt}
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* 위치 정보 */}
                <div className="p-4 flex items-start gap-3 border-b bg-blue-50">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 7.5C17.5 12.5 10 17.5 10 17.5S2.5 12.5 2.5 7.5C2.5 4.1875 5.1875 2.5 10 2.5C14.8125 2.5 17.5 4.1875 17.5 7.5Z" stroke="#6B5B95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                        <p className="text-sm text-[#938F8D]">Korea, Seoul 273 Ttukseom-ro, Seongdong</p>
                    </div>
                </div>

                {/* 호스트 정보 */}
                <div className="p-4 border-b">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <span className="font-semibold">Host by Lukas</span>
                    </div>
                </div>

                {/* 제목 */}
                <div className="p-4 border-b">
                    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                </div>

                {/* Overview */}
                <div className="p-4 border-b">
                    <h3 className="font-semibold mb-2">[Overview]</h3>
                    <p className="text-sm text-gray-600 mb-2">
                        "Escape the city buzz and step into the green sanctuary of Seoul Forest Park..."
                    </p>
                    <button className="text-[#D95500] font-semibold text-sm">view all ♥</button>
                </div>

                {/* 코스 정보 */}
                <div className="p-4 border-b space-y-3">
                    <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2V7H7V2M13 9H18V13M3 11H8V18M6 18H14" stroke="#D95500" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-sm">Private SUV (Up to 6)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" stroke="#D95500" strokeWidth="1.5" />
                        </svg>
                        <span className="text-sm">German, English, Korean</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" stroke="#D95500" strokeWidth="1.5" />
                        </svg>
                        <span className="text-sm">Complimentary Pro-Snapshots</span>
                    </div>
                </div>

                {/* 평점 */}
                <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                        <span className="text-[#D95500] font-semibold">★ 4.8</span>
                        <span className="text-gray-500">/5</span>
                        <span className="text-red-500 font-semibold">(3 Reviews)</span>
                    </div>
                </div>

                {/* 리뷰 섹션 */}
                <div className="p-4 border-b">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full" />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold">Yerim Lee</h4>
                                    <p className="text-xs text-gray-500">Korea</p>
                                </div>
                                <button className="text-gray-400">⋮</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-32 mb-3" />
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">📅 09-Jan-2026</span>
                        <span className="text-[#D95500] font-semibold">★ 5.0 /5</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{course.title}</h4>
                    <p className="text-xs text-gray-600">
                        "Lukas was incredible! I was worried about my large dog fitting in the car..."
                    </p>
                    <button className="text-[#D95500] font-semibold text-xs mt-2">view all ♥</button>
                </div>

                {/* 버튼 섹션 */}
                <div className="p-4 flex gap-3 sticky bottom-0 bg-white border-t">
                    <button className="flex-1 border-2 border-[#D95500] text-[#D95500] font-semibold py-3 rounded-lg">
                        Add Course
                    </button>
                    <button className="flex-1 bg-[#D95500] text-white font-semibold py-3 rounded-lg">
                        Next
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slideInRight {
                    animation: slideInRight 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}