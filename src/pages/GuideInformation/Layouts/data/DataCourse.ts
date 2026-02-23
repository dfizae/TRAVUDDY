export interface CourseData {
    img_src: string;  // ✅ undefined 제거 (필수값)
    img_alt: string;  // ✅ undefined 제거 (필수값)
    title: string;
    location: string;
    time: string;
    cost: string;
}

export const DataCourse: CourseData[] = [
    {
        img_src: '/images/pics/img-Course_1.svg',  // 반드시 값 제공
        img_alt: 'Course 1',
        title: 'Sunset Picnic & Paw-tography in Seoul Forest Park',
        location: 'Korea, Seoul 273 Ttukseom-ro, Seongdong',
        time: '3 hours',
        cost: '$150'
    },
    {img_src: "/images/pics/img-Course_2.svg", img_alt: "코스 이미지 2", location: "Korea, Seoul", time: "3 Hours", title: "[Pet-Friendly] Gallery & Local Cafe Walk", cost: "€  45"},
    {img_src: "/images/pics/img-Course_3.svg", img_alt: "코스 이미지 3", location: "Korea, Seoul", time: "3 Hours", title: "Hidden Seoul: Namsan Escape", cost: "€  55"},
];
