# 김도영 · Frontend Engineer Portfolio

데이터 시각화와 프론트엔드 성능 최적화에 강점을 둔 개발자 **김도영**의 포트폴리오 웹사이트입니다.

🔗 **Live**: https://doyoungkim-portfolio.vercel.app/

## ✨ 주요 섹션

- **Hero** — 프로필 · 핵심 성과 지표(10만+ 데이터 포인트, 60fps, 99%↓ 페이로드)
- **About** — 요약 + 경력·활동 타임라인(시간순) / 현재(Now) 패널
- **Tech Stack** — Languages · Frontend · Backend · DB & Infra (실제 로고)
- **Projects** — GitGalaxy, DevRoad 등 성과 지표 포함
- **Awards · Certs · Education**
- **Contact** — 이메일 · 전화 · GitHub · LinkedIn · Velog · Naver · Instagram

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite 6
- **Styling**: Tailwind CSS v4
- **Font**: Pretendard

## 🚀 실행 방법

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 📁 구조

```
src/
├─ components/   # Navbar, Hero, About, Skills, Projects, Credentials, Contact, Background, Footer
├─ hooks/        # useReveal (스크롤 등장 애니메이션)
├─ data.ts       # 모든 콘텐츠 데이터 (프로필 · 경력 · 프로젝트 · 스킬 …)
├─ App.tsx
└─ index.css     # 테마 토큰 · 애니메이션
public/
└─ logos/        # 기관 · 기술 스택 로고
```

---

© 2026 김도영 · Built with React · TypeScript · Tailwind
