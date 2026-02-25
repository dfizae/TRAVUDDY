export default function GnbSecond() {
    return (
        <nav className="flex items-center justify-center px-4 py-4 bg-[#FFF0E5] opacity-40">
            <button 
                className="rounded-full p-2 transition-colors duration-1000 bg-[#ffffff] hover:bg-[#FFF0E5]"
                aria-label="Go back"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
            </button>

            <button 
                className="rounded-full p-2 transition-colors duration-1000 bg-[#ffffff] opacity-60 hover:bg-[#FFF0E5]"
                aria-label="Share"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
            </button>
        </nav>
    );
}