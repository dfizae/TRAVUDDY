export default function Gnb() {
  return (
    <nav className="fixed top-0 left-0 w-full z-25 py-4 px-6 bg-gray-50/10 hover:bg-white transition-all border-b border-white/10">
      {/* max-w-[360px]로 모바일 규격 고정 및 중앙 정렬 */}
      <div className="flex items-center justify-between max-w-full mx-auto">
        
        {/* 1. 왼쪽: 메뉴 */}
        <div className="w-8 flex justify-start">
          <img src="/images/icons/ico-menu.svg" alt="메뉴" className="w-8 h-8 cursor-pointer" />
        </div>

        {/* 2. 중앙: 로고 */}
        <div className="w-20 flex justify-center">
          <img src="/images/icons/ico-logo.svg" alt="메인로고" className="h-6 cursor-pointer" />
        </div>

        {/* 3. 오른쪽: 알림 */}
        <div className="w-8 flex justify-end">
          <img src="/images/icons/ico-bell.svg" alt="알림" className="w-8 h-8 cursor-pointer" />
        </div>
        
      </div>
    </nav>
  );
}