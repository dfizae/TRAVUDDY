export interface CourseData {
    img_src: string; 
    img_alt: string;  
    title: string;
    title2?: string;
    location: string;
    time: string;
    cost: string;
    profile_img_src?: string;
    profile_img_alt?: string;
    map_location?: string;
}

export const DataCourse: CourseData[] = [
    {
        img_src: '/images/pics/img-Course_1.svg',  // 반드시 값 제공
        img_alt: 'Course 1',
        profile_img_src: '/images/pics/RecommendedLukas.svg',
        profile_img_alt: 'Guide Profile 1',
        title: 'Sunset Picnic & Paw-tography',
        title2: 'Sunset Picnic & Paw-tography \n in Seoul Forest Park',
        location: 'Korea, Seoul',
        map_location: 'Korea, Seoul 273 Ttukseom-ro, Seongdong',
        time: '3 hours',
        cost: '$150'
    },
    {img_src: "/images/pics/img-Course_2.svg", img_alt: "코스 이미지 2", location: "Korea, Seoul", time: "3 Hours", title: "[Pet-Friendly] Gallery & Local Cafe Walk", cost: "€  45"},
    {img_src: "/images/pics/img-Course_3.svg", img_alt: "코스 이미지 3", location: "Korea, Seoul", time: "3 Hours", title: "Hidden Seoul: Namsan Escape", cost: "€  55"},
];
