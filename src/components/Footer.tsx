interface FooterProps {
    isSidebarOpen?: boolean;
}

export default function Footer({ isSidebarOpen = false }: FooterProps) {
    return (
        <footer className={`w-full bg-[#1A1A1A] text-white py-10 px-6 transition-all duration-300 ${isSidebarOpen ? 'md:pl-[calc(18rem+24px)]' : ''}`}>
            <div className="max-w-300 mx-auto flex flex-col gap-8">
                
                {/* 1. 브랜드 섹션 */}
                <div className="space-y-4">
                    <h2 className="text-[#888888] text-2xl font-black tracking-tight">
                        Travuddy
                    </h2>
                    <p className="text-gray-300 text-lg font-medium">
                        Make a best trip for you!
                    </p>
                    {/* 인스타그램 아이콘 (Lucide 또는 SVG) */}
                    <div className="pt-2">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 2. 설정 섹션 (Location & Language) */}
                <div className="flex flex-row gap-8 pt-4">
                    {/* Location 셀렉트 */}
                    <div className="flex flex-col gap-3 flex-1 max-w-40">
                        <label className="text-white font-bold text-lg">Location</label>
                        <div className="relative">
                            <select className="w-full bg-white text-black py-2 px-4 rounded-md appearance-none font-medium outline-none">
                                <option>Korea</option>
                                <option>Japan</option>
                                <option>USA</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
                        </div>
                    </div>

                    {/* Language 셀렉트 */}
                    <div className="flex flex-col gap-3 flex-1 max-w-40">
                        <label className="text-white font-bold text-lg">Language</label>
                        <div className="relative">
                            <select className="w-full bg-white text-black py-2 px-4 rounded-md appearance-none font-medium outline-none">
                                <option>English</option>
                                <option>Korean</option>
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
                        </div>
                    </div>
                </div>

                {/* 추가: 저작권 정보 (필요시) */}
                <div className="pt-10 border-t border-gray-800 text-gray-500 text-sm">
                    © 2024 Travuddy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}