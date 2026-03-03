import { useState } from "react";

export default function ProfileSection({data}: {data: {name: string; location: string; star_rate: number; hashtag_1: string; hashtag_2: string; hashtag_3: string; hashtag_4: string; hashtag_5: string; hashtag_6: string;}}){
    const [isLiked, setIsLiked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(!isLiked);
    };
    
    return(
        <>
            {/* 배경 이미지 */}
            <div className="w-full bg-[url('/images/pics/GuideBackground.svg')] bg-cover bg-center bg-no-repeat h-70"></div>
            
            {/* 프로필 카드 */}
            <div className="px-4 -mt-22 relative right-4 z-20 mb-5">
                <div className="rounded-2xl p-4 pb-0 relative">
                    {/* 하트 버튼 */}
                    <div 
                        onClick={toggleLike}
                        className="absolute top-4 left-4 z-30 cursor-pointer p-2"
                    >
                        <img 
                            src={isLiked 
                                ? "/images/icons/ico-heart.svg"
                                : "/images/icons/ico-emptyheart.svg"
                            } 
                            alt="좋아요" 
                            className="w-6 h-6"
                        />
                    </div>
                    
                    <div className="flex gap-4">
                        {/* 프로필 사진 */}
                        <img 
                            src="/images/pics/RecommendedLukas.svg" 
                            alt={data.name} 
                            className="rounded-2xl object-cover w-39 h-39 shrink-0" 
                        />
                        
                        {/* 프로필 정보 */}
                        <div className="flex flex-col justify-end gap-2 grow">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold text-base">{data.name}</p>
                                <img src="/images/icons/ico-certified.svg" alt="공식계정 인증마크" className="w-4 h-4"/>
                            </div>
                        
                            <p className="flex items-center gap-2 text-xs text-[#938F8D]">
                                <img src="/images/icons/ico-mapWhite.svg" alt="위치" className="w-3 h-3"/>
                                {data.location}
                            </p>
                        
                            <p className="flex items-center gap-1 text-sm text-[#D95500]">
                                <img src="/images/icons/ico-stars.svg" alt="별점" className="w-19 h-4"/> 
                                {data.star_rate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 해시태그 */}
            <div className="px-4 pb-6">
                <div className="flex gap-2 overflow-x-auto scrollbar-hide-thin">
                    {data.hashtag_1 && (
                        <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center">
                            <span className="text-[#938F8D] text-xs font-semibold">{data.hashtag_1}</span>
                        </div>
                    )}
                    {data.hashtag_2 && (
                        <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center">
                            <span className="text-[#938F8D] text-xs font-semibold">{data.hashtag_2}</span>
                        </div>
                    )}
                    {data.hashtag_3 && (
                        <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center">
                            <span className="text-[#938F8D] text-xs font-semibold">{data.hashtag_3}</span>
                        </div>
                    )}
                    {data.hashtag_4 && (
                        <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center">
                            <span className="text-[#938F8D] text-xs font-semibold">{data.hashtag_4}</span>
                        </div>
                    )}
                    {data.hashtag_5 && (
                        <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center">
                            <span className="text-[#938F8D] text-xs font-semibold">{data.hashtag_5}</span>
                        </div>
                    )}
                    {data.hashtag_6 && (
                        <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center">
                            <span className="text-[#938F8D] text-xs font-semibold">{data.hashtag_6}</span>
                        </div>
                    )}
                </div>
            </div>
            
            {/* 가이드 소개글, view all 토글 버튼 작성 */}
            <div className="mb-2 px-4">
                <div className="relative">
                    <p
                        className="text-sm text-[#403C3A] overflow-hidden transition-[max-height] duration-300"
                        style={{
                            lineHeight: "1.4",
                            maxHeight: isExpanded ? "1000px" : "4em",
                        }}
                    >
                        "Hi, I'm Lukas! 🐾 I’ve lived in this city for 5 years with my Golden Retriever, Mango. I know all the best pet-friendly cafes and hidden trails that you won't find on Google Maps. Whether you want a chill walk with your dog or a local food tour, I can customize the perfect route just for you. As a Travuddy Verified host, I promise a safe and authentic local experience. Let's make some memories together!"
                    </p>
                    {!isExpanded && (
                        <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-linear-to-t from-white to-transparent" />
                    )}
                </div>
                <button
                    type="button"
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="mt-2 flex items-center gap-1 text-sm font-semibold text-[#D95500] cursor-pointer"
                >
                    {isExpanded ? "close all" : "view all"}
                    <span className="text-xs">{isExpanded ? "▲" : "▼"}</span>
                </button>
            </div>

            <hr className="border-0 border-t border-[#E6E2DF] mt-6 mx-4" />

            {/* 가이드의 차량, 사용 언어, 사진 스킬 작성 */}
            
            <div className="flex flex-col gap-4 justify-center py-3.5">
                <p className="flex gap-4 pl-4">
                    <img src="/images/icons/ico-car.svg" alt="차량" />
                    <span className="font-regular text-sm">Private SUV (Up to 6)</span>
                </p>
                <p className="flex gap-4 pl-4">
                    <img src="/images/icons/ico-language.svg" alt="언어" />
                    <span className="font-regular text-sm">German, English, Korean</span>
                </p>
                <p className="flex gap-4 pl-4">
                    <img src="/images/icons/ico-camera.svg" alt="사진 스킬" />
                    <span className="font-regular text-sm">Complimentary Pro-Snapshots</span>
                </p>
            </div>  

            <hr className="border-0 border-t border-[#E6E2DF] mb-2.5 mx-4" />

        </>
    );
}