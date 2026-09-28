# 서드파티 라이선스 고지

이 저장소는 여러 UI 라이브러리를 한 카탈로그로 묶어 비교하는 포트폴리오, 기술 시연 프로젝트임. 아래 라이브러리의 컴포넌트, 상표, 지식재산권은 각 원저작자에게 있고 각자의 라이선스를 따름. 이 저장소의 라이선스는 그것을 대체하거나 변경하지 않음.

어떤 제공자와도 공식 제휴, 후원, 인증 관계가 없음

## 확인 방법

라이선스는 추정하지 않고 다음 순서로 확인

1. 설치 패키지에 포함된 `LICENSE` / `LICENSE.md`
2. npm 레지스트리 메타데이터 (`npm view <pkg> license`)

버전은 `package.json`의 선언 기준이며, 확인 시점의 배포본 라이선스와 일치함을 확인했음

## 저장소에 포함된 서드파티 콘텐츠

`app/src/preview/*Ref/` 아래에는 각 제공자의 공식 문서 원문과 공식 예제 코드를 미러링한 자료가 들어 있음. 카탈로그에서 제공자별 원본을 나란히 비교하려고 둔 것이며, 원본의 저작권 고지를 지우거나 고치지 않음. 각 자료의 권리는 해당 제공자에게 있음.

저장소에 포함하지 않고 설치본에서 가져다 쓰는 것도 있음

- SLDS 아이콘, 이미지 (CC BY-ND 4.0): `scripts/copy-slds-assets.mjs` 가 `node_modules/@salesforce-ux/design-system` 에서 `web/public/` 으로 복사함. 원본 그대로만 쓰며 변형하지 않음. 저장소에는 포함하지 않음

## 라이브러리별 라이선스

| 제공자 | 패키지 | 선언 버전 | 라이선스 |
| --- | --- | --- | --- |
| Ant Design | `antd` | ^6.6.1 | MIT |
| Ant Design Icons | `@ant-design/icons` | ^6.3.2 | MIT |
| MUI Core | `@mui/material` | ^9.3.1 | MIT |
| MUI Icons | `@mui/icons-material` | ^9.3.1 | MIT |
| MUI Lab | `@mui/lab` | ^9.0.0-beta.8 | MIT |
| MUI X Charts (Community) | `@mui/x-charts` | ^9.12.0 | MIT |
| MUI X Data Grid (Community) | `@mui/x-data-grid` | ^9.12.0 | MIT |
| MUI X Date Pickers (Community) | `@mui/x-date-pickers` | ^9.12.0 | MIT |
| MUI X Tree View (Community) | `@mui/x-tree-view` | ^9.12.0 | MIT |
| shadcn/ui | 소스 복사 (`app/src/components/ui`) | - | MIT |
| Chakra UI | `@chakra-ui/react` | ^3.36.1 | MIT |
| Mantine | `@mantine/core` 외 | ^7.17.8 | MIT |
| Fluent UI | `@fluentui/react-components` | 9.74.6 | MIT |
| Carbon | `@carbon/react` | ^1.115.0 | Apache-2.0 |
| Blueprint | `@blueprintjs/core` | ^6.18.0 | Apache-2.0 |
| Bootstrap | `bootstrap` | ^5.3.8 | MIT |
| React Bootstrap | `react-bootstrap` | ^2.10.10 | MIT |
| daisyUI | `daisyui` | ^5.7.28 | MIT |
| Flowbite React | `flowbite-react` | ^0.12.17 | MIT |
| Grommet | `grommet` | ^2.56.1 | Apache-2.0 |
| HeroUI | `@heroui/react` | ^3.2.4 | MIT |
| Cloudscape | `@cloudscape-design/components` | ^3.0.1365 | Apache-2.0 |
| PrimeReact | `primereact` | 10.9.9 | MIT (PrimeTek) |
| Primer | `@primer/react` | ^38.38.0 | MIT |
| Adobe React Spectrum | `@adobe/react-spectrum` | ^3.47.5 | Apache-2.0 |
| Salesforce Lightning | `@salesforce-ux/design-system` | ^2.264.1 | 코드, Sass BSD-3-Clause / 아이콘, 이미지 CC BY-ND 4.0 |
| Tailwind CSS | `tailwindcss` | ^4.3.3 | MIT |
| Lucide | `lucide-react` | ^1.32.0 | ISC |
| Recharts | `recharts` | ^3.8.0 | MIT |

## MUI X 관련

이 프로젝트는 MUI X 중 Community(MIT) 패키지만 씀. 상용 라이선스가 필요한 Pro, Premium 패키지(`@mui/x-*-pro`, `@mui/x-*-premium`)는 설치하지 않았고 쓰지도 않음.

## 상표

여기 나오는 제품명과 로고는 각 소유자의 상표임. 사용 기술 설명, 제공자 식별, 출처 표시, 기술 비교, 문서화 목적으로만 사용
