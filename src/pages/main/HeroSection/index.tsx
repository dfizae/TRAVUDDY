import { useState } from "react";

export default function HeroSection() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(["Spain", "Korea", "#dog"]);

  const tags = ["#English", "#Korean", "#car", "#dog", "#petlover"];

  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
    setIsSearchOpen(false);
  };

  const handleRecentSearchClick = (keyword: string) => {
    setSearchQuery(keyword);
    setIsSearchOpen(false);
  };

  const handleRemoveRecent = (keyword: string) => {
    setRecentSearches(recentSearches.filter(item => item !== keyword));
  };

  return (
    <section>
      <div className="relative bg-[url('/images/pics/heroBackground.svg')] min-h-[520px] md:min-h-[700px] bg-cover bg-center overflow-visible">

        {/* 제목 - 섹션 정중앙 */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 pointer-events-none">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md text-center max-w-3xl">
            The Point of your journey
          </h1>
        </div>

        {/* 검색창 - 하단 100px */}
        <div className="absolute bottom-[100px] left-0 right-0 px-6 md:px-12">
          <form action="" className="w-full max-w-4xl mx-auto relative">
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
                className={`w-full bg-white text-gray-700 py-4 pl-14 pr-12 shadow-xl outline-none transition-all placeholder:text-gray-400 text-sm ${isSearchOpen ? "rounded-t-[10px]" : "rounded-[10px]"}`}
                type="text"
                placeholder="Where do you want to go?"
              />
            </div>

            {/* 검색창 하단 드롭다운 */}
            {isSearchOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsSearchOpen(false)}></div>

                <div className="absolute top-full left-0 w-full bg-white rounded-b-3xl shadow-2xl z-20 p-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-1">
                  <div className="flex items-start gap-3 mb-6">
                    <button className="mt-1 text-gray-600 hover:text-orange-500 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 3H20.0001C20.5524 3 21.0001 3.44764 21.0001 3.99987L21.0003 5.58569C21.0004 5.85097 20.895 6.10538 20.7074 6.29295L14.2929 12.7071C14.1054 12.8946 14 13.149 14 13.4142V19.7192C14 20.3698 13.3886 20.8472 12.7575 20.6894L10.7575 20.1894C10.3123 20.0781 10 19.6781 10 19.2192V13.4142C10 13.149 9.89464 12.8946 9.70711 12.7071L3.29289 6.29289C3.10535 6.10536 3 5.851 3 5.58579V4C3 3.44772 3.44771 3 4 3Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

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

                  <div className="space-y-4">
                    <h3 className="text-gray-400 font-semibold mb-4 text-lg">Recent searches</h3>
                    {recentSearches.map((item) => (
                      <div
                        key={item}
                        className="flex justify-between items-center group cursor-pointer"
                        onClick={() => handleRecentSearchClick(item)}
                      >
                        <span className="text-gray-800 font-bold text-lg">{item}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveRecent(item);
                          }}
                          className="text-gray-400 hover:text-gray-600"
                        >
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

      </div>
    </section>
  );
}
