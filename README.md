## 💡 GLYF 웹 사이트 리뉴얼 (React + Vite로 체인지)

### 🖥️ 관련 링크
|목록|링크|비고|
|:--|:--|:--|
|`figma`|[피그마 작업물 링크](https://www.figma.com/design/JJXCXyblldp7HooTXlGetm/Travuddy-%ED%8A%B8%EB%A0%88%EB%B2%84%EB%94%94?node-id=1-9714&t=a1Tt7Ksccqa2CSGu-1)||
|`vercel`|||
|`velog`|||
<br>

## 랙걸려

## ℹ️ 작업물 정보
|정보|설명|
|:---|:---|
|🗓️ 작업 기간|2026-1-14 ~ |
|⚒️ 작업 분야|코딩(프론트엔드)|
|🧑‍💻 기여도|공동 작업 (내 작업: 프론트엔드 개발)|
<br>

## 🧩 개발 환경
|분야|기술|
|:---|:---|
|Frontend|`React`, `Typescript`, `Vite`|
|Library|`Swiper`|
|Styling| `CSS3`, `Tailwind CSS`|
|Version Control|`Git`, `GitHub`|
|Deployment|`Vercel`|
|Design Tool|![Figma](https://github.com/user-attachments/assets/67394921-4b2e-4896-a94e-c3755396fe90)|
<br>

## 📁 폴더 구조

```
GLYF/
├── node_modules/
│   │   ├── .../
├── public/
│   │   ├── .../
├── src/
│   ├── assets/
│   │   ├── logo/ : 로고 저장
│   │   └── images/ : 이미지(.svg) 저장
│   │       ├── icons/ : 아이콘 저장
│   │       └── pics/ : 사진 저장
│   │
│   ├── components/: 공통 컴포넌트 관리
│   │   ├── Gnb.tsx : 상단 네비게이션 컴포넌트
│   │   ├── Footer.tsx : 하단 푸터 컴포넌트
│   │   ├── GnbSecond.tsx : 상단 네비게이션 컴포넌트 - 2
│   │   ├── Rate.tsx : 별점 컴포넌트
│   │   └── data/
│   │       ├── GnbMenuData.ts: Gnb 메뉴 데이터
│   │       └── index.tsx: Gnb Setting 항목 데이터
│   │
│   ├── pages/
│   │   ├── Main/ : 메인페이지
│   │   │    ├── index.tsx: 메인페이지 최상위 컴포넌트
│   │   │    ├── HeroSection/: Hero 섹션 컴포넌트
│   │   │    ├── RecommendedSection/: 추천 친구 컴포넌트 (Recommended Buddy)
│   │   │    ├── RecommendedTourSection: 추천 투어 컴포넌트
│   │   │    └── RecommendedCountrySection: 추천 국가 컴포넌트
│   │   │    
│   │   │
│   │   ├── GuideInformation/ : 가이드 소개 페이지
│   │   │    ├── index.tsx: 가이드 소개 페이지 최상위 컴포넌트
│   │   │    ├── ProfileSection.tsx: 가이드 프로필 컴포넌트
│   │   │    ├── InformationSection.tsx: 가이드 소개 컴포넌트
│   │   │    └── Layouts/
│   │   │        ├── data/ (코스와 리뷰 페이지 데이터 저장 파일 모음 폴더)
│   │   │        ├── CourseDetailPanel.tsx: 코스 상세 페이지 컴포넌트        
│   │            ├── CourseLayout.tsx: 코스 레이아웃
│   │            └── ReviewLayout.tsx: 리뷰 레이아웃
│   │ 
│   ├── types/
│   │   ├── global.d.ts : 전역 타입 파일 (swiper 관련)
│   │
│   ├── App.css
│   ├── App.tsx : 리액트 애플리케이션의 시작점
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🗓️ 개발 과정

- **2026-01-14 ~ 2026-01-25**
- [x] 메인페이지 작성 (Main)
    - [x] HeroSection, RecommendedSection, RecommendedCountrySection 작성

- **2026-01-25 ~ 2026-02-19**
- [x] 가이드페이지 작성 (GuideInformation)
    - [x] CourseLayout 작성
    - [x] ReviewLayout 작성
    
- **2026-02-21 ~ 2026-03-03**
- [x] 가이드 상세페이지 작성 (GuideDetailPanel)
- [x] Gnb 수정 (GnbSecond, 이벤트 설계)
    
- **2026-03-03 ~ 2026-03-09**
- [x] Gnb 메뉴창 작성
- [x] 검색창 수정
- [x] Rate 컴포넌트 리펙토리

- **2026-03-26 ~**
- [x] 데스크톱, 태블릿 등 반응형 디자인 설계

