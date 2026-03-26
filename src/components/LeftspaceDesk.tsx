import { useState } from "react";
import { GnbMenuData } from "./data/GnbMenuData";
import { GnbSettingData } from "./data/GnbSettingData";



export default function LeftspaceDesk() {
   
      const [activeRole, setActiveRole] = useState('traveler');
    
    return (
        <>
            <div className={`overflow-hidden transition-all duration-300 max-h-screenF bg-[hsl(25,100%,95%,1)]`}>
                <div className="p-6">
                    <h1 className="mb-4 font-semibold">
                        <img src="/images/pics/img-menuProfile.svg" alt="내 프로필" className="inline mr-2" />
                        Hello, User!
                    </h1>
                    <ul className="flex gap-6 flex-col mb-4">
                        {GnbMenuData.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 cursor-pointer">
                                <img src={item.img_src} alt={item.img_alt} />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-4" />
                    <h1 className="mb-4 font-semibold">
                        Setting
                    </h1>
                    <ul className="flex gap-6 flex-col mb-4">
                        {GnbSettingData.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 cursor-pointer">
                                <img src={item.img_src} alt={item.img_alt} />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex mt-26 mb-32">
                        <button
                            onClick={() => setActiveRole('traveler')}
                            className={`p-2.5 border rounded-l-full flex gap-1.5 items-center transition-all duration-300 ${activeRole === 'traveler'
                                    ? 'bg-[#D95500] text-white border-[#D95500]'
                                    : 'bg-transparent text-[#EBE9E6] border-[#EBE9E6] hover:bg-[#D95500] hover:text-white'
                                }`}
                        >
                            {activeRole === 'traveler' && <img src="/images/icons/ico-selectedCheck.svg" alt="체크된 아이콘" />}
                            Traveler
                        </button>
                        <button
                            onClick={() => setActiveRole('guide')}
                            className={`p-2.5 border rounded-r-full flex gap-1.5 items-center transition-all duration-300 ${activeRole === 'guide'
                                    ? 'bg-[#D95500] text-white border-[#D95500]'
                                    : 'bg-transparent text-[#EBE9E6] border-[#EBE9E6] hover:bg-[#D95500] hover:text-white'
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