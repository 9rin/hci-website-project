# HCI Project Website

React + Tailwind CSS로 구축된 HCI 프로젝트 포트폴리오 웹사이트입니다.

link: https://hci-website-project.vercel.app/

## 🚀 기능

- **Hero Section**: 프로젝트 제목과 부제목이 포함된 메인 페이지
- **고정 네비게이션 바**: Home, Documentation, Presentations, Prototypes, Videos, Team 링크
- **Documentation 페이지**: PDF 다운로드 버튼이 있는 문서 카드 그리드
- **Presentations 페이지**: PDF 및 PPTX 다운로드가 가능한 발표 자료 카드
- **Prototypes 페이지**: 
  - Mid-Fi 프로토타입 (Figma iframe 임베드)
  - Hi-Fi 프로토타입 (ZIP 다운로드 + Figma 링크)
- **Videos 페이지**: YouTube/Vimeo 임베드 및 다운로드 링크
- **Team 페이지**: 팀원 사진, 이름, 역할이 포함된 카드

## 📦 설치

```bash
# 의존성 설치
npm install
```

## 🛠️ 개발

```bash
# 개발 서버 실행
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

## 🏗️ 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
hci-project/
├── src/
│   ├── components/
│   │   └── Navbar.tsx          # 네비게이션 바 컴포넌트
│   ├── pages/
│   │   ├── Home.tsx            # 홈 페이지 (Hero 섹션)
│   │   ├── Documentation.tsx   # 문서 페이지
│   │   ├── Presentations.tsx   # 발표 자료 페이지
│   │   ├── Prototypes.tsx      # 프로토타입 페이지
│   │   ├── Videos.tsx          # 비디오 페이지
│   │   └── Team.tsx            # 팀 페이지
│   ├── App.tsx                 # 메인 앱 컴포넌트 (라우팅)
│   ├── main.tsx                # 진입점
│   └── index.css               # Tailwind CSS 설정
├── public/                     # 정적 파일
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind 설정
├── postcss.config.js           # PostCSS 설정
├── vite.config.ts              # Vite 설정
└── tsconfig.json               # TypeScript 설정
```

## 🎨 커스터마이징

### 문서 및 발표 자료 추가

`src/pages/Documentation.tsx` 및 `src/pages/Presentations.tsx` 파일에서 배열에 항목을 추가하세요:

```typescript
const documents = [
  {
    id: 1,
    title: '문서 제목',
    description: '문서 설명',
    pdfUrl: '/docs/your-file.pdf',
  },
  // 더 많은 문서 추가...
]
```

### Figma 프로토타입 링크 업데이트

`src/pages/Prototypes.tsx`에서 Figma URL을 업데이트하세요:

```typescript
src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL"
```

### YouTube/Vimeo 비디오 임베드

`src/pages/Videos.tsx`에서 비디오 ID를 업데이트하세요:

```typescript
// YouTube
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"

// Vimeo
src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
```

### 팀원 정보 수정

`src/pages/Team.tsx`에서 팀원 정보를 수정하세요:

```typescript
const teamMembers = [
  {
    id: 1,
    name: '이름',
    role: '역할',
    photo: '사진 URL',
    description: '설명',
  },
  // 더 많은 팀원 추가...
]
```

## 🎯 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **React Router** - 클라이언트 사이드 라우팅
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Vite** - 빌드 도구

## 📝 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

