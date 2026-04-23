import { useState } from 'react';
import { GnbMenuData } from './data/GnbMenuData';
import { GnbSettingData } from './data/GnbSettingData';

export default function Gnb() {
  const [isClicked, setIsClicked] = useState(false);
  const [activeRole, setActiveRole] = useState('traveler');

  const handleToggleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-3.5 py-3 bg-[hsla(25,100%,95%,0.95)] backdrop-blur-md transition-all duration-300 md:hidden">
        <button
          className="cursor-pointer rounded-full p-2 bg-white shadow-sm transition-all hover:opacity-90"
          aria-label="Menu"
          onClick={handleToggleClick}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19H21" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#1A1A1A]">trippoint</span>
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

      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-[1000] md:w-72 md:border-r md:border-gray-200 md:bg-[hsl(25,100%,95%,1)] md:px-6 md:py-8 md:shadow-sm">
        <div className="mb-10">
          <span className="text-2xl font-bold text-[#1A1A1A]">trippoint</span>
        </div>

        <div className="mb-10 rounded-[32px] border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/images/pics/img-menuProfile.svg" alt="내 프로필" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="text-sm text-gray-500">Welcome back</p>
              <p className="text-lg font-semibold text-[#1A1A1A]">Hello, User!</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <ul className="space-y-3">
              {GnbMenuData.map((item, index) => (
                <li key={index} className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-[#4A4A4A] transition hover:bg-orange-50 hover:text-[#D95500] cursor-pointer">
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
                <li key={index} className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-[#4A4A4A] transition hover:bg-orange-50 hover:text-[#D95500] cursor-pointer">
                  <img src={item.img_src} alt={item.img_alt} />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex rounded-full bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveRole('traveler')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
              activeRole === 'traveler'
                ? 'bg-[#D95500] text-white'
                : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
            }`}
          >
            {activeRole === 'traveler' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
            Traveler
          </button>
          <button
            onClick={() => setActiveRole('guide')}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
              activeRole === 'guide'
                ? 'bg-[#D95500] text-white'
                : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
            }`}
          >
            {activeRole === 'guide' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
            Guide
          </button>
        </div>
      </aside>

      {isClicked && (
        <div className="fixed inset-0 z-[900] bg-black/20 md:hidden" onClick={() => setIsClicked(false)} />
      )}

      <div className={`fixed top-16 left-0 right-0 z-[1000] overflow-hidden bg-[hsl(25,100%,95%,1)] transition-all duration-300 md:hidden ${isClicked ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-6">
          <div className="mb-4 font-semibold">
            <img src="/images/pics/img-menuProfile.svg" alt="내 프로필" className="inline mr-2" />
            Hello, User!
          </div>
          <ul className="space-y-3 mb-6">
            {GnbMenuData.map((item, index) => (
              <li key={index} className="flex items-center gap-2 cursor-pointer rounded-3xl px-4 py-3 transition hover:bg-orange-50 hover:text-[#D95500]">
                <img src={item.img_src} alt={item.img_alt} />
                {item.title}
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="mb-4 font-semibold">Setting</div>
          <ul className="space-y-3 mb-6">
            {GnbSettingData.map((item, index) => (
              <li key={index} className="flex items-center gap-2 cursor-pointer rounded-3xl px-4 py-3 transition hover:bg-orange-50 hover:text-[#D95500]">
                <img src={item.img_src} alt={item.img_alt} />
                {item.title}
              </li>
            ))}
          </ul>
          <div className="flex rounded-full bg-white p-1">
            <button
              onClick={() => setActiveRole('traveler')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                activeRole === 'traveler'
                  ? 'bg-[#D95500] text-white'
                  : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
              }`}
            >
              {activeRole === 'traveler' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
              Traveler
            </button>
            <button
              onClick={() => setActiveRole('guide')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                activeRole === 'guide'
                  ? 'bg-[#D95500] text-white'
                  : 'text-[#9E9E9E] hover:bg-[#FFF1E6]'
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
