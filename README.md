# 🌿 habiFlow

**하비플로(habiFlow)**는 개인 루틴 관리와 감정 추적을 기반으로 한 라이프스타일 매니지먼트 앱입니다.
웹 · 모바일 · 데스크탑 전용 클라이언트를 통합한 모노레포 프로젝트로, AI 루틴 추천과 감정 분석 기능을 지원합니다.

---

## 📆 기술 스택

| Layer         | Tech Stack                                 |
| ------------- | ------------------------------------------ |
| 프론트엔드    | React, Vite, Zustand, React Query          |
| 데스크탑 앱   | Electron + Vite + React                    |
| 모바일 앱     | React Native                               |
| AI 기능       | OpenAI GPT 기반 추천, 감정 배열 등         |
| 모노레포 관리 | pnpm Workspaces, TurboRepo (optional)      |

---

## 📂 프로젝트 구조

```
habiFlow/
├── apps/
│   ├── desktop/     # Electron 기반 데스크탑 앱
│   ├── web/         # 웹 클라이언트
│   └── mobile/      # 모바일 앱 (예정)
├── packages/
│   └── shared/      # 공통 유틸, 타입, 후크 등
├── docs/            # 기술 문서 및 가이드
└── README.md        # 프로젝트 소개 문서 (본 파일)
```

---

## ⚙️ 개발 환경 구성

### 1. 프로젝트 설치

```bash
pnpm install
```

### 2. 전체 개발 서버 실행

```bash
pnpm run dev
```

> 💡 `dev` 스크립트는 `desktop`, `web`, `mobile`을 동시에 실행합니다.

---

## 🏗️ 빌드

```bash
pnpm run build
```

| Command                  | 설명                      |
| ------------------------ | ------------------------- |
| `pnpm run build:desktop` | Electron 데스크탑 앱 빌드 |
| `pnpm run build:web`     | 웹 앱 빌드                |
| `pnpm run build:mobile`  | 모바일 앱 빌드            |

---

## 📚 주요 기능 (계획 포함)

- ***

## 🧚 개발 중 유의 사항

- Electron은 `main.ts` → `dist/main/main.js` 로 빌드됩니다.
- `vite build`는 별도 설정파일(`vite.renderer.config.ts`)을 사용해야 합니다.
- `pnpm` 워크스페이스 기반으로 모든 앱/패키지를 관리합니다.

---

## 📄 라이선스

MIT License\
© 2025 황형래
