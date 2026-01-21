import { useState } from "react"; // useState 추가
import { Link } from "react-router-dom";

export default function RecommendedSection() {
    // 1. 데이터를 state로 관리하고, liked 속성을 추가합니다.
    const [guides, setGuides] = useState([
        { id: 1, image: '../../../../public/images/pics/RecommendedLukas.svg', name: "Lukas", location: "Korea, Seoul", star_rate: 4.6, hashtag_1: '#Dog_Lover', hashtag_2: '#Car', isLiked: true },
        { id: 2, image: '../../../../public/images/pics/RecommendedJiwon.svg', name: "Ji-won", location: "Korea, Jeju", star_rate: 4.6, hashtag_1: '#Kids_Specialist', hashtag_2: '#Local Foodie', isLiked: false },
        { id: 3, image: '../../../../public/images/pics/RecommendedSarah.svg', name: "Sarah", location: "Korea, Busan", star_rate: 4.6, hashtag_1: '#Expat_Life', hashtag_2: '#Hiking', isLiked: false },
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
                    <Link to={`/Guide/${data.name}`} key={data.id}>
                        <li className="flex mt-5 bg-white rounded-lg relative"> {/* relative 추가 */}
                            
                            {/* 3. 하트 버튼 영역 */}
                            <div 
                                onClick={(e) => toggleLike(e, data.id)}
                                className="absolute top-2 left-2 z-10 cursor-pointer p-1"
                            >
                                <img 
                                    src={data.isLiked 
                                        ? "../../../../public/images/icons/ico-heart.svg" // 채워진 하트 아이콘 경로
                                        : "../../../../public/images/icons/ico-emptyheart.svg"  // 빈 하트 아이콘 경로
                                    } 
                                    alt="좋아요" 
                                    className="w-6 h-6"
                                />
                            </div>

                            <img src={data.image} alt={data.name} className="rounded-lg object-cover w-30 h-30" />
                            
                            <div className="flex flex-col gap-2.5 py-2.5 pl-3">
                                <p className="font-semibold flex items-center gap-3 ">
                                    {data.name}
                                    <img src="../../../../public/images/icons/ico-certified.svg" alt="인증"/>
                                </p>
                                <p className="flex items-center gap-2 text-sm text-[#938F8D]">
                                    <img src="../../../../public/images/icons/ico-map.svg" alt="위치" />
                                    {data.location}
                                </p>
                                <p className="flex items-center text-sm text-[#D95500]">
                                    <img src="../../../../public/images/icons/ico-rate.svg" alt="별점" /> 
                                    {data.star_rate}
                                </p>
                                {/* 해시태그 생략... */}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}