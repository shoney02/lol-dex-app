# LOL Dex App = 리그 오브 레전드 정보 앱

LOL Dex App은 리그 오브 레전드 챔피언, 아이템, 로테이션 정보를 제공하는 Next.js 기반 웹 애플리케이션입니다.
Riot API를 활용하여 최신 데이터를 불러옵니다.

배포 URL: lol-dex-app.vercel.app

## 주요 기능
1. 챔피언 목록 조회 - 모든 챔피언 정보를 확인할 수 있습니다.
2. 챔피언 상세 페이지 - 챔피언의 스킬, 능력치, 설명을 제공합니다.
3. 아이템 목록 조회 - 게임 내 모든 아이템 정보를 제공합니다.
4. 챔피언 로테이션 - 이번주 무료 챔피언을 확인할 수 있습니다.
5. 반응형 UI - 다양한 디바이스에서 최적화된 화면을 제공합니다.

## 프로젝트 구조
```
my-riot-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── champions/
│   │   ├── items/
│   │   ├── rotation/
│   │   ├── api/
|   |   ├── fonts/
│   ├── components/
│   ├── providers/
│   ├── types/
│   ├── utils/
│   └── public/
├── .env.local
├── package.json
└── next.config.js
```
## 기술 스택
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind&logoColor=white">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
