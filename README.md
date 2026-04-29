## 💡 GLYF 웹 사이트 리뉴얼 (React + Vite로 체인지)

### 🖥️ 관련 링크
|목록|링크|
|:--|:--|
|`figma`|[피그마 작업물 링크](https://www.figma.com/design/JJXCXyblldp7HooTXlGetm/Travuddy-%ED%8A%B8%EB%A0%88%EB%B2%84%EB%94%94?node-id=1-9714&t=a1Tt7Ksccqa2CSGu-1)|
|`vercel`|[홈페이지 링크(vercel 로그인 필요)](https://travuddy.vercel.app/)|
<br>

## ℹ️ 작업물 정보
|정보|설명|
|:---|:---|
|🗓️ 작업 기간|2026-1-14 ~ |
|⚒️ 작업 분야|코딩(프론트엔드)|
|🧑‍💻 기여도|공동 작업 (내 작업: 프론트엔드 개발)|
|🧑‍💻 함께한 작업자| 류xx : UI/UX 예비 디자이너 |
<br>

## 🧩 개발 환경
### 🌐 Frontend
[![My Skills](https://skillicons.dev/icons?i=js,html,css,tailwind,react,ts&perline=3)](https://skillicons.dev)

### 🧰 Tools & Environment
[![My Skills](https://skillicons.dev/icons?i=figma,vite,vercel,git,vscode&perline=3)](https://skillicons.dev)
<br>

### 📝 Claude Code 사용
|정보|설명|
|:---|:---|
|🧩 모델| Sonnet 4.6 |
|⚒️ 스킬| web-artifacts-builder |
|🧑‍💻 사용 이유| Figma URL을 가져와 컴포넌트 간 간격, 스타일 등에 오류가 있는지 검토 및 데스크톱 반응형 디자인 설계 향상|


## 📁 폴더 구조

```
TRAVUDDY/
├──.claude/ : 클로드 설정 관련 폴더
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
├── skills-lock.json : Claude 스킬 설정 json 파일
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

- **2026-03-26 ~ 2026-04-01**
- [x] 데스크톱, 태블릿 등 반응형 디자인 설계

- **2026-04-23 ~ 2026-**
- [x] GnB 반응형 디자인 재조정
- [x] Main 페이지를 Claude Code를 사용해 디자인 검토 및 수정
- [x] GuideInformation 페이지 데스크톱 반응형 디자인 설계 및 구현
    - [x] ProfileSection 디자인 수정
    - [o] InformationSection 디자인 수정