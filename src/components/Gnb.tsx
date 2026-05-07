import { useState } from 'react';
import { GnbMenuData } from './data/GnbMenuData';
import { GnbSettingData } from './data/GnbSettingData';

interface GnbProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function Gnb({ isSidebarOpen, onToggleSidebar }: GnbProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [activeRole, setActiveRole] = useState('traveler');

  return (
    <>
      {/* ─── MOBILE: 상단 네비게이션 바 ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-250 flex items-center justify-between px-3.5 py-3 backdrop-blur-md transition-all duration-300 md:hidden hover:bg-[hsla(25,100%,95%,1)] ${isClicked ? 'bg-[hsl(25,100%,95%,1)]' : 'bg-[hsla(25,100%,95%,0.20)]'}`}>
        <button
          className="cursor-pointer rounded-full p-2 bg-white shadow-sm transition-all hover:opacity-90"
          aria-label="Menu"
          onClick={() => setIsClicked(prev => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <img src="/images/icons/ico-logo.svg" alt="Logo" />
        </div>

        <button
          className="cursor-pointer rounded-full p-2 bg-white shadow-sm transition-all hover:opacity-90"
          aria-label="Alert"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9977 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6491 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </nav>

      {/* ─── DESKTOP: 왼쪽 사이드바 ─── */}
      <aside
        className={`hidden md:flex md:flex-col fixed inset-y-0 left-0 z-250 w-72 bg-white px-6 py-8 shadow-sm transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* 로고 + 접기 버튼 */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-gray-400 hover:bg-orange-50 hover:text-[#D95500] transition-colors"
            aria-label="사이드바 닫기"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 프로필 카드 */}
        <div className="mb-10 rounded-8 border border-gray-200 bg-white p-5 shadow-sm md:hidden">
          <div className="flex items-center gap-3">
            <img src="/images/pics/img-menuProfile.svg" alt="내 프로필" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-sm text-gray-500">Welcome back</p>
              <p className="text-lg font-semibold text-[#1A1A1A]">Hello, User!</p>
            </div>
          </div>
        </div>

        {/* 메뉴 */}
        <div className="flex-1 space-y-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <div>
            <ul className="space-y-3">
              {GnbMenuData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-[#4A4A4A] transition hover:bg-orange-50 hover:text-[#D95500] cursor-pointer"
                >
                  <img src={item.img_src} alt={item.img_alt} />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-[#4A4A4A]">Setting</p>
            <ul className="space-y-3">
              {GnbSettingData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-[#4A4A4A] transition hover:bg-orange-50 hover:text-[#D95500] cursor-pointer"
                >
                  <img src={item.img_src} alt={item.img_alt} />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Traveler / Guide 토글 */}
        <div className="mt-6 flex rounded-full bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveRole('traveler')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${activeRole === 'traveler' ? 'bg-[#D95500] text-white' : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
              }`}
          >
            {activeRole === 'traveler' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
            Traveler
          </button>
          <button
            onClick={() => setActiveRole('guide')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${activeRole === 'guide' ? 'bg-[#D95500] text-white' : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
              }`}
          >
            {activeRole === 'guide' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
            Guide
          </button>
        </div>
      </aside>

      {/* ─── DESKTOP: 상단 네비게이션 바 ─── */}
      <div className={`hidden md:flex fixed top-0 left-0 right-0 z-250 items-center justify-between px-3.5 py-3 pr-30 backdrop-blur-md transition-all duration-300 ${isSidebarOpen ? 'bg-white' : 'hover:bg-white'}`}>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            aria-label="사이드바 토글"
            className="p-2 rounded-full shadow-md text-gray-500 hover:text-[#D95500] transition-colors duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0043 3.99512L15.9932 4.00512" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.0043 3.99512L19.9932 4.00512" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.0043 7.99512L19.9932 8.00512" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.0043 11.9951L19.9932 12.0051" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.0043 15.9951L19.9932 16.0051" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.0043 19.9951L19.9932 20.0051" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.0043 19.9951L15.9932 20.0051" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.0059 3.99512H4.00586V19.9951H12.0059V3.99512Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
          <img src="/images/icons/ico-logo.svg" alt="Logo" />
        </div>

        <div className="flex items-center gap-5">
          <button
            className="cursor-pointer rounded-full p-2 transition-all hover:opacity-90"
            aria-label="Alert"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9977 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6491 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <img src="/images/pics/img-menuProfile.svg" alt="Profile" />
        </div>
      </div>


      {/* ─── MOBILE: 배경 오버레이 ─── */}
      {isClicked && (
        <div className="fixed inset-0 z-225 bg-black/20 md:hidden" onClick={() => setIsClicked(false)} />
      )}

      {/* ─── MOBILE: 드롭다운 메뉴 ─── */}
      <div
        className={`fixed top-16 left-0 right-0 z-250 overflow-hidden bg-[hsl(25,100%,95%,1)] transition-all duration-300 md:hidden ${isClicked ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div className="p-6">
          <div className="mb-4 font-semibold">
            <img src="/images/pics/img-menuProfile.svg" alt="내 프로필" className="inline mr-2" />
            Hello, User!
          </div>
          <ul className="space-y-3 mb-6">
            {GnbMenuData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer rounded-3xl px-4 py-3 transition hover:bg-orange-50 hover:text-[#D95500]"
              >
                <img src={item.img_src} alt={item.img_alt} />
                {item.title}
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="mb-4 font-semibold">Setting</div>
          <ul className="space-y-3 mb-6">
            {GnbSettingData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer rounded-3xl px-4 py-3 transition hover:bg-orange-50 hover:text-[#D95500]"
              >
                <img src={item.img_src} alt={item.img_alt} />
                {item.title}
              </li>
            ))}
          </ul>
          <div className="flex rounded-full bg-white p-1">
            <button
              onClick={() => setActiveRole('traveler')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${activeRole === 'traveler' ? 'bg-[#D95500] text-white' : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
                }`}
            >
              {activeRole === 'traveler' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
              Traveler
            </button>
            <button
              onClick={() => setActiveRole('guide')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${activeRole === 'guide' ? 'bg-[#D95500] text-white' : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
                }`}
            >
              {activeRole === 'guide' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
              Guide
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
