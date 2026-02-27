import { useState } from "react";
import { DataTour } from "./data/DataTour";

export default function RecommendedTourSection() {
    const [tours, setTours] = useState(
        DataTour.map((tour) => ({ ...tour, isLiked: false }))
    );

    const toggleLike = (index: number): void => {
        setTours((prev) =>
            prev.map((tour, tourIndex) =>
                tourIndex === index ? { ...tour, isLiked: !tour.isLiked } : tour
            )
        );
    };

    
    return (
        <section className="px-4 py-8">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#1A1A1A]">Recommended Tour</h2>
                <a href="#" className="text-sm font-semibold text-[#D95500]">
                    View all
                </a>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {tours.map((tour, index) => (
                    <div
                        key={index}
                        className={`group overflow-hidden rounded-lg ${index >= 4 ? "lg:col-span-2" : ""
                            }`}
                    >
                        <div className="relative h-40 md:h-48 overflow-hidden bg-gray-200 rounded-lg">
                            <img
                                src={tour.img_src}
                                alt={tour.img_alt}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <button
                                type="button"
                                aria-pressed={tour.isLiked}
                                aria-label={tour.isLiked ? "Unlike tour" : "Like tour"}
                                onClick={() => toggleLike(index)}
                                className="absolute top-3 right-3 rounded-full bg-black bg-opacity-40 p-2 transition-all hover:bg-opacity-60"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={tour.isLiked ? "#D95500" : "white"}
                                    strokeWidth="2"
                                >
                                    <path
                                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                        fill={tour.isLiked ? "#D95500" : "none"}
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="py-2">
                            <div className="mb-2 flex items-center gap-1 text-xs text-[#938F8D]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0718 5.64286C13.0718 9.07143 7.92899 13.0714 7.92899 13.0714C7.92899 13.0714 2.78613 9.07143 2.78613 5.64286C2.78613 2.84171 5.12785 0.5 7.92899 0.5C10.7301 0.5 13.0718 2.84171 13.0718 5.64286Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.92815 7.35728C8.87493 7.35728 9.64244 6.58977 9.64244 5.643C9.64244 4.69622 8.87493 3.92871 7.92815 3.92871C6.98138 3.92871 6.21387 4.69622 6.21387 5.643C6.21387 6.58977 6.98138 7.35728 7.92815 7.35728Z" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.5883 11.3572H13.6429L15.3571 15.3572H0.5L2.21429 11.3572H3.2688" stroke="#938F8D" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>{tour.location}</span>
                            </div>

                            <h3 className="text-base font-semibold text-[#1A1A1A] line-clamp-2 h-11 mb-2">
                                {tour.title}
                            </h3>

                            <div className="flex items-center gap-1">
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, starIndex) => (
                                        <svg
                                            key={starIndex}
                                            width="12"
                                            height="12"
                                            viewBox="0 0 20 20"
                                            fill={
                                                starIndex < Math.round(tour.rating)
                                                    ? "#D95500"
                                                    : "#E6E2DF"
                                            }
                                        >
                                            <path d="M10 1.5l2.35 4.76 5.26.76-3.8 3.7.9 5.25L10 13.9l-4.71 2.47.9-5.25-3.8-3.7 5.26-.76L10 1.5z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-[#D95500]">
                                    {tour.rating.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}