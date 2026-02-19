import { DataReview } from "./data/DataReview";

export default function ReviewLayout() {
    return(
        <>
            <ul className="px-4">
                {DataReview.map((review, index) => (
                    <li key={index} className="mb-4 overflow-hidden rounded-lg bg-white">
                        <div className="flex items-center justify-between px-4 pt-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={review.profileImgSrc}
                                    alt={review.profileImgAlt}
                                    className="h-9 w-9 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-[#1A1A1A]">
                                        {review.profileName}
                                    </span>
                                    <span className="text-xs text-[#938F8D]">
                                        {review.profileCountry}
                                    </span>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="text-[#B8B3B0]"
                                aria-label="More options"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="10" cy="4" r="1.5" fill="currentColor" />
                                    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                                    <circle cx="10" cy="16" r="1.5" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        {review.coverImgSrc && (
                            <div className="mt-3">
                                <img
                                    src={review.coverImgSrc}
                                    alt={review.coverImgAlt}
                                    className="h-44 w-full object-cover"
                                />
                            </div>
                        )}

                        <div className="px-4 pb-4 pt-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-[#938F8D]">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" />
                                        <path d="M4.5 1.5V4" stroke="currentColor" stroke-linecap="round" />
                                        <path d="M11.5 1.5V4" stroke="currentColor" stroke-linecap="round" />
                                        <path d="M2 6.5H14" stroke="currentColor" stroke-linecap="round" />
                                    </svg>
                                    <span>{review.timeText}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                width="14"
                                                height="14"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill={
                                                    starIndex < Math.round(review.rating)
                                                        ? "#D95500"
                                                        : "#E6E2DF"
                                                }
                                            >
                                                <path d="M10 1.5l2.35 4.76 5.26.76-3.8 3.7.9 5.25L10 13.9l-4.71 2.47.9-5.25-3.8-3.7 5.26-.76L10 1.5z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs font-semibold text-[#D95500]">
                                        {review.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>

                            <h3 className="mt-2 text-base font-semibold text-[#1A1A1A]">
                                {review.title}
                            </h3>
                            <p className="mt-1 text-sm text-[#403C3A]">
                                &quot;{review.body}&quot;
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 rounded-full border border-[#D95500] px-4 py-2 text-xs font-semibold text-[#D95500]"
                                >
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 7V3.5C6.5 2.67 7.17 2 8 2l.5 0c.55 0 1 .45 1 1v4h2.5c.83 0 1.5.67 1.5 1.5 0 .16-.02.32-.07.47l-1.4 4.2c-.2.6-.77.83-1.33.83H5.5c-.55 0-1-.45-1-1V7h2z"
                                            stroke="currentColor"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M3.5 7H2.5C2.22 7 2 7.22 2 7.5V13c0 .28.22.5.5.5h1C3.78 13.5 4 13.28 4 13V7.5C4 7.22 3.78 7 3.5 7z"
                                            stroke="currentColor"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    Helpful ({review.helpfulCount})
                                </button>
                                <button
                                    type="button"
                                    className="text-xs text-[#938F8D]"
                                >
                                    Report
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}