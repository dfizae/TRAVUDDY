export default function ProfileSection({name}) {
    return(
        <>
            <div className="bg-[url('/images/pics/GuideBackground.svg')] h-70 bg-cover bg-center flex flex-col items-center justify-end px-6 relative"></div>
                <div className="flex flex-col gap-2.5 py-2.5 pl-3">
                    <p className="font-semibold flex items-center gap-3 ">{data.name}<img src="../../../../public/images/icons/ico-certified.svg" alt="공식계정 인증마크"/></p>
                    <p className="flex items-center gap-2 text-sm text-[#938F8D]"><img src="../../../../public/images/icons/ico-map.svg" alt="로케 아이콘" />{data.location}</p>
                    <p className="flex items-center text-sm text-[#D95500]"><img src="../../../../public/images/icons/ico-rate.svg" alt="별점 평가" /> {data.star_rate}</p>
                    <div className="border-stone-300 border-2 border-solid rounded-4xl flex items-center w-fit mt-1.5">
                        <span className="text-[#938F8D] text-sm font-semibold px-2.5">{data.hashtag_1}</span>
                    </div>
                </div>
        </>
    );
}