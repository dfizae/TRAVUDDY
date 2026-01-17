import { useState } from "react";

export default function HeroSection() {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const tags = ["#English", "#Korean", "#car", "#dog", "#petlover"];
    const recentSearches = ["Spain", "Korea", "#dog"];

    const handleKeywordClick = (keyword: string) => {
      setSearchQuery(keyword);
      setIsSearchOpen(false);
    };

    return (
        <section>
            <div className="bg-[url('/images/pics/heroBackground.svg')] h-70 bg-cover bg-center flex flex-col items-center justify-end px-6 relative">
                
                <h1 className="text-white text-xl font-bold mb-14 drop-shadow-md text-center whitespace-nowrap">
                    "Travuddy is wherever you go"
                </h1>

                <form action="" className="w-full max-w-125 relative mb-11">
                    <div className="relative flex items-center">
                        <span className="absolute left-5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>

                        <input
                          onFocus={() => setIsSearchOpen(true)}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className={`w-full bg-white text-gray-700 py-4 pl-14 pr-12 shadow-xl outline-none transition-all placeholder:text-gray-400 placeholder: text-sm ${
                            isSearchOpen ? "rounded-t-lg" : "rounded-lg"
                          }`}
                          type="text"
                          placeholder="Where do you want to go?"
                        />
                    </div>

                    {/* 검색창 하단 영역 */}
                    {isSearchOpen && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setIsSearchOpen(false)}></div>

                          <div className="absolute top-full left-0 w-full bg-white rounded-b-lg shadow-2xl z-20 p-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-1">
                            
                            
                            {/* 태그 영역 */}
                            {/* 1. 필터 아이콘 + 태그 영역 (첫 줄 배치) */}
                          <div className="flex items-start gap-3 mb-6">
                            {/* 필터 아이콘: 첫 줄 맨 왼쪽 */}
                            <button className="mt-1 text-gray-600 hover:text-orange-500 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 12h7.5" />
                              </svg>
                            </button>

                            {/* 태그 리스트 */}
                            <div className="flex flex-wrap gap-2">
                              {tags.map((tag) => (
                                <button 
                                  key={tag} 
                                  onClick={() => handleKeywordClick(tag)}
                                  className="px-2 py-1.5 border border-gray-300 rounded-full text-sm text-gray-500 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all shadow-sm"
                                >
                                  {tag}
                                </button>
                              ))}
                            </div>
                          </div>

                            <hr className="mb-6 border-gray-100" />
                            
                            {/* 최근 검색어 영역 */}
                            <div className="space-y-4">
                              <h3 className="text-gray-400 font-semibold mb-4 text-lg">Recent searches</h3>
                              {recentSearches.map((item) => (
                                <div key={item} className="flex justify-between items-center group cursor-pointer">
                                  <span className="text-gray-800 font-bold text-lg">{item}</span>
                                  <button className="text-gray-400 hover:text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};