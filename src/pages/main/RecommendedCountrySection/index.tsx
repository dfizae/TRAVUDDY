import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function RecommendedCountrySection() {

    const swiperImg = [
        {img: '/images/pics/img-Country1.svg' , alt: 'Korea'},
        {img: '/images/pics/img-Country2.svg' , alt: 'Ireland'},
        {img: '/images/pics/img-Country3.svg' , alt: 'Portugal'},
        {img: '/images/pics/img-Country4.svg' , alt: 'U.S.A'},
        {img: '/images/pics/img-Country5.svg' , alt: 'Spain'},
        {img: '/images/pics/img-Country6.svg' , alt: 'Vietnam'},
        {img: '/images/pics/img-Country7.svg' , alt: 'Japan'}
    ];

    return(
        <>
            <section className="mb-10 px-4 md:px-8">
                <div className="mx-auto max-w-7xl flex items-center justify-between mt-10 mb-5">
                    <h1 className="text-base font-semibold">Recommended Country</h1>
                    <Link to="/recommended" className="text-sm font-medium text-[#D95500] cursor-pointer">View all</Link>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={12}
                  slidesPerView={1.2}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500, // 2.5초마다 전환
                    disableOnInteraction: false, // 사용자 상호작용(드래그 등) 후에도 자동 재생 유지
                  }}
                  breakpoints={{

                    560: {
                        slidesPerView: 2.5,
                        centeredSlides: false,
                    },
                    740: {
                        slidesPerView: 2.5,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 4.5,
                        centeredSlides: false,
                    }
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
