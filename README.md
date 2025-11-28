# Questrip - From Trip to Game 🎮✈️

React + Tailwind CSS로 구축된 HCI 프로젝트 포트폴리오 웹사이트입니다.  
여행을 게임으로 만드는 **Questrip** 프로젝트의 모든 과정을 담은 원페이지 웹사이트입니다.

**🌐 Live Demo**: https://hci-website-project.vercel.app/

## 🌟 프로젝트 소개

Questrip은 여행자들이 여행지에서 미션을 수행하며 즐거운 경험을 만들어가는 게임형 여행 플랫폼입니다.  
이 웹사이트는 Questrip의 디자인 프로세스, 프로토타입, 비디오, 팀 정보를 한눈에 볼 수 있는 포트폴리오입니다.

## ✨ 주요 기능

### 📱 원페이지 스크롤 디자인
- **스무스 스크롤**: 네비게이션 클릭 시 해당 섹션으로 부드럽게 이동
- **반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응
- **모던 UI**: Tailwind CSS 기반의 깔끔하고 세련된 디자인

### 🎯 섹션 구성

1. **Home (Hero Section)**
   - Questrip 로고와 태그라인
   - 둥둥 떠다니는 일러스트 이미지
   - 하늘색 그라데이션 배경

2. **Information**
   - 프로젝트 개요 (Project Overview)
   - 문제 정의 (Problem Statement)
   - 타겟 사용자 (Target Users)
   - 주요 기능 (Key Features)
   - 디자인 프로세스 타임라인 (Design Process Timeline)

3. **Documentation**
   - 8개의 프로젝트 문서 (Needfinding, PoV, Concept Video 등)
   - 각 문서마다 썸네일 이미지, PDF 다운로드 기능
   - 페이지 수, 작성일 표시

4. **Prototypes**
   - Hi-Fi 프로토타입 Figma 임베드
   - ZIP 다운로드 및 Figma 링크

5. **Videos**
   - Concept Video (YouTube 임베드)
   - Hi-Fi Demo Video 섹션

6. **Team**
   - 5명의 팀원 정보 (이름, 역할, 사진)
   - Contact Us (이메일, GitHub)

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 16.x 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/9rin/hci-website-project.git
cd hci-website-project

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
hci-project/
├── src/
│   ├── components/
│   │   └── Navbar.tsx          # 고정 네비게이션 바 (스크롤 기반)
│   ├── pages/
│   │   └── Home.tsx            # 메인 페이지 (모든 섹션 통합)
│   ├── App.tsx                 # 메인 앱 컴포넌트
│   ├── main.tsx                # React 진입점
│   └── index.css               # Tailwind CSS + 커스텀 애니메이션
├── public/
│   └── docs/                   # 문서, 이미지, 팀 사진
│       ├── 1.pdf ~ 8.pdf       # 프로젝트 문서 PDF
│       ├── 1.png ~ 8.png       # 문서 썸네일 이미지
│       ├── team1.png ~ team5.png  # 팀원 사진
│       ├── questrip_logo.png   # 로고 이미지
│       └── enjoy.png           # 메인 일러스트
├── index.html
├── package.json
├── tailwind.config.js          # Tailwind 설정
├── postcss.config.js           # PostCSS 설정
├── vite.config.ts              # Vite 설정
└── tsconfig.json               # TypeScript 설정
```

## 🎨 커스터마이징

### 문서 추가/수정

`src/pages/Home.tsx`의 `documents` 배열을 수정하세요:

```typescript
const documents = [
  {
    id: 1,
    title: 'Needfinding',
    pdfUrl: '/docs/1.pdf',
    imageUrl: '/docs/1.png',
    pages: 26,
    date: '2025.09.22',
  },
  // 더 많은 문서 추가...
]
```

PDF와 이미지는 `public/docs/` 폴더에 넣어주세요.

### 팀원 정보 수정

`src/pages/Home.tsx`의 `teamMembers` 배열을 수정하세요:

```typescript
const teamMembers = [
  {
    id: 1,
    name: 'Kyurin Kim',
    role: 'Project Manager & Website Developer',
    photo: '/docs/team1.png',
  },
  // 더 많은 팀원 추가...
]
```

### YouTube 비디오 변경

Concept Video 링크를 변경하려면 `src/pages/Home.tsx`에서:

```typescript
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### Figma 프로토타입 링크 업데이트

Hi-Fi 프로토타입 링크를 변경하려면 `src/pages/Home.tsx`에서:

```typescript
src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL"
```

### 로고 및 이미지 변경

- **로고**: `public/docs/questrip_logo.png` 파일 교체
- **메인 이미지**: `public/docs/enjoy.png` 파일 교체

## 🎯 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Vite** - 빠른 빌드 도구
- **React Router** - 라우팅 (단일 페이지)

## 🎨 디자인 특징

- **커스텀 애니메이션**
  - `animate-float`: 둥둥 떠다니는 효과
  - `animate-fadeIn`: 페이드인 효과
  - `animate-bounce`: 스크롤 인디케이터
  
- **그라데이션 효과**
  - 하늘색 그라데이션 배경
  - 글래스모픽 효과

- **반응형 레이아웃**
  - 모바일 햄버거 메뉴
  - 그리드 시스템 (문서 4x2, 팀원 3-2 배치)

## 🚀 배포

### Vercel 배포 (추천)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 완료!

### Netlify 배포

1. [Netlify](https://netlify.com)에 가입
2. GitHub 저장소 연결
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📧 Contact

- **Email**: youcandoit@ewha.ac.kr
- **GitHub**: https://github.com/9rin/hci-website-project

## 📝 라이선스

이 프로젝트는 이화여자대학교 HCI 수업의 일환으로 제작되었습니다.

---

**Made with ❤️ by Questrip Team**
