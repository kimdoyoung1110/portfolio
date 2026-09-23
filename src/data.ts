export const profile = {
  name: '김도영',
  nameEn: 'Doyoung Kim',
  role: 'Frontend Engineer',
  photo: '/profile.jpeg',
  tagline: '실서비스 커머스를 초기 구축부터 1차 런칭까지 전담한 프론트엔드 개발자',
  summary:
    '슬런치팩토리에서 자사몰 커머스 VeggieVerse를 초기 구축부터 1차 런칭까지 프론트엔드로 전담했습니다(5개 레포 500+ 커밋). 토스페이먼츠 빌링 기반 결제·구독 시스템을 구축하며 결제 실패·품절·타임존 등 돈이 오가는 도메인의 엣지케이스를 설계로 해결했고, CI·테스트·SEO·보안이 없던 프로덕트에 런칭 품질 기준을 세웠습니다. GitGalaxy·DevRoad에서 다진 3D 데이터 시각화·성능 최적화 강점을 실서비스에서 이어가고 있습니다.',
  phone: '010-6655-9883',
  email: 'from.dozero@gmail.com',
  github: 'https://github.com/kimdoyoung1110',
  githubText: 'github.com/kimdoyoung1110',
  links: {
    linkedin: 'https://www.linkedin.com/in/do-young-kim-2823b53aa/',
    velog: 'https://velog.io/@kdy9883/posts',
    naverBlog: 'https://blog.naver.com/ehdud9883',
    instagram: 'https://www.instagram.com/d_zer0.io/',
    techeer: 'https://www.techeer.net/',
    slunch: 'https://slunch.co.kr/',
  },
}

export const interests = ['커머스 · 결제/구독 시스템', '프론트엔드 성능 최적화', '데이터 시각화 · Three.js', 'RAG · LLM']

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
    period: '2026.09 — 현재',
    title: 'Frontend 인턴',
    org: 'TIME Korea',
    kind: 'work',
    ongoing: true,
    href: 'https://korea.time.com/',
    logo: '/logos/timekorea.png',
    points: [
      '글로벌 미디어 TIME의 한국 뉴스 플랫폼 프론트엔드 모노레포 개발 — 슬런치 인턴과 병행',
      '네트워크 최적화 작업 진행 중',
    ],
  },
  {
    period: '2026.05 — 현재',
    title: 'Frontend 인턴',
    org: 'Slunch Factory · 홍대(상수)점',
    kind: 'work',
    ongoing: true,
    href: 'https://slunch.co.kr/',
    logo: '/logos/slunch.png',
    location: '서울 마포구 와우산로3길 38',
    mapUrl: 'https://map.naver.com/p/search/슬런치팩토리%20홍대점',
    points: [
      '자사몰 VeggieVerse B2C 커머스를 초기 구축부터 1차 런칭까지 프론트엔드 전담 — 5개 레포 500+ 커밋',
      '토스페이먼츠 빌링키 기반 정기결제·결제수단 관리 구축, 결제 흐름 재설계로 첫 구독 결제 실패 문제 해결',
      'CI 게이트·vitest 테스트·번들 보안 검증·SEO 구조화 등 런칭 품질 기준을 0에서 수립',
      '운영 관리자·수출 B2B·공장 HACCP 화면과 Spring 백엔드 FOB API까지 서비스 전 영역 기여 (자세히 → Projects)',
      'AI 초개인화 식단 서비스 실증 PoC의 AI 플랫폼 프론트엔드 개발 중 (2026.09 —)',
    ],
  },
  {
    period: '2026.05 — 현재',
    title: '학생연구원',
    org: '인천대학교 인공지능빅데이터센터 연구과제',
    kind: 'research',
    ongoing: true,
    logo: '/logos/inu-mascot.png',
    points: [
      'INU-챗봇 자율운영을 위한 Agent 개발',
      '학칙·규정 문서 기반 RAG 파이프라인 구축, LLM 환각 억제를 위한 학칙 특화 답변 검증 시스템 개발 참여',
      '교내 INTIP 플랫폼 프론트엔드 개발 및 챗봇 UI/UX 구현',
    ],
  },
  {
    period: '2026.03 — 현재',
    title: '인천대학교 앱센터 (App Center)',
    org: '교내 공식 IT 개발 동아리',
    kind: 'community',
    ongoing: true,
    logo: '/logos/appcenter.png',
    points: [
      '교내 공식 IT 서비스(앱/웹) 기획 및 개발 동아리 활동',
      '소셜 서비스 memorIN 백엔드 시니어 — 온프레미스 저사양 서버 대상 API 설계 · 코드리뷰 · 성능 튜닝',
    ],
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
  { logo: '/logos/slunch.png', label: 'Slunch Factory', role: 'Frontend 인턴 · 홍대(상수)점' },
  { logo: '/logos/timekorea.png', label: 'TIME Korea', role: 'Frontend 인턴' },
  { logo: '/logos/inu-mascot.png', label: '인천대 AI·빅데이터센터', role: '학생연구원 · RAG / Agent' },
  { logo: '/logos/appcenter.png', label: '인천대 앱센터', role: 'IT 서비스 개발 동아리' },
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
    period: '2026.05 — 현재',
    tagline: '비건 식단 구독 자사몰(B2C 커머스) — 초기 구축부터 1차 런칭까지 프론트엔드 전담',
    description:
      'AI 기반 비건 식단 구독 푸드테크 스타트업 슬런치팩토리의 자사몰입니다. 스토어·결제·구독·마이페이지의 B2C 커머스부터 운영 관리자, 수출 B2B, 공장 HACCP 화면까지 5개 레포(500+ 커밋)를 전담 개발해 1차 런칭했습니다.',
    achievements: [
      '토스페이먼츠 빌링키 기반 정기결제·결제수단 관리 구축 — 신규 카드 첫 구독 결제가 전부 400으로 실패하던 문제를 발견, 결제 흐름을 "카드 등록 → 주문 생성 → 결제" 순서로 재설계해 해결',
      '품절 상품이 결제까지 진행되던 경로에 재고 재조회 하드 가드 적용 — 조회 실패 시 전체 결제를 오차단하지 않는 fail-open 설계',
      'CI가 전무하던 레포에 typecheck·build·test 차단 게이트 신설, vitest 순수함수 테스트 40케이스 작성',
      '백엔드 오리진의 클라이언트 번들 노출을 빌드 산출물 분석으로 발견 → same-origin 프록시 재구성으로 노출 11건 → 0건, 오픈 SSRF 라우트 제거',
      'canonical 15페이지·sitemap 276 URL·JSON-LD 구조화 데이터 등 SEO 신설, 정적 에셋 290MB Supabase Storage 이관, 한/영 i18n 구축',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Supabase', 'Toss Payments', 'Vitest'],
    repoNote: '사내 비공개 레포',
    live: 'https://slunch.co.kr/',
    role: 'Frontend 전담 (인턴) · Slunch Factory',
  },
  {
    title: 'GitGalaxy',
    emoji: 'GG',
    featured: true,
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
    featured: true,
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
    title: 'memorIN',
    emoji: 'MI',
    logo: '/logos/appcenter.png',
    period: '2026.03 — 현재',
    tagline: '일상 아카이빙 + 통합 메신저 소셜 서비스 — 백엔드 시니어',
    description:
      '인천대 앱센터에서 개발 중인 소셜 서비스입니다. 백엔드 시니어로 온프레미스 저사양 서버 환경을 전제로 API를 설계하고, 팀원 코드리뷰와 성능 튜닝을 담당하고 있습니다.',
    tags: ['Spring Boot 3.5', 'PostgreSQL 18', 'MinIO', 'STOMP'],
    repo: 'https://github.com/inu-appcenter/memorIN',
    role: 'Backend Senior · 인천대 앱센터',
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
  { value: '500+', label: '커밋 — 커머스 자사몰 1차 런칭 전담' },
  { value: '60fps', label: '1,900개 오브젝트 3D 렌더' },
  { value: '99%↓', label: '초기 페이로드 최적화' },
]
