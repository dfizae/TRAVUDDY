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
        coverImgSrc: "/images/pics/img-reviewCover1.svg",
        coverImgAlt: "Review cover 1",
        profileImgSrc: "/images/pics/img-review_Profile_1.svg",
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
        coverImgSrc: "/images/pics/img-reviewCover2.svg",
        coverImgAlt: "Review cover 2",
        profileImgSrc: "/images/pics/img-review_Profile_2.svg",
        profileImgAlt: "Reviewer profile 2",
        profileName: "Yerim Lee",
        profileCountry: "Korea",
        timeText: "09-Jan-2026",
        rating: 5.0,
        title: "Sunset Picnic and Paw-tography",
        body: "Lukas was incredible! I was worried about my large dog fitting in the car, but his SUV was very spacious. The photos he took are professional-grade. Cooper loved him immediately. Highly recommend for any pet owners visiting Seoul!",
        helpfulCount: 12,
    },
    {
        profileImgSrc: "/images/pics/img-reviewProfiledefault.svg",
        profileImgAlt: "Reviewer profile 3",
        profileName: "David Tan",
        profileCountry: "Singapore",
        timeText: "15-Dec-2025",
        rating: 5.0,
        title: "Gallery and Local Cafe Walk",
        body: "As a solo traveler, I’m always worried about safety and, honestly, getting good photos of myself. Lukas was professional, respectful, and made me feel completely at ease. The photos he took are magazine-quality! It felt like traveling with a talented friend.",
        helpfulCount: 7,
    },
    {
        profileImgSrc: "/images/pics/img-review_Profile_3.svg",
        profileImgAlt: "Reviewer profile 3",
        profileName: "Rachel K.",
        profileCountry: "UK",
        timeText: "08-Dec-2025",
        rating: 4.5,
        title: "Gallery and Local Cafe Walk",
        body: "As a solo traveler, I’m always worried about safety and, honestly, getting good photos of myself. Lukas was professional, respectful, and made me feel completely at ease. The photos he took are magazine-quality! It felt like traveling with a talented friend.",
        helpfulCount: 4,
    },
];
