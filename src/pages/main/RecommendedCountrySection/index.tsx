import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function RecommendedCountrySection() {

    const swiperImg = [
        {img: '../../../../public/images/pics/img-Country1.svg' , alt: 'Korea'},
        {img: '../../../../public/images/pics/img-Country2.svg' , alt: 'Ireland'},
        {img: '../../../../public/images/pics/img-Country3.svg' , alt: 'Portugal'},
        {img: '../../../../public/images/pics/img-Country4.svg' , alt: 'U.S.A'},
        {img: '../../../../public/images/pics/img-Country5.svg' , alt: 'Spain'},
        {img: '../../../../public/images/pics/img-Country6.svg' , alt: 'Vietnam'},
        {img: '../../../../public/images/pics/img-Country7.svg' , alt: 'Japan'}
    ];

    return(
        <>
            <section>
                <div className="flex items-center justify-between px-4 mt-10 mb-5">
                    <h1 className="text-base font-semibold">Recommended Country</h1>
                    <Link to="/recommended" className="text-sm font-medium text-[#D95500] cursor-pointer">View all</Link>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.2}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500, // 2.5초마다 전환
                    disableOnInteraction: false, // 사용자 상호작용(드래그 등) 후에도 자동 재생 유지
                  }}
                  className="px-6"
                >
                  {
                    swiperImg.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full overflow-hidden rounded-2xl shadow-md border border-gray-100">
                                <img 
                                    src={slide.img} 
                                    alt={slide.alt} 
                                    className="w-full rounded-2xl shadow-lg object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                  } 
                  
                </Swiper>
            </section>
        </>
    );
};
