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
            <section className="mb-10 px-4 md:px-0">
                <div className="mx-auto max-w-7xl md:max-w-[880px] flex items-center justify-between mt-10 mb-5">
                    <h1 className="text-base font-semibold">Recommended Country</h1>
                    <Link to="/recommended" className="text-sm font-medium text-[#D95500] cursor-pointer">View all</Link>
                </div>
                <div className="mx-auto max-w-7xl md:max-w-[880px]">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={12}
                  slidesPerView={1.2}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    560: {
                        slidesPerView: 2.5,
                        centeredSlides: false,
                    },
                    740: {
                        slidesPerView: 3.5,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        centeredSlides: false,
                    }
                  }}
                  className="px-4 md:px-0"
                >
                  {
                    swiperImg.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative aspect-square overflow-hidden rounded-[10px] shadow-md">
                                <img
                                    src={slide.img}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
                                <span className="absolute top-3 left-3 text-white font-semibold text-lg">{slide.alt}</span>
                            </div>
                        </SwiperSlide>
                    ))
                  }
                </Swiper>
                </div>
            </section>
        </>
    );
};
