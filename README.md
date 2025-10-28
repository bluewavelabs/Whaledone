# Whaledone MVP Design

칭찬 메시지를 익명으로 주고받을 수 있는 모바일 앱 MVP입니다.
이 프로젝트는 Figma Make를 통해 생성되었으며, 최근 여러 개선 사항이 적용되었습니다.

**원본 Figma 프로젝트**: https://www.figma.com/design/tDm4EzMvzG1reJyIsUQJ5S/Whaledone-MVP-Design

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
```bash
cp .env.example .env.local
```

### 3. 개발 서버 시작
```bash
npm run dev
```

애플리케이션은 `http://localhost:3000`에서 실행됩니다.

### 4. 프로덕션 빌드
```bash
npm run build
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── screens/        # 화면 컴포넌트
│   ├── ui/             # UI 기본 컴포넌트
│   ├── whaledone/      # 커스텀 컴포넌트
│   └── ErrorBoundary.tsx
├── context/            # React Context (상태 관리)
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
│   ├── translations.ts # 다국어 지원
│   └── validation.ts   # 폼 검증
├── config/             # 설정 파일
├── constants/          # 상수 정의
├── styles/             # 글로벌 스타일
├── App.tsx             # 메인 앱 컴포넌트
└── main.tsx            # 진입점
```

## ✨ 주요 기능

- **칭찬 메시지 보내기**: 익명으로 동료에게 칭찬을 보냅니다
- **메시지 수신**: 받은 칭찬을 조회하고 포인트로 잠금 해제
- **통계 분석**: 받은 칭찬의 키워드, 감정 분석 확인
- **다국어 지원**: 한글, 영어, 중국어, 일본어 지원
- **연락처 관리**: 친구 및 동료 추가 및 관리

## 🔧 기술 스택

### Frontend
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Radix UI** - 접근성 높은 컴포넌트

### State Management
- **React Context** - 전역 상태 관리

### Form Validation
- **React Hook Form** - 폼 관리 및 검증

### Icons
- **Lucide React** - 아이콘 라이브러리

## 📝 최근 개선 사항

- ✅ 타입 안전성 강화 (`/src/types/index.ts`)
- ✅ 폼 검증 유틸 추가 (`/src/utils/validation.ts`)
- ✅ 전역 상태 관리 Context 구현 (`/src/context/AppContext.tsx`)
- ✅ Error Boundary 추가 (`/src/components/ErrorBoundary.tsx`)
- ✅ 스타일 상수 정의 (`/src/constants/styles.ts`)
- ✅ 환경 변수 관리 (`/src/config/env.ts`, `.env.example`)
- ✅ 성능 최적화 (useCallback, useMemo)

자세한 내용은 [IMPROVEMENTS.md](./IMPROVEMENTS.md)를 참고하세요.

## 🔐 로그인 정보 (개발용)

현재는 모의 데이터를 사용합니다:
- **이메일**: 아무거나 입력 (검증만 수행)
- **비밀번호**: 6자 이상

## 📱 지원 브라우저

- Chrome (최신)
- Safari (최신)
- Firefox (최신)
- Edge (최신)

## 🤝 기여 가이드

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 문의

문의 사항이 있으시면 이슈를 등록해주세요.

---

**마지막 업데이트**: 2025-10-28
**버전**: 0.1.0
