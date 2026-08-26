# minari-design-storybook, 토큰 스펙 (Foundations)

- 선행 자료: 55종 조사
- 상태: 초안. P3~P6에 대한 제안이며 사용자 승인 전임
- 원칙: 모든 규칙은 기계로 검증 가능해야 함. 검증 불가한 규칙은 규칙이 아니라 권고임

---

## P3 토큰 기준 포맷, W3C DTCG

### 결정 제안
토큰 기준은 W3C Design Tokens Community Group(DTCG) 포맷으로 관리

```json
{
 "$schema": "https://tr.designtokens.org/format/",
 "base": {
 "color": {
 "brand": {
 "9": { "$type": "color", "$value": "#3B5BDB", "$description": "solid 배경 기준점
 }
 }
 }
}
```

### 근거
| 근거 | 출처 |
|---|---|
| 55종 중 실사용 사례 확인 | IBM Carbon `packages/themes/src/dtcg/*.json` |
| 2025-10 stable 스펙 | designtokens.org |
|  | 어느 프레임워크 형식으로도 기준을 잡을 수 없음 |
| `$description` 필드로 용도 계약을 토큰에 내장 가능 |  |

### 빌드 파이프라인

```
foundations/tokens/*.dtcg.json ← 기준 (사람이 편집)
 │
 │ Style Dictionary
 ▼
┌───────────────────────────────────────────────────┐
│ generated/ │
│ ├── css/vars.css → shadcn / Base UI │
│ ├── antd/theme.ts → ConfigProvider │
│ ├── mui/theme.ts → createTheme │
│ ├── chakra/config.ts → defineConfig │
│ ├── mantine/theme.ts → createTheme │
│ └── figma/variables.json → Figma Variables │
└───────────────────────────────────────────────────┘
```

선례: 당근 Seed `rootage`(단일 토큰 소스로 React/iOS/Android/Lynx 생성), Toss `@tds/token-utils` codegen

### 검증 필요
- Style Dictionary가 DTCG 포맷을 네이티브 지원하는 버전, 설정 확인 (미확인)
- Figma Variables 쓰기 경로는 MCP write-to-canvas(beta) 와 Tokens Studio 플러그인 두 가지이며 둘 다 검증 필요

---

## P4 네이밍 문법 (BNF)

Polaris식으로 형식 문법 자체를 명문화함. 표기는 `<필수>`, `[선택]`

### 2.1 전체 문법

```bnf
<token> ::= <base> | <semantic> | <component>

<base> ::= "base." <base-cat> "." <key>
<base-cat> ::= "color" | "size" | "opacity" | "font" | "duration"

<semantic> ::= "semantic." <property> "." <role> [ "." <emphasis> ] [ "." <state> ]
<property> ::= "bg" | "fg" | "border" | "icon" | "space" | "radius" | "shadow"
<role> ::= "neutral" | "brand" | "accent"
 | "info" | "success" | "warning" | "danger"
 | "on-" <role> ; 대비 보장용 전경색
<emphasis> ::= "strong" | "default" | "subtle" | "subtlest"
<state> ::= "hover" | "active" | "focus" | "disabled" | "selected"

<component> ::= "component." <comp-name> "." <part> "." <property> [ "." <state> ]
```

### 케이싱, 구분자 규칙 (첫 커밋에 고정)

| 규칙 | 값 |
|---|---|
| 구분자 | `.` (DTCG 계층), 출력 시 어댑터가 변환 |
| 케이싱 | 전부 kebab-case 소문자 |
| 공백 | 금지 (이름 끝 공백 포함) |
| 숫자 접미 | 스케일에만 허용 (`base.color.brand.9`) |

> 고정 이유: 11 Kleros에서 `Primary text`(#333333)와 `Primary Text`(#000000)가 대소문자만 다른데 값까지 달랐음. 10 Toss도 `Spacing/Semantic`과 `spacing/component`로 케이싱이 구분되어 있었음. 나중에 고칠 수 없는 부채임

### 2.3 어댑터 변환 예시

| 기준 | shadcn | Ant Design | MUI |
|---|---|---|---|
| `semantic.bg.brand.strong` | `--primary` | `colorPrimary` | `palette.primary.main` |
| `semantic.fg.on-brand.strong` | `--primary-foreground` | `colorTextLightSolid` | `palette.primary.contrastText` |
| `semantic.bg.danger.subtle` | `--destructive-subtle` | `colorErrorBg` | `palette.error.light` |

매핑이 1:1이 아닌 지점이 있음(프레임워크마다 어휘가 다름). 어댑터별 매핑 표는 별도 문서로 관리하고, 매핑 불가 토큰은 `unmapped`로 명시적으로 기록

---

## P5 팔레트 방법론

### 3.1 12단계 색상과 용도 규칙

번호는 명도가 아니라 용도를 가리킴

| 단계 | 용도 | 근거 |
|---|---|---|
| 1 | 앱 배경 | Radix |
| 2 | 은은한 배경 | |
| 3 | 컴포넌트 배경 (기본) | |
| 4 | 컴포넌트 배경 (hover) | |
| 5 | 컴포넌트 배경 (active/selected) | |
| 6 | 비인터랙션 테두리 | |
| 7 | 인터랙션 테두리 | |
| 8 | 강조 테두리, 포커스 링 | |
| 9 | solid 배경, 기준점 | 가장 순수한 단계 |
| 10 | solid hover | |
| 11 | 저대비 텍스트 | |
| 12 | 고대비 텍스트 | |

이 방식을 쓰는 이유는 한 시스템 안에서 디자이너가 상황마다 어떤 단계를 쓸지 매번 고민하지 않아도 되기 때문임. 단계 번호가 곧 용도라서 팔레트를 추가해도 사용 규칙이 자동으로 따라오는 구조임. Radix, Park UI 등에서 같은 방식이 관측됐음

> 이 방식을 채택하는 이유는 시스템 간 호환이 아님. 20종은 서로 독립이며 교체, 조합의 대상이 아님. 12단계 채택 여부도 시스템마다 자유이며, 각 시스템이 자기 단계 체계의 용도를 문서화하기만 하면 되는 구조임. 상세는 `foundations/QUALITY-RULES.json` 의 `$NON_GOAL` 참고

### 3.2 용도 계약을 토큰에 내장

DTCG `$description` 에 용도를 명시하면 문서와 토큰이 분리되지 않음

```json
"9": {
 "$type": "color",
 "$value": "#3B5BDB",
 "$description": "solid 배경임. 이 단계 위에는 on-{role} 전경색만 사용함
}
```

### 3.3 OKLCH 기반 생성

각 단계의 목표 OKLCH 명도(L)를 고정하고, 색상(H)과 채도(C)만 팔레트마다 변경

효과: 같은 번호면 색상이 달라도 실제 밝기가 같아 리스트에서 얼룩덜룩해 보이는 문제가 해소됨. 근거: 토스가 7년 된 컬러 시스템을 개편하며 채택함. 기존 문제는 같은 100인데 Grey 100, Blue 100, Red 100의 명도가 다 달랐던 것이었음

### 3.4 대비 검증, 2단 방식

USWDS의 grade 매직넘버(차이 40/50/70 = AA Large/AA/AAA)는 USWDS 자체 grade 척도에서 성립하는 규칙임. OKLCH의 L과 WCAG 상대휘도(relative luminance)는 상관은 있으나 동일하지 않아서, OKLCH L 차이를 그대로 대비 등급으로 환산할 수 없음

채택 방식
1. 빠른 필터: 단계 차이로 후보를 거름. 예) "9번 배경 위 텍스트는 1~2번만" 같은 규칙임
2. 실제 검증: WCAG 대비비를 계산해서 통과 여부를 확인함. 이게 실제 게이트임

단계 계약은 설계 편의이고 WCAG 계산은 강제 게이트로 이원화

### 3.5 알파 처리, 3중 방어

| 장치 | 출처 | 역할 |
|---|---|---|
| Opacity 토큰화 (`base.opacity.{n}`) | 08 국내 (11단계) | 임의 알파값 난립 차단 |
| 알파와 사전합성 솔리드 이중 제공 | 08 국내 (`Line/Normal/*` + `Line/Solid/*`) | 유연성(알파)과 대비 검증(솔리드) 양립 |
| 알파 베이스 색 단일화 | 10 Toss 반면교사 | Toss는 `#000c1e`/`#031228`/`#031832`로 드리프트, 베이스 1개로 고정 |

---

## P6 모드 전략

### 4.1 기준 분리

Figma 변수는 컬렉션(collection)마다 모드를 가짐. 따라서 기준을 컬렉션으로 나누면 모드 수 한도를 우회할 수 있음

| 컬렉션 | 모드 | 우선순위 |
|---|---|---|
| `color` | light / dark / high-contrast | 필수 |
| `typography` | default, large (접근성 확대) | 2순위 |
| `density` | comfortable / compact | 3순위 |
| `platform` | desktop / mobile | 4순위 |

근거: 색상만 갖춘 곳이 다수이고, 크기 항목은 Apple만, 플랫폼 항목은 Spectrum만, 색각 항목은 Primer만 갖춤. 3개 항목 이상 갖춘 시스템이 없다는 점이 차별화 지점임

### 4.2 제약 확정, Figma Professional (컬렉션당 4모드)

회사 플랜은 Figma Professional로 확인됨. 컬렉션당 모드 상한은 4개임

배치는 그대로 성립함. 모드는 컬렉션마다 독립적으로 부여되므로 항목을 컬렉션으로 나누면 상한에 걸리지 않음

| 컬렉션 | 모드 수 | 여유 |
|---|---|---|
| `color` | 3 (light / dark / high-contrast) | 1 |
| `typography` | 2 (default / large) | 2 |
| `density` | 2 (comfortable / compact) | 2 |

남은 제약
- 한 컬렉션에 4개를 초과하는 모드가 필요해지면 컬렉션을 쪼개야 함. 예를 들어 색각 이상 테마(Primer는 9종)를 추가하려면 `color`에 넣지 말고 `color-a11y` 별도 컬렉션으로 분리
- 컬렉션 개수 자체의 상한은 미확인임. 컬렉션을 늘려가는 설계이므로 실제 파일에서 한 번 확인할 가치가 있음

### 4.3 모드 불변색 (확정)

```
base.color.static.white ; 모드 전환에도 항상 흰색
base.color.static.black
semantic.bg.brand.fixed ; 다크모드에서도 안 뒤집히는 브랜드 배경
```
근거: 05 Apple(`inverse-static`), 08 국내(`Static/*`), 09 M3(`-fixed` 전체 세트), 10 Toss(`Base/Static/*`). 없으면 다크모드 전환 시 로고 배경 등이 통째로 뒤집히는 문제가 생김

### 4.4 다크모드는 명도 반전이 아님

KRDS는 high-contrast에서 secondary 팔레트를 파랑에서 청록으로 바꾸고, Kleros는 다크모드 배경을 보라 계열로 바꿈. 다크 팔레트를 라이트의 역순으로 자동 생성하지 않고, 모드별 목표 명도를 따로 정의함(APCA 보정과 같은 취지)

---

## 5. 검증 규칙을 자동 검사로 전환

금지 규칙을 CI에서 실행 가능한 형태로 변환

| ID | 검사 | 구현 난이도 |
|---|---|---|
| G1 | 시맨틱 토큰명에 도메인 어휘 금지 | 금지어 사전 대조, 수동 관리 필요 |
| G2 | 시맨틱 토큰명에 색조(hue) 금지. `red`/`orange`/`blue` 등 | 정규식 검증 쉬움 |
| G3 | `semantic.*` 참조 금지 | 참조 그래프 검사 쉬움 |
| G4 | 타이포 토큰명에 수치 금지 | 정규식 검증 쉬움 |
| G5 | 케이싱, 공백 규칙 위반 | 정규식 검증 쉬움 |
| G6 | lineHeight 절대 px 사용 시 실패 처리, 비율만 허용 | `$type` 검사 쉬움 |
| G7 | 병렬 스케일 간 값 완전 중복 금지 | 값 비교 쉬움 |
| G8 | 같은 값에 서로 다른 이름 중복 금지 | 값 비교 쉬움 |
| G9 | `component.*` 에서 `base.*` 직접 참조 금지 | 참조 그래프 검사 쉬움 |
| G10 | 알파 색상의 베이스 hex가 1종인지 | 값 파싱 중간 |

### 추가 게이트(조사에서 도출)

| ID | 검사 | 근거 |
|---|---|---|
| V1 | 모든 semantic.*는 base.* 단계 중 하나와 정확히 일치 필수 | 09 M3의 `sys/dark/primary`=#D0BCFE 와 `ref/primary/80`=#D0BCFF 불일치, 이 검사 하나면 즉시 잡혔음 |
| V2 | 모든 배경/전경 쌍의 WCAG 대비비 계산 통과 | Primer의 MUST/NEVER 표를 자동화 |
| V3 | 모든 컴포넌트가 `wip-` 토큰을 참조하지 않는지 확인 (릴리스 빌드) | 10 Toss의 `wip-` 네임스페이스 |
| V4 | 타이포 composite가 자기 이름과 일치하는 size/lineHeight를 참조하는지 | 07 Claude, 09 M3 에서 실제로 한 단계씩 밀리는 문제가 발생했음 |

> 55종 조사에서 확인된 결함은 모두 최고 수준 팀의 산출물에서 나왔고, 사람의 주의력만으로는 막기 어려움. 20종 곱하기 수백 토큰을 눈으로 다 확인할 수 없어서, 자동 검증 여부가 결과를 좌우하는 요소임

---

## 6. 미결정 사항

| # | 항목 | 비고 |
|---|---|---|
| P1 | 20종 Base/Application/Marketing 배분 비율 | 예: 8/8/4 |
| P2 | 프레임워크별 공식/커뮤니티 등급 | Carbon 선례 참고 |
| P6-a | Figma 모드 수 한도 측정 | 선행 필요 |
| P7 | 파생 비율 원칙 | |
| P8 | 팔레트 개수, 색상 선정 (brand/accent를 몇 개 둘지) | |
| P9 | 기본 서체 확정 (Pretendard 계열 유력) | 한글 측정 필요 |

---

## 7. 다음 실행 순서 (제안)

1. Figma 모드 한도 측정 결과가 전체 설계 방향을 좌우하는 핵심 요소임
2. DTCG 스키마 기본 구조 작성: `foundations/tokens/` 최소 세트
3. 검증 스크립트 구현. 정규식과 그래프 검사만으로 5개 커버
4. Base 층 시스템 1종으로 전체 파이프라인 검증
5. 검증 후 나머지 19종 확장

> 근거: Sparkbox 2022 조사에서 실패 원인 1위가 "빅뱅 런칭"으로 나타남. Nathan Curtis도 reference implementation 1개를 먼저 완성한 뒤 나머지를 정렬하는 방식을 권고함. 20종을 동시에 시작하지 않음
