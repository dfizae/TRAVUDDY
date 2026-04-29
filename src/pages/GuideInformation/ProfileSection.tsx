import { useState } from "react";
import Rate from "../../components/Rate";

const HashtagBadge = ({ tag }: { tag: string }) => (
    <div className="border-stone-300 border-2 border-solid rounded-full px-3 py-1 flex items-center shrink-0">
        <span className="text-[#938F8D] text-xs font-semibold">{tag}</span>
    </div>
);

export default function ProfileSection({ data }: { data: { name: string; location: string; star_rate: number; hashtag_1: string; hashtag_2: string; hashtag_3: string; hashtag_4: string; hashtag_5: string; hashtag_6: string; } }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(!isLiked);
    };

    const hashtags = [data.hashtag_1, data.hashtag_2, data.hashtag_3, data.hashtag_4, data.hashtag_5, data.hashtag_6].filter(Boolean);

    return (
        <>
            {/* 배경 이미지 */}
            <div className="w-full h-70 md:h-96 overflow-hidden">
                <img
                    src="/images/pics/GuideBackground.svg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 프로필 카드 */}
            <div className="md:px-35">
                <div className="px-4 -mt-22 relative right-4 z-20 mb-5 md:right-0 md:mt-0">
                    <div className="rounded-2xl p-4 md:px-21 pb-0 relative md:pb-5">
    
    
                        {/* 데스크톱: 프로필 정보(좌) + 해시태그(우) 가로 배치 */}
                        <div className="relative md:flex md:items-center md:justify-between">
                            <div className="flex gap-4">
                                {/* 프로필 사진 */}
                                <img
                                    src="/images/pics/RecommendedLukas.svg"
                                    alt={data.name}
                                    className="rounded-2xl object-cover w-39 h-39 shrink-0"
                                />
    
                                {/* 프로필 정보 */}
                                <div className="flex flex-col justify-end md:justify-center gap-2 grow">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-base">{data.name}</p>
                                        <img src="/images/icons/ico-certified.svg" alt="공식계정 인증마크" className="w-4 h-4" />
                                    </div>
    
                                    <p className="flex items-center gap-2 text-xs text-[#938F8D]">
                                        <img src="/images/icons/ico-mapWhite.svg" alt="위치" className="w-3 h-3" />
                                        {data.location}
                                    </p>
    
                                    <Rate rateNum={data.star_rate} />
                                </div>
                                
                                {/* 하트 버튼 */}
                                <div
                                    onClick={toggleLike}
                                    className="absolute top-2.5 left-2.5 z-30 cursor-pointer"
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
                            </div>
    
                            {/* 해시태그 - 데스크톱에서만 우측 표시 */}
                            {hashtags.length > 0 && (
                                <div className="hidden md:flex gap-2 flex-wrap justify-center max-w-xs">
                                    {hashtags.map((tag, i) => (
                                        <HashtagBadge key={i} tag={tag} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
    
                {/* 해시태그 - 모바일에서만 표시 */}
                <div className="px-4 pb-6 md:hidden">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide-thin">
                        {hashtags.map((tag, i) => (
                            <HashtagBadge key={i} tag={tag} />
                        ))}
                    </div>
                </div>
    
                {/* 가이드 소개글, view all 토글 버튼 */}
                <div className="mb-2 px-4">
                    <div className="relative">
                        <p
                            className="text-sm text-[#403C3A] overflow-hidden transition-[max-height] duration-300"
                            style={{
                                lineHeight: "1.4",
                                maxHeight: isExpanded ? "1000px" : "4em",
                            }}
                        >
                            "Hi, I’m Lukas! 🐾 I’ve lived in this city for 5 years with my Golden Retriever, Mango. I know all the best pet-friendly cafes and hidden trails that you won’t find on Google Maps. Whether you want a chill walk with your dog or a local food tour, I can customize the perfect route just for you. As a Travuddy Verified host, I promise a safe and authentic local experience. Let’s make some memories together!"
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
    
                <hr className="border-0 border-t border-[#E6E2DF] mt-6" />
    
                {/* 가이드의 차량, 사용 언어, 사진 스킬 - 데스크톱에서 3열 가로 배치 */}
                <div className="flex flex-col gap-4 justify-center py-3.5 md:flex-row md:justify-between md:gap-0 md:px-4 md:py-3.5">
                    <p className="flex md:flex-col gap-4 pl-4 md:pl-0 md:items-center">
                        <img src="/images/icons/ico-car.svg" alt="차량" className="w-12 h-12" />
                        <span className="font-regular text-sm">Private SUV (Up to 6)</span>
                    </p>
                    <p className="flex md:flex-col gap-4 pl-4 md:pl-0 md:items-center">
                        <img src="/images/icons/ico-languageBlack.svg" alt="언어" className="w-12 h-12" />
                        <span className="font-regular text-sm">German, English, Korean</span>
                    </p>
                    <p className="flex md:flex-col gap-4 pl-4 md:pl-0 md:items-center">
                        <img src="/images/icons/ico-camera.svg" alt="사진 스킬" className="w-12 h-12" />
                        <span className="font-regular text-sm">Complimentary Pro-Snapshots</span>
                    </p>
                </div>
    
                <hr className="border-0 border-t border-[#E6E2DF] mb-2.5" />
            </div>
        </>
    );
}