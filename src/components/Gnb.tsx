export default function Gnb() {
    return (
        // 상단 고정, 너비 100%, 투명한 배경 처리
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-fit max-w-300 z-100 py-4 px-6 bg-gray-50/10 ">
            <div className="flex items-center justify-center gap-20 max-w-7xl mx-auto">
                
                {/* 1. 왼쪽: 메뉴 아이콘 */}
                <div className="flex-1 flex justify-start">
                    <img 
                        src="/images/icons/ico-menu.svg" 
                        alt="메뉴" 
                        className="w-8 h-8 cursor-pointer" // 배경이 어두울 경우 흰색으로 보이게 처리
                    />
                </div>

                {/* 2. 중앙: 서비스 로고 (텍스트 또는 이미지) */}
                <div className="flex-1 flex justify-center">
                    <img src="/images/icons/ico-logo.svg" alt="메인로고" className="cursor-pointer" />
                </div>

                {/* 3. 오른쪽: 알림 아이콘 */}
                <div className="flex-1 flex justify-end">
                    <img 
                        src="/images/icons/ico-bell.svg" 
                        alt="알림" 
                        className="w-8 h-8 cursor-pointer opacity-80 hover:opacity-100 transition-opacity" 
                    />
                </div>  
            </div>  
        </nav>
    );
};