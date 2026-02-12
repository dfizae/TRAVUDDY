interface ReviewData {
    coverImgSrc?: string;
    coverImgAlt?: string;
    profileImgSrc: string;
    profileImgAlt: string;
    profileName: string;
    profileCountry: string;
    timeText: string;
    rating: number;
    title: string;
    body: string;
    helpfulCount: number;
}

export const DataReview: ReviewData[] = [
    {
        coverImgSrc: "../../../../public/images/pics/img-course_1.svg",
        coverImgAlt: "Review cover 1",
        profileImgSrc: "../../../../public/images/pics/RecommendedLukas.svg",
        profileImgAlt: "Reviewer profile 1",
        profileName: "Chloe M.",
        profileCountry: "Australia",
        timeText: "3 weeks ago",
        rating: 5.0,
        title: "Hidden Seoul: Namsan Escape",
        body: "As a solo traveler, I’m always worried about safety and, honestly, getting good photos of myself. Lukas was professional, respectful, and made me feel completely at ease. The photos he took are magazine-quality! It felt like traveling with a talented friend.",
        helpfulCount: 12,
    },
    {
        coverImgSrc: "../../../../public/images/pics/img-course_2.svg",
        coverImgAlt: "Review cover 2",
        profileImgSrc: "../../../../public/images/pics/RecommendedLukas.svg",
        profileImgAlt: "Reviewer profile 2",
        profileName: "Maya L.",
        profileCountry: "Canada",
        timeText: "1 month ago",
        rating: 4.8,
        title: "Sunset Picnic and Paw-tography",
        body: "Lukas was incredible! I was worried about my large dog fitting in the car, but his SUV was very spacious. The photos he took are professional-grade. Cooper loved him immediately. Highly recommend for any pet owners visiting Seoul!",
        helpfulCount: 12,
    },
    {
        coverImgSrc: "../../../../public/images/pics/img-course_3.svg",
        coverImgAlt: "Review cover 3",
        profileImgSrc: "../../../../public/images/pics/RecommendedLukas.svg",
        profileImgAlt: "Reviewer profile 3",
        profileName: "Evan R.",
        profileCountry: "UK",
        timeText: "2 months ago",
        rating: 5.0,
        title: "Gallery and Local Cafe Walk",
        body: "As a solo traveler, I’m always worried about safety and, honestly, getting good photos of myself. Lukas was professional, respectful, and made me feel completely at ease. The photos he took are magazine-quality! It felt like traveling with a talented friend.",
        helpfulCount: 7,
    },
    {
        coverImgSrc: "../../../../public/images/pics/img-course_3.svg",
        coverImgAlt: "Review cover 3",
        profileImgSrc: "../../../../public/images/pics/RecommendedLukas.svg",
        profileImgAlt: "Reviewer profile 3",
        profileName: "Evan R.",
        profileCountry: "UK",
        timeText: "2 months ago",
        rating: 5.0,
        title: "Gallery and Local Cafe Walk",
        body: "As a solo traveler, I’m always worried about safety and, honestly, getting good photos of myself. Lukas was professional, respectful, and made me feel completely at ease. The photos he took are magazine-quality! It felt like traveling with a talented friend.",
        helpfulCount: 4,
    },
];
