# minari-design-storybook

서로 독립된 디자인시스템 20종을 만들고, 같은 컴포넌트 계약을 20개 UI 라이브러리로 각각 구현해 한 화면에서 비교하는 프로젝트임

## 만든 것

디자인시스템 하나를 테마로 바꿔 쓰는 방식이 아님. `01-cobalt` 부터 `20-berry` 까지 20종이 처음부터 따로 설계됐고, 색 체계도 모서리, 여백 감각도 전부 다름. 공유하는 건 값이 아니라 품질 규칙뿐임

여기에 항목을 하나 추가. 같은 컴포넌트 계약(74종)을 shadcn/ui, MUI, Ant Design, Chakra, Mantine, Fluent, Carbon, Blueprint, Bootstrap, daisyUI, Flowbite, Grommet, HeroUI, Cloudscape, PrimeReact, Primer, Spectrum, Lightning 라이브러리로 각각 구현. 같은 토큰이 라이브러리마다 어디까지 적용되는지 확인할 수 있음

## 화면

- 컴포넌트 카탈로그, 74종을 시스템과 베이스 조합으로 표시함. 속성 표는 손으로 쓰지 않고 설치된 패키지의 타입 정의에서 뽑음
- 라이브러리 예제 비교, 라이브러리 19종의 공식 예제를 저장소 안에서 비교
- Usage 대시보드, 베이스마다 성격이 다른 제품 화면 3벌씩 구성. 토큰이 실제 제품에서 어떻게 맞물리는지 확인
- 내보내기: 선택한 시스템의 토큰, 테마, 컴포넌트를 함께 추출

## 실행

```bash
npm install
npm run dev # http://localhost:3000
npm run typecheck
npm run test:e2e # Playwright
```

## 구조

```
app/src/
 App.tsx 해시 라우팅과 기본 구조(사이드바, 상단바)
 bases/ 라이브러리별 계약 이행부
 contract/ 시스템별 타입 계약 (생성물)
 systems/ 시스템별 진입 모듈 (생성물)
 usage/ 베이스 × usage1, 2, 3 제품 화면
 preview/ 카탈로그, 토큰 표, 라이브러리 예제 비교
 export/ 내보내기 그룹 생성
systems/ 20종 DTCG 토큰 기준 + 컴포넌트 CSS
generated/ 시스템별 vars.css, 베이스 테마 산출물
react/ 시스템별 React 컴포넌트 산출물
web/ Next(App Router) 구조
foundations/ 토큰 네이밍 문법, 품질 규칙
```

## 설계에서 지킨 것

- 코드가 기준임. 디자인 툴은 산출물을 받아 가는 쪽임
- 생성물은 손으로 고치지 않음. `contract/`, `systems/`, `react/`, `generated/`는 전부 생성된 것임
- 고대비 모드는 면 대신 선으로 구분. 옅은 면 위에서는 흰 글자 대비가 부족하기 때문임
- 크기 여백은 컨트롤 전용 토큰에서 옴. 레이아웃 간격 토큰으로는 sm, md, lg 세 단계가 안 나옴
- 20종을 서로 교체하거나 조합하지 않음. 값을 섞으면 20종이 한 시스템의 변형으로 무너지는 문제가 있음
