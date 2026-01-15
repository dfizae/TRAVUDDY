import { Link } from "react-router-dom";

export default function RecommendedSection() {

    const recommendedData = [
        {image: '../../../../public/images/pics/Recommend-Lukas.svg', alt: 'Lukas 프로필', name: "Lukas", location: "Korea, Seoul", star_rate: 4.6, hashtag_1: '#Dog_Lover', hashtag_2: '#Car'},
        {image: '../../../../public/images/pics/Recommend-Jiwon.svg', alt: 'Lukas 프로필', name: "Ji-won", location: "Korea, Jeju", star_rate: 4.6, hashtag_1: '#Kids_Specialist', hashtag_2: '#Local Foodie'},
        {image: '../../../../public/images/pics/Recommend-Sarah.svg', alt: 'Lukas 프로필', name: "Sarah", location: "Korea, Busan", star_rate: 4.6, hashtag_1: '#Expat_Life', hashtag_2: '#Hiking'},
    ];

    return(
        <>
            <div className="px-4 mt-12.5">
                <div className="flex items-center justify-between">
                    <h1 className="text-base font-semibold">Recommended Buddy</h1>
                    <Link to="/recommended" className="text-sm font-medium text-[#D95500] cursor-pointer">View all</Link>
                </div>
                <ul className="pt-5">
                    {recommendedData.map((data) => (
                        <li className="flex mt-5">
                            <img src={data.image} alt= {data.alt} />
                            <div className="flex flex-col gap-2.5 py-2.5 pl-3">
                                <p className="font-bold flex items-center gap-3 ">{data.name}<img src="../../../../public/images/icons/ico-certified.svg" alt="공식계정 인증마크"/></p>
                                <p className="flex items-center gap-2 text-sm text-[#938F8D]"><img src="../../../../public/images/icons/ico-map.svg" alt="로케 아이콘" />{data.location}</p>
                                <p className="flex items-center text-sm text-[#D95500]"><img src="../../../../public/images/icons/ico-rate.svg" alt="별점 평가" /> {data.star_rate}</p>
                                <div className="border-stone-300 border-1 rounded-4xl flex items-center w-fit mt-1.5">
                                    <span className="text-[#938F8D] text-sm px-2.5">{data.hashtag_1}</span>
                                </div>
                                <div className="border-stone-300 border-1 rounded-4xl flex items-center w-fit">
                                    <span className="text-[#938F8D] text-sm px-2.5">{data.hashtag_2}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
