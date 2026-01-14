export default function RecommendedSection() {

    const recommendedData = [
        {image: '../../../../public/images/pics/Recommend-Lukas.svg', alt: 'Lukas 프로필', name: "Lukas", location: "Korea, Seoul", star_rate: 4.6, hashtag_1: '#Dog_Lover', hashtag_2: '#Car'},
        {image: '../../../../public/images/pics/Recommend-Jiwon.svg', alt: 'Lukas 프로필', name: "Ji-won", location: "Korea, Jeju", star_rate: 4.6, hashtag_1: '#Kids_Specialist', hashtag_2: '#Local Foodie'},
        {image: '../../../../public/images/pics/Recommend-Sarah.svg', alt: 'Lukas 프로필', name: "Sarah", location: "Korea, Busan", star_rate: 4.6, hashtag_1: '#Expat_Life', hashtag_2: '#Hiking'},
    ];

    return(
        <>
            <div className="px-4">
                <div className="flex items-center justify-evenly">
                    <h1 className="text-base">Recommended Buddy</h1>
                    View all
                </div>
                <ul>
                    {recommendedData.map((data) => (
                        <li>
                            <img src={data.image} alt= {data.alt} />
                            <div>
                                <p>{data.name}</p>
                                <p>{data.location}</p>
                                <p>{data.star_rate}</p>
                                <div>
                                    <span>{data.hashtag_1}</span>
                                </div>
                                <div>
                                    <span>{data.hashtag_2}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                    <li>
                        <img src="#" alt="#" />
                        
                    </li>
                </ul>
            </div>
        </>
    );
};
