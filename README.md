# minari-design-storybook

서로 독립적으로 설계된 **20종의 디자인 시스템**과 동일한 컴포넌트 규격을 다양한 UI 라이브러리에 적용하여, 구현 방식과 디자인 토큰의 적용 범위를 한 화면에서 비교할 수 있도록 구성한 프로젝트입니다.

## 무엇을 만든 건가

`01-cobalt`부터 `20-berry`까지 총 20종의 디자인 시스템을 설계했습니다.

하나의 디자인 시스템에 테마만 변경하는 방식이 아니라, 각 시스템이 **독립적인 컬러 체계, Radius, 간격, 컴포넌트 표현 방식과 시각적 특성**을 갖도록 구성했습니다. 시스템 간에 디자인 토큰 값을 공유하지 않으며, 공통으로 적용되는 것은 품질 및 설계 규칙입니다.

또한 동일한 컴포넌트 계약 74종을 shadcn/ui, MUI, Ant Design, Chakra UI, Mantine, Fluent UI, Carbon, Blueprint, Bootstrap, daisyUI, Flowbite, Grommet, HeroUI, Cloudscape, PrimeReact, Primer, Spectrum, Lightning 등 다양한 UI 라이브러리에 적용했습니다.

이를 통해 **동일한 디자인 토큰과 컴포넌트 규격이 각 UI 라이브러리에서 어떻게 표현되고, 어느 범위까지 적용되는지** 직접 비교할 수 있습니다.

## 주요 화면 및 기능

- **컴포넌트 카탈로그** — 74종의 공통 컴포넌트를 디자인 시스템 × UI 라이브러리 조합으로 렌더링하여 비교합니다. 컴포넌트 속성 정보는 수동으로 작성하지 않고 설치된 패키지의 타입 정의를 기반으로 추출합니다.
- **라이브러리 예제 비교** — 각 UI 라이브러리의 컴포넌트 및 예제를 동일한 환경에서 확인하고 비교할 수 있습니다.
- **Usage 대시보드** — UI 라이브러리별로 서로 다른 성격의 제품 화면을 구성하여 디자인 토큰과 컴포넌트가 실제 화면에서 어떻게 조합되는지 확인합니다.
- **디자인 시스템 내보내기** — 선택한 디자인 시스템의 토큰, 테마 및 컴포넌트를 하나의 묶음으로 내보낼 수 있습니다.

## 실행

```bash
npm install
npm run dev # http://localhost:3000
npm run typecheck
npm run test:e2e # Playwright
```

## 구조

```text
app/src/
 App.tsx 해시 라우팅 + 앱 셸(사이드바, 상단바)
 bases/ 라이브러리별 계약 이행부
 contract/ 시스템별 타입 계약 (생성물)
 systems/ 시스템별 진입 모듈 (생성물)
 usage/ 베이스 × usage1, 2, 3 제품 화면
 preview/ 카탈로그, 토큰 표, 라이브러리 예제 비교
 export/ 내보내기 묶음 생성
 ingest/ HTML 에서 컴포넌트 후보 추출
systems/ 20종 DTCG 토큰 원본 + 컴포넌트 CSS
generated/ 시스템별 vars.css, 베이스 테마 산출물
react/ 시스템별 React 컴포넌트 산출물
web/ Next(App Router) 앱 셸
foundations/ 토큰 네이밍 문법, 품질 규칙
```

## 프로젝트 성격

본 저장소는 **포트폴리오 및 기술 시연을 목적으로 구성된 프로젝트**입니다.

여러 서드파티 UI 라이브러리를 하나의 공통 컴포넌트 계약 아래에서 통합하여, 디자인 시스템과 UI 라이브러리의 조합을 비교하고 탐색할 수 있도록 구성했습니다.

각 UI 라이브러리가 제공하는 컴포넌트 자체를 직접 구현한 것이 아니라, **각 라이브러리의 기존 컴포넌트를 공통 계약에 연결하고 디자인 토큰을 적용하기 위한 추상화 계층, 어댑터 및 테마 변환 구조를 설계·구현했습니다.**

본 프로젝트는 명시된 UI 라이브러리 및 제공자와 공식적인 제휴·후원·인증 관계가 없습니다. 라이브러리 및 제품명은 프로젝트에서 사용한 기술과 출처를 명확하게 표시하기 위한 목적으로만 사용합니다.

## 서드파티와 직접 구현의 경계

### 서드파티가 제공하는 영역

- 각 UI 라이브러리의 컴포넌트 구현체 및 컴포넌트 API
- 라이브러리별 스타일링 시스템 및 테마 규격
- 각 제공자가 공개한 문서 및 예제

### 이 프로젝트에서 설계·구현한 영역

- 서로 독립된 20종 디자인 시스템의 토큰 체계 및 설계 규칙
- 다양한 UI 라이브러리를 하나의 컴포넌트 계약 74종으로 연결하는 추상화 계층
- 공통 컴포넌트 계약을 각 UI 라이브러리에 연결하는 어댑터
- 디자인 토큰을 라이브러리별 테마 체계로 변환하는 테마 번역 구조
- 디자인 시스템 × UI 라이브러리 조합을 탐색할 수 있는 컴포넌트 카탈로그
- 설치된 패키지의 타입 정의를 기반으로 컴포넌트 속성 정보를 추출하는 기능
- UI 라이브러리 전환, 검색 및 내비게이션을 포함한 미리보기 환경
- 디자인 토큰, 테마 및 컴포넌트를 묶어 내보내는 기능
- HTML에서 컴포넌트 후보를 추출하는 가져오기 기능
- 디자인 시스템과 UI 라이브러리의 실제 적용을 확인하기 위한 Usage 제품 화면

## 오픈소스 및 서드파티 라이선스

본 프로젝트에서 사용하는 서드파티 컴포넌트, 상표 및 관련 지식재산권은 각 원저작자에게 있으며 각각의 라이선스를 따릅니다.

본 저장소의 라이선스는 서드파티 프로젝트의 라이선스 및 저작권 조건을 대체하거나 변경하지 않습니다. 원본 프로젝트에 포함된 저작권 고지와 라이선스 파일은 해당 조건에 따라 유지합니다.

아래 목록은 `package.json`에 선언되어 있으며 프로젝트 코드에서 실제로 사용되는 주요 제공자를 기준으로 정리했습니다. 라이선스 정보는 설치된 패키지의 LICENSE 및 npm 레지스트리 메타데이터를 기준으로 확인했습니다. *(2026-09-28 기준)*

| 제공자 | 패키지 | 라이선스 | 이 프로젝트에서의 용도 |
| --- | --- | --- | --- |
| Ant Design | `antd`, `@ant-design/icons` | MIT | 컴포넌트 통합, 예제 비교 |
| MUI Core | `@mui/material`, `@mui/icons-material`, `@mui/lab` | MIT | 컴포넌트 통합, 예제 비교 |
| MUI X (Community) | `@mui/x-charts`, `@mui/x-data-grid`, `@mui/x-date-pickers`, `@mui/x-tree-view` | MIT | 달력·표·차트 예제 (상용 Pro/Premium 패키지는 사용하지 않음) |
| shadcn/ui | 소스 복사 방식 (`app/src/components/ui`) | MIT | 컴포넌트 통합, 애플리케이션 UI |
| Chakra UI | `@chakra-ui/react` | MIT | 컴포넌트 통합, 예제 비교 |
| Mantine | `@mantine/*` | MIT | 컴포넌트 통합, 예제 비교 |
| Fluent UI | `@fluentui/react-components` 등 | MIT | 컴포넌트 통합, 예제 비교 |
| Carbon | `@carbon/react` | Apache-2.0 | 컴포넌트 통합, 예제 비교 |
| Blueprint | `@blueprintjs/core`, `@blueprintjs/labs` | Apache-2.0 | 컴포넌트 통합, 예제 비교 |
| Bootstrap | `bootstrap`, `react-bootstrap` | MIT | 컴포넌트 통합, 예제 비교 |
| daisyUI | `daisyui` | MIT | 컴포넌트 통합, 예제 비교 |
| Flowbite | `flowbite-react` | MIT | 컴포넌트 통합, 예제 비교 |
| Grommet | `grommet`, `grommet-icons` | Apache-2.0 | 컴포넌트 통합, 예제 비교 |
| HeroUI | `@heroui/react` | MIT | 컴포넌트 통합, 예제 비교 |
| Cloudscape | `@cloudscape-design/*` | Apache-2.0 | 컴포넌트 통합, 예제 비교 |
| PrimeReact | `primereact` | MIT | 컴포넌트 통합, 예제 비교 |
| Primer | `@primer/react`, `@primer/primitives` | MIT | 컴포넌트 통합, 예제 비교 |
| Adobe Spectrum | `@adobe/react-spectrum` | Apache-2.0 | 컴포넌트 통합, 예제 비교 |
| Salesforce Lightning (SLDS) | `@salesforce-ux/design-system` | 코드·Sass BSD-3-Clause / 아이콘·이미지 CC BY-ND 4.0 | 컴포넌트 통합. 아이콘·이미지는 저장소에 포함하지 않고 설치된 패키지의 원본을 사용 |
| Tailwind CSS | `tailwindcss` | MIT | 스타일 기반 |
| Lucide | `lucide-react` | ISC | 아이콘 |
| Recharts | `recharts` | MIT | 차트 |

자세한 서드파티 라이선스 및 저작권 고지는 [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md)를 참고하세요.

## 설계 원칙

- **코드를 Single Source of Truth로 사용합니다.** 디자인 도구는 코드에서 생성된 결과물을 전달받는 구조로 구성했습니다.
- **생성된 코드를 직접 수정하지 않습니다.** `contract/`, `systems/`, `react/`, `generated/`은 원본 정의를 기반으로 생성됩니다.
- **고대비 환경에서는 배경색뿐 아니라 경계를 함께 사용합니다.** 낮은 대비의 배경, 비활성 상태 및 Track 계열 요소는 시각적 구분을 위해 경계선을 함께 적용합니다.
- **컴포넌트 크기와 내부 여백은 전용 Control Token으로 관리합니다.** 일반적인 Layout Spacing Token과 컴포넌트의 크기 체계를 분리합니다.
- **20종의 디자인 시스템은 서로 독립적으로 유지합니다.** 시스템 간 디자인 토큰 값을 혼합하거나 조합하지 않아 각각의 디자인 언어가 유지되도록 구성했습니다.