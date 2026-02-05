interface CourseData {
    img_src?: string;
    img_alt: string;
    location: string;
    time: string;
    title: string;
    cost: string;
}

export const DataCourse: CourseData[] = [
    {img_src: "../../../../public/images/pics/img-course_1.svg", img_alt: "코스 이미지 1", location: "Korea, Seoul", time: "3 Hours", title: "Sunset Picnic & Paw-tography", cost: "€  65"},
    {img_src: "../../../../public/images/pics/img-course_2.svg", img_alt: "코스 이미지 2", location: "Korea, Seoul", time: "3 Hours", title: "[Pet-Friendly] Gallery & Local Cafe Walk", cost: "€  45"},
    {img_src: "../../../../public/images/pics/img-course_3.svg", img_alt: "코스 이미지 3", location: "Korea, Seoul", time: "3 Hours", title: "Hidden Seoul: Namsan Escape", cost: "€  55"},  
];
