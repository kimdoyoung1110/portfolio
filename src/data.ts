export const profile = {
  name: '김도영',
  nameEn: 'Doyoung Kim',
  role: 'Frontend Engineer',
  photo: '/profile.jpeg',
  tagline: '실서비스 커머스를 초기 구축부터 1차 런칭까지 전담한 프론트엔드 개발자',
  summary:
    '지금은 TIME Korea에서 글로벌 미디어 TIME의 한국 뉴스 플랫폼 프론트엔드를 맡아, 서버 리전 이전·SEO 개선·야간 Lighthouse CI로 실사용자 LCP 1.4초와 홈 SEO 100점을 만들었습니다. 그전 6개월은 슬런치팩토리에서 자사몰 커머스 VeggieVerse를 초기 구축부터 1차 런칭·운영까지 프론트엔드로 전담했습니다(커밋 620+ · PR 245). 토스페이먼츠 빌링 기반 결제·구독을 만들며 결제 끊김·품절·타임존처럼 돈이 오가는 도메인의 엣지케이스를 설계로 풀었고, CI·E2E·보안·SEO가 없던 프로덕트에 런칭 품질 기준을 세웠습니다.',
  phone: '010-6655-9883',
  email: 'from.dozero@gmail.com',
  github: 'https://github.com/kimdoyoung1110',
  githubText: 'github.com/kimdoyoung1110',
  links: {
    linkedin: 'https://www.linkedin.com/in/doyoung-kim-2823b53aa/',
    velog: 'https://velog.io/@kdy9883/posts',
    naverBlog: 'https://blog.naver.com/ehdud9883',
    instagram: 'https://www.instagram.com/d_zer0.io/',
    techeer: 'https://www.techeer.net/',
    slunch: 'https://slunch.co.kr/',
  },
}

export const interests = ['커머스 · 결제/구독 시스템', '웹 성능 · SEO 최적화', '테스트 자동화 · CI', 'RAG · LLM']

/* ── 경력 타임라인 (최신순) ───────────────────────────── */
export type TimelineItem = {
  period: string
  title: string
  org?: string
  kind: 'work' | 'project' | 'research' | 'community' | 'education'
  ongoing?: boolean
  points: string[]
  href?: string
  logo: string
  location?: string
  mapUrl?: string
}

export const timeline: TimelineItem[] = [
  {
    period: '2026.10 — 현재',
    title: '광클스탑 · Frontend Developer',
    org: '사이드 프로젝트 · gcstop.co.kr',
    kind: 'project',
    ongoing: true,
    href: 'https://gcstop.co.kr',
    logo: '/logos/projects/gcstop.jpg',
    points: [
      '전국 26개 대학 실제 수강신청 화면을 재현한 연습 서비스 프론트엔드',
      '정각 타이밍 연습 · 대학 서버시간 측정 · 실시간 선착순 배틀 화면 (자세히 → Projects)',
    ],
  },
  {
    period: '2026.10',
    title: 'Unibloom · 팀장 · Web',
    org: 'SoftBank Hackathon 2026 in Korea · Team Daisy',
    kind: 'project',
    href: 'https://www.unibloom.cloud',
    logo: '/logos/projects/unibloom.png',
    points: [
      '6인 팀 팀장 — 매일 정기 회의 · 협업 규칙 · 결정 기록으로 팀 운영, 6일간 PR 100+ 머지',
      '같은 앱을 온프레미스 · AWS · Azure · GCP에 동시 배포하는 시스템의 웹 대시보드 전담 (자세히 → Projects)',
    ],
  },
  {
    period: '2026.09 — 현재',
    title: 'Frontend 인턴',
    org: 'TIME Korea',
    kind: 'work',
    ongoing: true,
    href: 'https://korea.time.com/',
    logo: '/logos/timekorea.png',
    points: [
      '서버 함수 리전을 미국 동부 → 서울로 이전, 폰트 CSS 자체 호스팅으로 렌더 차단 제거 — 실사용자 LCP 1.4초 (CrUX · GA4 재점검)',
      '공지 모달 CLS 0.1264 → 0, READ MORE 링크 sr-only 처리로 홈 SEO 92 → 100',
      '무료 Actions 예산 안에서 CI 경량화(워크플로 6 → 3개), 야간 Lighthouse 측정 도입, 린트 에러 18 → 0건',
      'WIRE & RADAR 레일 · 공지 · TIME 본사 서체 적용 등 기능·시안 정합 — PR 56개 · 운영 릴리스 22회 직접 진행, 광고 시스템 제작 중',
    ],
  },
  {
    period: '2026.06 — 현재',
    title: 'LLM 연구',
    org: '인천대학교 글로벌 앱센터',
    kind: 'research',
    ongoing: true,
    logo: '/logos/appcenter.png',
    points: [
      "학사 AI 챗봇 '챗불이'의 공지사항 RAG 데이터 파이프라인 설계·구축 — NVIDIA H100 4장 공유 서버에서 GPU 부하 최소화 중심 설계",
      '규칙 → LLM 2단 판정으로 공지 선별 — 수동 라벨 551건 기준 정확도 98.9%, LLM 호출은 40여 건으로 제한',
      'HWP 표 · 스캔본 · 대용량 안내문 첨부 처리 — 비어 있던 표 478개 → 4개, 요약 대신 원문 청킹으로 전환해 오답 해결',
      '학생 약 3천 명이 쓰는 교내 앱 intip에 연결해 실제 질문 응대 중',
    ],
  },
  {
    period: '2026.07 — 2026.10',
    title: 'CartrAIder · Frontend 전담',
    org: '2026 인천대학교 창의공학설계 · 팀 카트라이더',
    kind: 'project',
    href: 'https://github.com/CartrAIder',
    logo: '/logos/projects/cartraider.png',
    points: [
      '인천대학교 제22회 창의적종합설계경진대회 인기상',
      '스마트 AI 카트 고객·관리자 앱 23개 화면을 React Native(Expo)로 단독 개발 (자세히 → Projects)',
    ],
  },
  {
    period: '2026.05 — 2026.10',
    title: 'Frontend 인턴',
    org: 'Slunch Factory · 홍대(상수)점',
    kind: 'work',
    href: 'https://slunch.co.kr/',
    logo: '/logos/slunch.png',
    location: '서울 마포구 와우산로3길 38',
    mapUrl: 'https://map.naver.com/p/search/슬런치팩토리%20홍대점',
    points: [
      '자사몰 VeggieVerse B2C 커머스를 초기 구축부터 1차 런칭·운영까지 프론트엔드 전담 — 커밋 620+ · PR 245',
      '토스페이먼츠 빌링키 기반 정기결제·결제수단 관리 구축, 서버 권위 금액 모델과 결제 끊김 8가지 상황 대응',
      'CI 게이트 · vitest · Playwright E2E 2트랙 · 번들 보안 검증 · SEO 구조화 등 런칭 품질 기준을 0에서 수립',
      '운영 관리자 · 공장 HACCP 화면, 현대건설 디에이치 방배 AI 초개인화 식단 서비스 실증 PoC의 AI 플랫폼 프론트엔드 개발',
    ],
  },
  {
    period: '2026.03 — 현재',
    title: '인천대학교 앱센터 (App Center)',
    org: '교내 공식 IT 개발 동아리',
    kind: 'community',
    ongoing: true,
    logo: '/logos/appcenter.png',
    points: ['교내 공식 IT 서비스(앱/웹) 기획 및 개발 동아리 활동'],
  },
  {
    period: '2026.03 — 2026.06',
    title: 'GitGalaxy · Frontend Developer',
    org: '팀 프로젝트',
    kind: 'project',
    href: '#projects',
    logo: '/logos/github.svg',
    points: [
      'GitHub 저장소 약 1,900개(10만+ 데이터 포인트)를 Three.js 3D 우주로 실시간 시각화',
      'Web Worker · InstancedMesh로 렌더링 최적화, 60fps 달성 (자세히 → Projects)',
    ],
  },
  {
    period: '2026.02 — 현재',
    title: 'Techeer',
    org: '실리콘밸리 개발자 SW 커리어 그룹',
    kind: 'community',
    ongoing: true,
    href: 'https://www.techeer.net/',
    logo: '/logos/techeer.png',
    points: ['기술 스터디 및 현업 개발자 네트워킹 참여를 통한 개발 역량 강화'],
  },
  {
    period: '2025.12 — 2026.01',
    title: 'DevRoad · Frontend Developer',
    org: '2025 Techeer Winter BootCamp 팀 프로젝트',
    kind: 'project',
    href: '#projects',
    logo: '/logos/github.svg',
    points: [
      '채용 트렌드 · 모의 면접 서비스 프론트엔드 개발',
      '번들 최적화로 TBT 72%↓, 페이로드 99%↓ (자세히 → Projects)',
    ],
  },
  {
    period: '2025.12 — 2026.01',
    title: '2025 Techeer Winter BootCamp',
    org: 'Techeer',
    kind: 'education',
    logo: '/logos/techeer.png',
    points: ['팀 프로젝트 기반 실무 개발 사이클 경험 및 협업 능력 배양'],
  },
  {
    period: '2023.01 — 2026.02',
    title: '수학강사',
    org: '대성N학원 아산탕정분원',
    kind: 'work',
    logo: '/logos/daesung.png',
    points: ['학생 대상 맞춤형 학습 지도, 복잡한 개념을 쉽게 설명하는 커뮤니케이션 역량 배양'],
  },
]

/* ── 현재 진행 중 (Now) ───────────────────────────────── */
export const now = [
  { logo: '/logos/timekorea.png', label: 'TIME Korea', role: 'Frontend 인턴' },
  { logo: '/logos/projects/gcstop.jpg', label: '광클스탑', role: '사이드 프로젝트 · Frontend' },
  { logo: '/logos/appcenter.png', label: '인천대 글로벌 앱센터', role: 'LLM 연구 · RAG 파이프라인' },
  { logo: '/logos/techeer.png', label: 'Techeer', role: 'SW 개발자 커리어 그룹' },
  { logo: '/logos/inu.png', label: '인천대학교 컴퓨터공학부', role: '재학 중 · 2029.02 졸업 예정' },
]

/* ── 기술 스택 (실제 로고) ────────────────────────────── */
export type SkillCategory = {
  title: string
  note?: string
  skills: { name: string; logo: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: '/logos/tech/javascript.svg' },
      { name: 'TypeScript', logo: '/logos/tech/typescript.svg' },
      { name: 'Python', logo: '/logos/tech/python.svg' },
      { name: 'Java', logo: '/logos/tech/java.png' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', logo: '/logos/tech/react.svg' },
      { name: 'Next.js', logo: '/logos/tech/nextdotjs.svg' },
      { name: 'Tailwind CSS', logo: '/logos/tech/tailwindcss.svg' },
      { name: 'TanStack Query', logo: '/logos/tech/reactquery.svg' },
      { name: 'Three.js', logo: '/logos/tech/threedotjs.svg' },
      { name: 'Vitest', logo: '/logos/tech/vitest.svg' },
      { name: 'Figma', logo: '/logos/tech/figma.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', logo: '/logos/tech/spring.svg' },
      { name: 'Django REST', logo: '/logos/tech/django.svg' },
    ],
  },
  {
    title: 'DB & Infra',
    skills: [
      { name: 'PostgreSQL', logo: '/logos/tech/postgresql.svg' },
      { name: 'Supabase', logo: '/logos/tech/supabase.svg' },
      { name: 'Docker', logo: '/logos/tech/docker.svg' },
      { name: 'AWS', logo: '/logos/tech/aws.svg' },
      { name: 'GitHub Actions', logo: '/logos/tech/githubactions.svg' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    skills: [
      { name: 'Sentry', logo: '/logos/tech/sentry.svg' },
      { name: 'Prometheus', logo: '/logos/tech/prometheus.svg' },
      { name: 'Grafana', logo: '/logos/tech/grafana.svg' },
      { name: 'Loki', logo: '/logos/tech/loki.svg' },
    ],
  },
]

/* ── 프로젝트 ─────────────────────────────────────────── */
export type Project = {
  title: string
  emoji: string
  logo?: string
  featured?: boolean
  period?: string
  tagline: string
  description: string
  achievements?: string[]
  tags: string[]
  repo?: string
  repoNote?: string
  live?: string
  role: string
}

export const projects: Project[] = [
  {
    title: 'VeggieVerse',
    emoji: 'VV',
    logo: '/logos/slunch.png',
    featured: true,
    period: '2026.05 — 2026.10',
    tagline: '비건 식단 구독 자사몰(B2C 커머스) — 초기 구축부터 1차 런칭·운영까지 프론트엔드 전담',
    description:
      'AI 기반 비건 식단 구독 푸드테크 스타트업 슬런치팩토리의 자사몰입니다. 스토어·결제·구독·마이페이지의 B2C 커머스부터 운영 관리자, 공장 HACCP 화면까지 프론트엔드를 사실상 혼자 맡아 1차 런칭하고 운영했습니다(커밋 620+ · PR 245).',
    achievements: [
      '토스페이먼츠 빌링키 기반 정기결제·결제수단 관리 구축 — 신규 카드 첫 구독 결제가 전부 400으로 실패하던 문제를 발견, 결제 흐름을 "카드 등록 → 주문 생성 → 결제" 순서로 재설계해 해결',
      '금액 결정 권한을 서버에만 두는 Server-Authoritative 구조로 전환, 결제창 이탈·새로고침·재시도·토큰 만료 등 결제가 끊기는 8가지 상황을 보상 처리와 멱등성으로 방어',
      '품절 상품이 결제까지 진행되던 경로에 재고 재조회 하드 가드 적용 — 조회 실패 시 전체 결제를 오차단하지 않는 fail-open 설계',
      'CI가 전무하던 레포에 typecheck·build·test 차단 게이트 신설, Playwright E2E 2트랙(PR smoke · 야간 4개 브라우저 118개 시나리오) 구축으로 CI 12분 47초 → 2분 59초',
      '백엔드 오리진의 클라이언트 번들 노출을 빌드 산출물 분석으로 발견 → same-origin 프록시 재구성으로 노출 11건 → 0건, Safari 전용 Hydration Error 36건 원인 규명',
      'canonical 15페이지·sitemap 276 URL·JSON-LD 구조화 데이터 등 SEO 신설, 정적 에셋 290MB Supabase Storage 이관, 한/영 i18n 구축',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Supabase', 'Toss Payments', 'Playwright', 'Vitest'],
    repoNote: '사내 비공개 레포',
    live: 'https://slunch.co.kr/',
    role: 'Frontend 전담 (인턴) · Slunch Factory',
  },
  {
    title: 'TIME Korea',
    emoji: 'TK',
    logo: '/logos/timekorea.png',
    featured: true,
    period: '2026.09 — 현재',
    tagline: '글로벌 미디어 TIME의 한국 뉴스 플랫폼 — 성능 · SEO · CI 자동화 · 디자인 정합',
    description:
      '뉴스 플랫폼 korea.time.com의 프론트엔드 인턴으로 성능·SEO 개선, 무료 GitHub Actions 예산 안의 CI 자동화, TIME 본사 서체와 디자인 시안 정합, 신규 기능 개발을 맡고 있습니다. PR 56개를 올리고 운영 릴리스 22회를 직접 진행했습니다.',
    achievements: [
      '서버 함수가 미국 동부(iad1)에서 돌며 서울 API를 부를 때마다 태평양을 두 번 건너던 구조를 발견, 서울(icn1) 리전으로 이전 · 이미지 AVIF 활성화',
      'SEO/GEO 외부 리뷰 대응 — main 랜드마크 복구, 본문 이미지 최적화, 폰트 CSS 자체 호스팅으로 렌더 차단 1,299ms · 1,004ms 제거, GA4 web-vitals 수집. 한 달 뒤 CrUX·GA4로 재점검해 실사용자 LCP 1.4초 확인',
      '공지 모달 이중 렌더로 생긴 홈 CLS 0.1264 → 0, READ MORE 링크를 5가지 방법으로 실측해 sr-only로 해결하며 홈 SEO 92 → 100',
      '월 2,000분 무료 Actions 한도 안에서 가짜 체크 삭제·라벨러 통합으로 워크플로 6 → 3개, Vercel 프리뷰와 중복되는 게이트 계획을 취소해 예산 여유 53% → 72%',
      '야간 Lighthouse 측정 도입 — 같은 코드에서 점수 33점·LCP 5.3초가 흔들리는 것을 확인해 안정 지표만 실패 기준으로 채택, 준비 중 운영 9.9MB GIF 발견',
      'WIRE & RADAR 홈 레일 · 공지 · 어드민 프로필 1:1 크롭 개발, TIME 본사 서체를 영문 서브셋 웹폰트(14~23KB)로 자체 호스팅 · 광고 시스템 제작 중',
    ],
    tags: ['Next.js', 'React', 'Vercel', 'GitHub Actions', 'Lighthouse CI', 'GA4 · CrUX'],
    repoNote: '사내 비공개 레포',
    live: 'https://korea.time.com/',
    role: 'Frontend 인턴 · TIME Korea',
  },
  {
    title: '광클스탑',
    emoji: 'GS',
    logo: '/logos/projects/gcstop.jpg',
    featured: true,
    period: '2026.10 — 현재',
    tagline: '우리 학교 실제 화면으로 미리 해보는 수강신청 연습 · 전국 대학생과 실시간 선착순 배틀',
    description:
      '학교마다 수강신청 화면이 다르고 실전 기회는 한 학기에 한 번뿐이라는 문제에서 출발한 연습 서비스입니다. 전국 26개 대학의 실제 화면을 재현하고, 정각 타이밍 연습 · 대학 서버시간 측정 · 2분마다 열리는 실시간 선착순 배틀을 제공합니다. 프론트엔드를 맡아 계속 운영하고 있습니다.',
    achievements: [
      '전국 26개 대학 실제 수강신청 화면과 팝업 순서를 재현, 서버 지연(없음~심함) 선택과 0.01초 단위 완료 기록',
      '정각 클릭 타이밍 연습 — 내 네트워크 지연을 반영해 몇 ms 빠르고 늦었는지 판정',
      '2분 주기 라운드의 실시간 선착순 배틀 — SSE로 잔여석·랭킹 실시간 갱신, 메달·대학 대항 점수',
    ],
    tags: ['React 19', 'TanStack Query', 'Tailwind CSS', 'SSE'],
    repoNote: '팀 비공개 레포',
    live: 'https://gcstop.co.kr',
    role: 'Frontend · 사이드 프로젝트',
  },
  {
    title: 'CartrAIder',
    emoji: 'CA',
    logo: '/logos/projects/cartraider.png',
    featured: true,
    period: '2026.07 — 2026.10',
    tagline: '기존 카트에 붙이고 스마트폰을 화면으로 쓰는 스마트 AI 카트 — 창의적종합설계경진대회 인기상',
    description:
      '카트에서 바코드를 찍으면 앱 장바구니에 바로 반영되고, 앱에서 결제한 뒤 AI 출구 게이트에서 결제 내역과 대조하는 스마트카트입니다. 인천대 창의공학설계 팀 카트라이더에서 고객용 모바일 앱과 관리자 화면, 프론트엔드 전체를 맡았습니다.',
    achievements: [
      'React Native(Expo)로 고객·관리자 화면 23개 단독 개발',
      'SSE 기반 실시간 장바구니 — 1회용 티켓 인증, 버전 번호로 늦게 도착한 옛 스냅샷이 최신을 덮어쓰지 않게 처리',
      '토스페이먼츠 WebView 결제와 출구 게이트 QR 연동',
      '일반/노약자 모드를 화면 한 벌 + 디자인 토큰 전환으로 구현 (글자 · 터치 영역 · 대비 · 그리드 · 음성 안내)',
      '지도 애니메이션 성능 개선, 상품 이미지 전송량 68MB → 1.4MB',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'SSE', 'Toss Payments'],
    repo: 'https://github.com/CartrAIder',
    role: 'Frontend 전담 · 팀 카트라이더',
  },
  {
    title: 'Unibloom',
    emoji: 'UB',
    logo: '/logos/projects/unibloom.png',
    featured: true,
    period: '2026.10',
    tagline: '환경만 고르면 같은 앱을 온프레미스 · AWS · Azure · GCP에 동시에 — SoftBank Hackathon 2026',
    description:
      'SoftBank Hackathon 2026 in Korea에 Team Daisy로 참가해 6일간 만든 원터치 멀티 배포 시스템입니다. AI가 환경별 Terraform을 만들고 검증하면 사람이 plan을 승인해 같은 이미지를 4개 환경에 배포하고, digest·커밋·헬스체크로 동일성을 확인합니다. 6인 팀의 팀장과 웹 대시보드를 맡았습니다.',
    achievements: [
      '클라우드 경험 없이 6인 팀 팀장 — 매일 정기 회의, 협업 규칙, 결정 기록으로 팀 운영',
      '6일간 팀 PR 100+ 머지, 같은 이미지를 AWS · Azure · GCP · 온프레미스에 배포해 4곳 digest · 커밋 · 헬스체크 4/4 일치',
      '웹 대시보드 전담 — Figma 디자인 시스템부터 명세 · 목업 · 실서버 연동, SSE 실시간 진행 표시',
      '같은 조건으로 다시 배포하면 검증된 스크립트를 재사용해 AI 호출 0회',
    ],
    tags: ['React 19', 'Vite', 'TypeScript', 'SSE', 'Terraform', 'Jenkins'],
    repo: 'https://github.com/Softbank-Hackathon-2026-Team-Daisy',
    live: 'https://www.unibloom.cloud',
    role: '팀장 · Web · Team Daisy',
  },
  {
    title: 'GitGalaxy',
    emoji: 'GG',
    period: '2026.03 — 2026.06',
    tagline: 'GitHub 저장소 약 1,900개 · 10만+ 데이터 포인트를 3D 우주로 실시간 시각화',
    description:
      'GitHub 오픈소스 저장소 약 1,900개를, 커밋·이슈·스타 등 10만 개 이상의 데이터 포인트와 함께 Three.js 기반 3D 우주공간으로 실시간 시각화하고, GH Archive 이벤트 스트림 기반 활성도 점수와 LLM 트렌드 분석을 제공하는 서비스입니다.',
    achievements: [
      '약 1,900개 저장소(커밋·이슈·스타 등 10만+ 데이터 포인트)를 활성도·건강도 점수 기반 3D 웜홀로 시각화, 저활성 저장소 블랙홀 파티클 이펙트 구현',
      '약 1,900개 오브젝트의 매 프레임 물리 연산이 메인 스레드를 블로킹해 프레임 드랍 발생 → Web Worker 분리 + ArrayBuffer transferable 통신으로 60fps 달성',
      '개별 Mesh 렌더링 시 약 1,900회 GPU draw call 발생 → InstancedMesh 단일 draw call로 통합 (N회 → 1회)',
      '물리 연산 상태 변경이 전체 리렌더를 유발 → Zustand를 도메인별 독립 store로 분리, 리렌더를 유발하지 않는 상태 아키텍처 설계',
    ],
    tags: ['React', 'TypeScript', 'Three.js', 'react-three-fiber', 'Zustand', 'TanStack Query', 'Vite', 'Sentry'],
    repo: 'https://github.com/kimdoyoung1110/gitgalaxy',
    live: 'https://frontend-three-delta-41.vercel.app',
    role: 'Frontend Developer · 팀 프로젝트',
  },
  {
    title: 'DevRoad',
    emoji: 'DR',
    logo: '/logos/projects/devroad.png',
    period: '2025.12 — 2026.01',
    tagline: '개발자의 커리어 결정·성장을 돕는 채용 트렌드 & 모의 면접 서비스',
    description:
      '채용 트렌드와 AI 모의 면접으로 개발자의 커리어 결정과 성장을 돕는 서비스입니다. 1만 건 이상의 채용 데이터를 시각화하고 프론트엔드 성능 병목을 집중적으로 개선했습니다.',
    achievements: [
      '카카오맵 SDK·Recharts가 초기 번들에 포함(TBT 360ms, LCP 1.9s) → next/dynamic 분리로 TBT 100ms(72%↓), LCP 1.3s(32%↓)',
      '채용 공고 전체(2,102건)를 한 번에 fetch해 초기 페이로드 1,049kB → useInfiniteQuery 전환으로 10.6kB(99%↓), 응답 속도 26ms(79%↑)',
      '1만 건 이상 데이터를 Recharts 시계열 차트·대시보드로 시각화, 기간(7/30/90일) 필터 및 직군별 비교 UI 구현',
      '토큰이 localStorage·Zustand에 이중 저장되는 버그와 CustomEvent 기반 통신 안티패턴을 Zustand 전역 상태로 단일화',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'Recharts'],
    repo: 'https://github.com/kimdoyoung1110/DevRoad',
    role: 'Frontend Developer · 팀 프로젝트',
  },
  {
    title: 'AI Job Chat',
    emoji: 'AI',
    logo: '/logos/projects/ai-job-chat.svg',
    tagline: 'AI 상사와 대화하며 직업을 체험하는 진로 탐색 서비스',
    description:
      '학생이 AI 상사와 대화하며 다양한 직무를 가상으로 경험하고, 대화 분석으로 직무 적성 점수를 받는 풀스택 서비스. JWT 인증과 Gemini API를 활용했습니다.',
    tags: ['React 19', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Gemini'],
    repo: 'https://github.com/kimdoyoung1110/ai-job-chat',
    role: '풀스택 (FE + Spring)',
  },
  {
    title: 'Instagram Clone',
    emoji: 'IG',
    logo: '/logos/instagram.svg',
    tagline: '인스타그램 클론 — Frontend & REST API',
    description:
      '인스타그램 핵심 기능을 클론. 프론트는 React·TypeScript, 백엔드는 Spring Boot로 회원·게시물·댓글·좋아요 도메인을 도메인 주도 구조로 설계하며 클린 아키텍처를 학습했습니다.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'JPA', 'MySQL'],
    repo: 'https://github.com/kimdoyoung1110/instagram-clone-api',
    live: 'https://github.com/kimdoyoung1110/FrontEnd',
    role: 'Frontend + Backend API',
  },
  {
    title: 'Coding Test',
    emoji: 'CT',
    logo: '/logos/projects/programmers.png',
    tagline: '백준 · 프로그래머스 알고리즘 풀이 기록',
    description:
      '백준 온라인 저지 풀이를 자동으로 푸시하며 알고리즘과 CS 기초 체력을 꾸준히 다지는 저장소입니다.',
    tags: ['JavaScript', 'Algorithm', 'Baekjoon'],
    repo: 'https://github.com/kimdoyoung1110/coding-test',
    role: '개인 학습 기록',
  },
]

/* ── 수상 · 자격증 · 학력 ─────────────────────────────── */
export const awards = [
  {
    date: '2026.10',
    title: '인천대학교 제22회 창의적종합설계경진대회 인기상',
    desc: '팀 카트라이더(CartrAIder) — 스마트 AI 카트 고객·관리자 앱 프론트엔드 담당',
    logo: '/logos/projects/cartraider.png',
  },
  {
    date: '2023.12',
    title: '인천대학교 SW 소모임 성과발표 우수상',
    desc: "인천대학교 기초교육원 주관 '파이썬 Django를 활용한 웹 프로그래밍 개발' 과정 우수상 수상",
    logo: '/logos/inu.png',
  },
]

export const certifications = [{ date: '2025.12.20', title: 'OPIc IM2', logo: '/logos/opic.svg' }]

export const education = [
  {
    period: '2023.03 — 2029.02 (예정)',
    title: '인천대학교 컴퓨터공학부',
    desc: '학사 과정 재학 중',
    logo: '/logos/inu.png',
  },
]

export const stats = [
  { value: '620+', label: '커밋 — 커머스 자사몰 런칭 전담' },
  { value: '1.4s', label: '실사용자 LCP — TIME Korea' },
  { value: '92→100', label: '홈 SEO 점수 — TIME Korea' },
]
