import { useState } from "react"; // useState 추가
import { Link } from "react-router-dom";
import Rate from "../../../components/Rate";

export default function RecommendedSection() {
    // 1. 데이터를 state로 관리하고, liked 속성을 추가합니다.
    const [guides, setGuides] = useState([
        { id: 1, image: '/images/pics/RecommendedLukas.svg', name: "Lukas", location: "Korea, Seoul", star_rate: 4.6, hashtag_1: '#Dog_Lover', hashtag_2: '#Car', hashtag_3: '#Photographer', hashtag_4: '#German', hashtag_5: '#Korean', hashtag_6: '#Spanish', isLiked: true },
        { id: 2, image: '/images/pics/RecommendedJiwon.svg', name: "Ji-won", location: "Korea, Jeju", star_rate: 4.6, hashtag_1: '#Kids_Specialist', hashtag_2: '#Local Foodie', isLiked: false },
        { id: 3, image: '/images/pics/RecommendedSarah.svg', name: "Sarah", location: "Korea, Busan", star_rate: 4.6, hashtag_1: '#Expat_Life', hashtag_2: '#Hiking', isLiked: false },
    ]);

    // 2. 하트 클릭 핸들러
    const toggleLike = (e: React.MouseEvent<HTMLDivElement>, id: number): void => {
        e.preventDefault();
        e.stopPropagation();
        setGuides(prev => prev.map(guide =>
            guide.id === id ? { ...guide, isLiked: !guide.isLiked } : guide
        ));
    };

    return (
        <div className="px-4 mt-12.5">
            <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold">Recommended Guide</h1>
                <Link to="/Guide" className="text-sm font-medium text-[#D95500] cursor-pointer">View all</Link>
            </div>
            <ul className="pt-5">
                {guides.map((data) => (
                    <Link to={`/Guide/${data.name}`} state={data} key={data.id}>
                        <li className="flex mt-5 bg-white rounded-lg relative"> {/* relative 추가 */}

                            {/* 3. 하트 버튼 영역 */}
                            <div
                                onClick={(e) => toggleLike(e, data.id)}
                                className="absolute top-2 left-2 z-10 cursor-pointer p-1"
                            >
                                <img
                                    src={data.isLiked
                                        ? "/images/icons/ico-heart.svg" // 채워진 하트 아이콘 경로
                                        : "/images/icons/ico-emptyheart.svg"  // 빈 하트 아이콘 경로
                                    }
                                    alt="좋아요"
                                    className="w-6 h-6"
                                />
                            </div>

                            <img src={data.image} alt={data.name} className="rounded-lg w-1/2 h-44 object-cover" />

                            <div className="flex flex-col gap-2.5 py-2.5 pl-3">
                                <p className="font-semibold flex items-center gap-3 ">
                                    {data.name}
                                    <img src="/images/icons/ico-certified.svg" alt="인증" />
                                </p>
                                <p className="flex items-center gap-2 text-sm text-[#938F8D]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_805_2980)">
                                            <path d="M13.1431 5.71415C13.1431 9.14272 8.00028 13.1427 8.00028 13.1427C8.00028 13.1427 2.85742 9.14272 2.85742 5.71415C2.85742 2.913 5.19914 0.571289 8.00028 0.571289C10.8014 0.571289 13.1431 2.913 13.1431 5.71415Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.99944 7.42857C8.94622 7.42857 9.71373 6.66106 9.71373 5.71429C9.71373 4.76751 8.94622 4 7.99944 4C7.05266 4 6.28516 4.76751 6.28516 5.71429C6.28516 6.66106 7.05266 7.42857 7.99944 7.42857Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.6596 11.4282H13.7141L15.4284 15.4282H0.571289L2.28557 11.4282H3.34009" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_805_2980">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    {data.location}
                                </p>
                                <Rate rateNum={data.star_rate} />
                                <div className="border-stone-300 border-2 border-solid rounded-4xl flex items-center w-fit mt-1.5">
                                    <span className="text-[#938F8D] text-sm font-semibold px-2.5">{data.hashtag_1}</span>
                                </div>
                                <div className="border-stone-300 border-2 border-solid rounded-4xl flex items-center w-fit">
                                    <span className="text-[#938F8D] text-sm font-semibold px-2.5">{data.hashtag_2}</span>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}