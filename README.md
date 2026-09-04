# minari-design-storybook

> 이 프로젝트는 `Design System` 에서 이름이 바뀌었음
> 옛 이름으로 남아 있는 것은 회사를 가리키는 위치뿐이고, 그 표현은 그대로 맞음.

특정 서비스에 국한되지 않는 범용 Atomic 디자인시스템 약 20종을, 여러 컴포넌트 철학을 조사한 뒤 자체 신규 산출물로 만드는 프로젝트임

> 20종의 의미: 20개는 각각 완전히 독립된 디자인시스템임. 저마다 다른 컬러 스키마와 다른 컴포넌트 체계를 가지며, 하나를 층으로 나눈 것이 아님
>
> 절대 하지 말 것: 20종을 서로 교체, 호환, 조합 가능하게 만드는 것은 명시적 비목표임. 공유하는 것은 값이 아니라 품질 규칙뿐이며 코딩 컨벤션에 가까움

---

> 진행 상황, 미결 항목, 다음 세션 진입 프롬프트가 모두 여기 있음
>
> 보장이 없음(33, 34는 다른 흐름임). 디렉토리를 `ls`로 보고 `workstream`을 확인할 것
>
> 요구사항 해석이 정정된 상태임. 20종은 컴포넌트 베이스가 서로 다름
> 바깥 UI 라이브러리에 의존하지 않는다는 이전 방침과 달리, 지금은 바깥 UI 라이브러리에 의존하는 구조임
>
> 손으로 고치지 말고 생성기를 수정
>
> 컴포넌트 문서 항목은 이름(설명), 마스터 컴포넌트, 자식 아이템, 프로퍼티스 네 가지임
>프로퍼티스 표는 손으로 작성하지 않음
> `api` 에서 `app/src/contract/{시스템}/api.json` 으로 나옴
> 무엇이 구현됐는지는 직접 기록하지 않고 `app/src/bases/{베이스}/` 의 파일 존재 여부로 판별했음
> 같은 컴포넌트가 시스템에 따라 켜지거나 꺼지는 구조임
> 측정 결과 shadcn 68종, 나머지 다섯 베이스는 `Button`, `Dialog` 2종씩임
>
> 산술로 막혀 있음. 배경과 3:1인 면 위에는 흰 글자로도 6.92:1이라 기준(7:1)을 못 넘음
> 그래서 subtle 면, disabled, 트랙류가 모든 모드에서 선으로 표시됨(라이트 1.44:1, 거의 안 보임)
>
> 크기 여백은 `pad.control-*` 에서 옴. `space.*` 는 레이아웃용이라 세 단계를 만들 수 없음

## 실행

보는 곳은 미리보기 앱 하나임

>기준은 Next 앱이고 HTML은 그것을 따라가지 못하는 복사본이었음
>
> 제거 과정에서 검증기 셋의 검사 대상이 함께 사라질 뻔했으나 옮겨서 복구
> 해당 내용은 아래 검증기가 못 잡은 것 항목에 있음

### 미리보기 앱 (Next)

```bash
npm install
npm run dev # http://localhost:3000
```

왼쪽에서 베이스, 시스템(색), 화면 순서로 고름. 주소가 `#/{베이스}/{시스템}/{화면}` 형태라 보고 있는 화면을 그대로 링크로 줄 수 있음

자세한 규칙은 아래 React 앱 섹션에 있음

컴포넌트 1개는 화면 1개임. 한 화면에 전부 쌓지 않음. Button을 보러 왔는데 Table을 스크롤해서 지나가야 하는 상태를 피하기 위함임

> `app/src/preview/pages/*.tsx` 가 그 표본이며 직접 쓴 파일임
> `app/src/systems/*.tsx` 와 `app/src/contract/` 는 생성물이라 직접 수정하면 사라지는 문제가 있음

### 토큰 파이프라인

```bash
# 베이스 테마는 generated/{system}/base/ 로 함께 나가는 구조임
```

16단계 전부 통과해야 함. 순서가 고정되어 있어 앞 단계가 실패하면 뒤 단계는 낡은 입력을 보게 됨. 한 번에 실행하려면:

```bash
for s in gen_systems validate_tokens build_tokens check_css_refs check_chrome_scope \
 check_attribution check_markup check_api check_voice check_geometry \
 check_role_distance check_typography check_hc_surface \
 gen_contract gen_system_modules gen_react; do
done
```

파이프라인은 `app/src/contract/`와 `app/src/systems/*.tsx`를 재생성하는 구조임. 개발 서버를 켠 채 돌리면 재생성 중이라 컴파일이 파일을 못 찾아 `ENOENT`가 뜨는 것이며, 끝난 뒤 새로고침하면 해결 가능

### React 앱

프레임워크는 Next (App Router) + TypeScript임

```bash
npm install
npm run dev # http://localhost:3000
npm run typecheck
npm run build
npm run start # 빌드한 것을 그대로 띄움
```

next 를 터미널에 직접 실행하지 않음. 전역 명령이 아니라 node_modules/.bin/next 에 있는 명령이라 직접 실행하면 zsh: command not found: next 오류가 남는 구조임. npm run 이 그 폴더를 PATH 앞에 추가해줄 때만 이름이 정상적으로 인식되는 구조임

> `> next dev web --webpack` 으로 그대로 출력됨. 그 줄은 복사해 쓰라는 뜻이 아님
> 직접 실행해야 하면 `npx next dev web --webpack` 사용

dev는 아직 `--webpack`이고 build만 Turbopack임. `import css from "...css?raw"`를 Turbopack이 에러 없이 undefined로 처리해 두 번들러를 분리해 둔 것이며, 지문 기준값이 dev 화면에서 찍히기 때문에 번들러를 바꾸면 값이 달라질 수 있음

돌고 있는 서버가 어느 쪽인지는 다음처럼 확인. 경로에 공백이 있어 `ps aux` 결과는 잘리는 문제가 있음

```bash
ps -o command= -p $(pgrep -f "next dev web")
```

컴포넌트는 시스템별이 아니라 베이스별임. 20×71이 아니라 6×71임. 시스템은 베이스 하나를 고르고 자기 토큰을 얹음

6 × 71 은 목표치이지 현재값이 아님

| 베이스 | 구현 | 남은 것 |
|---|---|---|
| shadcn | 68 / 71 | `chip` · `meter` · `stat` |
| MUI, Ant Design, Chakra UI, Mantine, 자체 | 2/71개씩 | `Button`, `Dialog` 만 있음 |

세는 기준은 수동 기록이 아니라 `app/src/bases/{베이스}/`의 파일 존재 여부임. 파일을 추가하는 순간 표가 저절로 낡으므로 숫자가 의심되면 직접 확인 필요

```bash
for d in app/src/bases/*/; do echo "$(basename $d): $(ls $d*.tsx | grep -vi registry | wc -l)"; done
```

```
app/src/
 contract/{시스템}/, 생성물. api(ctx) 가 기준임. 타입만 있고 아무것도 import 하지 않음
 bases/{베이스}/, 손으로 작성. 그 라이브러리로 계약을 이행함
 systems/{시스템}.tsx, 베이스 하나, 계약 타입, 자기 테마. 레지스트리에 1줄 추가
```

동작(포커스 가둠, ESC, 키보드 이동)은 베이스 라이브러리가 제공함. `npm run dev` 로 띄운 뒤 Dialog 를 열어 보면 시스템마다 다른 구현이 동작하는 것을 확인할 수 있음. HTML 문서 쪽은 고정된 예시라 이게 보이지 않음

파이프라인 각 단계의 상세는 별도 문서에 있음

### CSS, Tailwind 가 어디까지인가

두 층이 한 화면에 있고 서로 다른 방식으로 스타일링되어 있음. 이를 뭉뚱그리면 디자인시스템이 Tailwind로 만들어졌다는 잘못된 인상을 줄 수 있음

| 층 | 방식 | 어디 |
|---|---|---|
| 셸(사이드바, 상단바)과 shadcn 베이스 | Tailwind CSS v4 + shadcn/ui | `app/src/**` |
| 20종 산출물: 컴포넌트 CSS, 토큰 | 순수 CSS, `var` 토큰 사용. Tailwind 아님 | `systems/` · `generated/` |

`systems/`, `generated/` 전체에 `@apply` 와 `@tailwind` 가 하나도 없음. 산출물은 다른 프로젝트가 그대로 가져다 쓰는 것이라, Tailwind 설치가 필수 조건이면 프레임워크에 종속되는 문제가 있음

배선

```
app/src/app.css @import "tailwindcss" ← 기준
web/app/globals.css 위 항목을 가져오고 @source 로 훑을 대상을 지정함
```

`@source "../../app/src"` 삭제 금지. Tailwind v4 는 `@source` 가 없으면 CSS 파일 위치를 기준으로 훑는데, `globals.css` 가 `web/` 에 있어서 클래스가 붙어 있는 `app/src/` 를 보지 않음. `hidden`, `fixed` 같은 기본 유틸리티조차 생성되지 않고 에러 없이 조용히 무효임

레이어 순서를 미리 고정해 둠. app.css 첫 줄이 `@layer mantine, reset, tokens;` 인 이유이며, Chakra, Mantine 이 런타임에 레이어를 새로 선언하면서 Tailwind 유틸리티를 이겨 화면 구조가 깨진 적이 있기 때문임. 자세한 내용은 해당 파일 상단 참고

### React 산출

컴포넌트마다 `api(ctx)` 로 기계가 읽는 구조 선언을 가짐. 문서, CSS, React 가 그 선언 하나를 함께 보므로 변형을 늘리면 셋이 함께 늘어남. 한쪽만 고치면 검증에서 검출

```
api(ctx) ──┬── gen_systems.py → 컴포넌트 CSS, SYSTEMS.md
 ├── gen_contract.py → app/src/contract/{시스템}/api.json (미리보기 속성 표)
 ├── gen_react.py → react/{시스템}/components/*.tsx
 └── check_api.py → S4 (선언, CSS 양방향 대조)
```

> 같은 선언이 이제 CSS, 계약, React 셋으로 나감

### 컴포넌트 베이스

시스템마다 컴포넌트 베이스가 다름. 이것이 9번째 기준임. 새 프로젝트는 20종 중 하나를 고르는 순간 색과 컴포넌트 기반을 함께 고르는 것임

| 베이스 | 시스템 | 산출물 |
|---|---|---|
| shadcn/ui | Cobalt · Teal · Saffron | `generated/{s}/base/theme.css` |
| MUI | Plum · Indigo · Violet · Navy · Berry | `theme.ts` (`createTheme`) |
| Ant Design | Graphite · Slate | `theme.ts` (`ConfigProvider`) |
| Chakra UI | Jade · Azure | `theme.ts` (`defineConfig`) |
| Mantine | Ember · Emerald · Moss · Mint | `theme.ts` (`createTheme`) |
| 자체 | Sand · Crimson · Rust · Fog | - |

산출물은 자기 베이스를 반드시 밝힘. HTML, CSS 에는 import 문이 없어서 적지 않으면 확인할 방법이 없음. 자동 검사가 이를 기계 검증하며, 자기 베이스 이름은 통과시키고 다른 이름은 막음

왜 20종이 각자 다른 라이브러리가 아닌지는 미리보기 앱에서 베이스를 바꿔 가며 같은 컴포넌트를 눌러 보면 알 수 있음 (`npm run dev` 실행 후 왼쪽 위에서 베이스 전환).

> props 목록조차 다름 (variant, role 개수가 시스템마다 다름)
> 한쪽 컴포넌트를 다른 쪽 `vars.css` 와 함께 쓰면 변수가 하나도 풀리지 않음

> `gen_systems.py` 는 독립된 산출물 20벌을 만듦. 생성기를 공유하는 것은 컴파일러를 공유하는 것과 같아서 결과물끼리는 관계가 없음

---

## 구조

```
│ ├── 00-SYNTHESIS.md ★ 채택 패턴, 금지 규칙, 미결 쟁점 종합
│ ├── 01~11/ Figma MCP 측정
│ └── web/ 웹 리서치
├── DEPENDENCIES.md 외부 라이브러리 사용, 미사용 목록 확인
├── foundations/ 규칙만 있고 토큰 값은 여기 없음
│ ├── TOKEN-SPEC.md 네이밍 문법, 팔레트 방법론, 모드 전략
│ └── QUALITY-RULES.json 금지, 검증 규칙 + $NON_GOAL(교체 가능성 명시적 배제)
├── systems/ 20종, 각각 독립
│ ├── SYSTEMS.md 20종 요약표 (자동 생성)
│ └── 01-cobalt/ 독립 시스템 #1 (슬러그는 임시)
│ ├── tokens/ 이 시스템 고유의 DTCG 기준
│ └── components/ 71종. 이 시스템 고유의 값이 들어간 CSS
│ └── button/button.css
├── react/ React 어댑터 산출물은 생성물이므로 손으로 고치지 않음
│ └── 01-cobalt/
│ └── styles.css 이 시스템 vars + 컴포넌트 CSS 일괄 처리
├── app/src/ 미리보기 앱이 앱의 기준임
│ ├── App.tsx 해시 라우팅과 기본 구조(사이드바, 상단바). 기본 구조는 shadcn으로 고정됨
│ ├── app.css 스타일 기준
│ ├── bases/{베이스}/, 손으로 작성. 그 라이브러리로 계약을 이행함
│ ├── contract/{시스템}/, 생성물. 타입만 있고 아무것도 import 하지 않음
│ ├── systems/{시스템}.tsx, 생성물. 베이스 하나, 자기 vars.css
│ ├── components/ui/ shadcn/ui 원본. 공식 CLI 가 넣는 위치임
│ ├── preview/ 화면 구성, 토큰 표, 공식 참조 문서 뷰어
│ └── raw-modules.d.ts `?raw` · `.css` 임포트 타입임. 지우면 타입 에러 88개 발생
├── web/ Next(App Router) 구조만 있고 화면 코드는 여기 없음
│ ├── app/layout.tsx antd Registry · 문서 제목
│ ├── next.config.ts `?raw` webpack 규칙, 별칭
│ └── postcss.config.mjs Tailwind 배선. 없으면 유틸리티가 조용히 무효화되는 문제가 있음
│ ├── components/ 컴포넌트 레지스트리, 새 컴포넌트는 파일 추가와 1줄 작성으로 등록
│ │ └── _api.py API 선언 어휘
│ ├── bases/ 베이스별 테마 산출기 (shadcn, MUI, antd, Chakra, Mantine)
│ ├── fixtures/ `ui-baseline.json`, UI 지문 기준값임
│ │ 측정 도구는 라이트 64종(`capture`) + 모드 8종(`captureModes`)을 측정함
│ │ · 재촬영 대기
│ ├── ui_fingerprint.js 그 지문을 측정하는 도구. UI가 바뀌지 않았음을 기계적으로 증명함
│ └── doc_shapes.py 문서 조각의 자료 모양 셋
│ HTML 문서층과 함께 삭제
└── generated/ 생성물. 시스템별로 분리되어 있으며 직접 편집 금지
 └── 01-cobalt/vars.css
```

시스템끼리 공유하는 값은 없음. `generated/`도 하나로 합치지 않음

app/ 과 web/ 은 합치지 않음. Next 를 저장소 루트에 세우면 app/ 을 App Router 디렉토리로 오인하기 때문에, web/ 에는 최소 구조만 두고 소스는 app/src 를 그대로 가리킴. 복사하면 두 벌이 되어 반드시 한쪽이 낡음

---

## 핵심 원칙

| # | 원칙 | 근거 |
|---|---|---|
| 1 | 20종은 서로 독립: 값 공유 없음, 조합 없음 |  |
| 2 | 시스템마다 토큰 기준 1벌 (`systems/{N}/tokens/*.dtcg.json`) | 프레임워크 중립(shadcn/Ant/MUI/Chakra 어디에도 종속되지 않음) |
| 3 | 코드가 기준, Figma는 산출물 | 단방향 구조라 드리프트가 구조적으로 발생하지 않음 |
| 4 | 3계층 구조: `Base`, `Semantic`, `Component` 순서 | 경로 접두로 계층 위반을 기계 검증 |
| 5 | 하드코딩 0 | 컴포넌트 CSS의 모든 색상이 토큰 `var` 참조임(1px, transitions 같은 구조값은 리터럴) |
| 6 | 금지 규칙 자동 검증 | 55종 조사에서 확인한 결함은 전부 세계 최고 수준 팀의 산출물에서 나왔음. 사람의 주의만으로는 막을 수 없음 |
| 7 | 컴포넌트 추가는 파일 1개와 레지스트리 1줄 | 생성기, 검증기, 빌더는 컴포넌트 이름을 모름 |
| 8 | 베이스는 9번째 항목. 시스템마다 컴포넌트 기반이 다르고 산출물이 그것을 밝힘 | 적지 않으면 알 방법이 없음 |
| 9 | 산출물은 그 자체로 완결된 설명임 | 외부 출처를 인용하지 않음. 규칙은 제작자가 명시한 그대로 따르며, S2가 이를 강제하는 조건임 |

> 출처는 산출물에 적지 않음
> "KRDS를 따랐다", "M3 방식이다" 같은 표현을 페이지, CSS, 토큰 어디에도 쓰지 않음
> 참고한 내용은 별도 문서에만 남기며, 배포되지 않음
> 접근성 요구도는 표준 이름 대신 수치로만 표기함(예: 대비 7:1 이상)
> 유일한 예외는 Lucide 로, 따르는 규칙이 아니라 제작자가 지정한 아이콘 자산의 출처임

### 검증기가 실제로 잡은 것

- light 모드에서 Radix 9단계 기본값을 그대로 썼더니 solid 배경 2건이 WCAG AA 기준에 못 미쳤음(3.30, 3.91). 색을 어둡게 조정해 해결했음
- dark 모드에서 `on-{role}` 이 흰색으로 고정되어 대비가 기준에 못 미쳤음(4.32, 3.91). 팔레트에 `contrast` 토큰을 도입해(M3 `sys/dark/on-primary` 방식) 대비를 7.24~8.81 로 해결했음
- 컴포넌트 확장 시 Skeleton 의 `line-height` 토큰이 실제로는 플레이스홀더 막대의 높이였던 문제가 있었음. 이름과 실제 의미가 다른 상태를 자동 검사가 잡아내 `bar-height` 로 이름을 바꿨음

### 검증기가 못 잡은 것과 그래서 만든 검증기

- 체크박스가 원으로 렌더링되는 문제가 있었음. `radius.control`(8px)이 상자(16px)의 정확히 절반이라 발생했는데, 토큰 참조, 대비, 명명 규칙 검사는 모두 통과했지만 두 토큰의 비율이 만드는 형태는 어떤 규칙도 확인하지 않았음. 이후 같은 유형의 문제가 한 번 더 나와 자동 검사로 검증에 반영했음

- Menu 안쪽 모서리가 바깥보다 각졌던 문제가 있었음. 안쪽 값을 바깥과 무관한 토큰에서 가져와 발생했고, Menu 를 가진 7종 중 4종이 어긋났음. 안쪽 값을 바깥에서 여백을 뺀 값으로 계산하도록 고치고 자동 검사로 검증에 반영했음
- `checkbox`에 radio를 modifier로 넣음. 다중 선택과 단일 선택은 다른 컴포넌트인데 스타일 차이로 격하한 것임. 값이 아니라 분류의 문제라 정적 검사 대상이 아니었음
- Breadcrumb 높이가 1519px 로 커지는 문제가 있었음. 문서 크롬의 `nav { height:100vh }` 가 컴포넌트의 `<nav>` 를 덮어썼고, 클래스 접두 분리에도 선택자가 경계를 지키지 않았음. 자동 검사로 검증에 반영해 문서 크롬만 통과하도록 고쳤음

- Card 에 확인/취소 버튼 쌍이 있었음. Dialog 의 어포던스가 Card 에 섞여 있어 Dialog 를 별도 컴포넌트로 분리하고 Card 에서 동작 영역을 제거했음. 자동 검사로 검증에 반영: 확인 버튼은 버튼 그룹의 마지막(오른쪽)에 두고, 버튼 그룹은 하단 오른쪽에 정렬하며, Card 에는 결정 버튼을 두지 않음

- 컴포넌트를 React 로 옮길 방법이 없었던 문제가 있었음. 모듈이 내보내던 것은 문서용 HTML 문자열이라 prop 과 클래스 정보가 코드 어디에도 없어 컴포넌트를 두 번 만들어야 했음. `api(ctx)` 선언을 모듈 계약에 추가하고 자동 검사로 선언과 CSS 를 대조 검증했음

- UI 문구의 말투가 섞여 있는 문제가 있었음. 37종 중 12종의 표본 문구가 합니다체와 한다체로 섞여 있었음. 컴포넌트 안에 들어가는 글은 해요체로 통일하고 자동 검사로 검증에 반영했음. 문서 설명문(`.doc-*`)은 한다체 그대로 두고 검사 대상에서 제외했음

- Toast 배경이 너무 진해 글자가 묻히는 문제가 있었음. 9단계 solid 바탕에서는 알림 내용보다 색이 먼저 읽혀, 옅은 바탕과 같은 계열 테두리로 바꿔 색은 종류만 알리도록 했음. 대비는 light 6.40:1, dark 6.21:1, 고대비 12.41:1 로 확인됐음. 되돌리기 링크도 본문과 같은 색으로 바꾸고 밑줄로 링크임을 표시했음

- `role` prop 이 표준 `role` 속성의 위치를 대신 차지하는 문제가 있었음. 팔레트의 의미 색을 `role` 이라 부르고 그대로 prop 으로 받아 `<Button role="tab">` 이 `ods-btn--tab` 을 붙이고 ARIA role 이 사라졌음. 타입 검사는 통과해 컴파일러가 잡아주지 못하는 부류였음. prop 이름을 `tone` 으로 바꾸고 검증했음

- Prose 표본의 `<h2>` 에 없어야 할 밑줄이 있었던 문제가 있었음. 앱 셸의 `.doc-section h2 { border-bottom: 1px … }` 선언이 미리보기 컴포넌트 안까지 적용되며 특이도가 같아 뒤 선언이 덮이지 않았음. `.doc-section > h2` 로 직계 자식만 겨냥하도록 고치고 관련 검증을 이 파일로 옮겼음

Breadcrumb 1519px 과 같은 부류의 두 번째임. 첫 번째는 HTML 문서 크롬이, 두 번째는 React 앱 셸이 냄. 셸이 바뀌어도 결함은 따라오기 때문에 검증을 없애지 않고 새 셸로 옮김

- 검증기 세 개가 대상이 0개여도 통과로 표시하는 문제가 있었음. HTML 문서층을 걷어내자 검증기들의 검사 대상이 전부 사라졌는데도 통과로 표시됐음. 셋 다 React 로 옮기고 대상 0개는 실패로 처리하도록 바꿨음. 말투 검사 정규식이 합니다체 의문형을 놓치고, 마크업 순서 검사 표시가 React 코드엔 없던 문제도 함께 발견했음

- 같은 일을 하는 컴포넌트가 둘이었음. `Dialog`가 `tone`(성격)과 표시를 갖고 있었는데 그건 `AlertDialog`가 이미 하는 일이라 이름이 아니라 역할이 겹친 것이었고, 그 대가로 여섯 베이스가 전부 표시 배선을 손으로 물고 있었음. `Dialog`는 범용 모달로 되돌리고 확인창은 `AlertDialog` 하나가 담당하도록 정리해 토큰이 시스템당 54에서 27로 줄었음

검증기가 못 잡는 부류임. 값, 이름, 마크업이 다 맞아도 두 컴포넌트가 같은 일을 한다는 것은 선언을 나란히 놓고 읽어야만 보임

지금 검증기는 값과 이름에 더해 선택자 경계, 출처, 마크업 순서, API 선언, 문구 말투, 값 사이의 관계까지 확인. 다만 렌더 결과를 봐야만 알 수 있는 부분은 남아 있고, 색의 세기가 읽기를 방해하는지는 아직 사람이 봐야 알 수 있음

---

## 현재 진행

| 단계 | 상태 |
|---|---|
| 레퍼런스 조사, 종합 (55종) | |
| 설계 결정 | |
| 토큰 스펙, 품질 규칙 | |
| 검증기, 빌더 (시스템 단위) | |
| 20종 정의 및 생성: 팔레트, 형태, 밀도, 타이포, elevation, control 전부 다름 | |
| 컴포넌트 세트 (P11), Core 9개와 Signature 1~3개, 시스템당 10~12종 | |
| 컴포넌트 확장과 API 선언. 레지스트리 71종이며 20종 모두 71종을 동일하게 가지고 있음 | |
| React 어댑터: `api(ctx)` 를 통해 `react//*.tsx` 1,420개 생성 (20 × 71) | |
| 미리보기 앱, 컴포넌트가 실제로 동작하는 화면(해시 라우팅) | |
| Next 이관: Vite 제거, UI 지문 50개 경로 일치 | |
| antd 공식 문서 전수. 72종, 7그룹. 직접 만들지 않고 antd 것을 그대로 사용 | |
| shadcn 베이스 68/71 | |
| 나머지 베이스(MUI, Ant, Chakra, Mantine, 자체)는 각각 2/71 (`Button`, `Dialog`) | ⬜ |
| Storybook story | ⬜ |
| 정적 트레이싱 프레임 문서 | ⬜ |
| Figma Agent 프롬프트 생성기 | ⬜ |

react/ 어댑터에 타입 에러 200건 존재. tsconfig.json 의 include 가 app/src 로 좁아지면서 react/ 가 검사 범위에서 빠졌기 때문임

20종 상세: `systems/SYSTEMS.md` (자동 생성)

### 컴포넌트

- Core 15종: 20종 전부에 있음. `button` `link` `input` `select` `checkbox` `radio` `switch` `badge` `card` `dialog` `alert` `toast` `tooltip` `spinner` `divider`
- Signature 4~5종은 시스템 성격에서 파생되는 항목임. 후보 22종: `table` `tabs` `breadcrumb` `toolbar` `stepper` `banner` `progress` `stat` `avatar` `chip` `prose` `meter` `skeleton` `menu` `segmented` `slider` `accordion` `stages` `pagination` `empty` `pageheader` `listrow`

이름이 같다고 값이나 구조를 공유한다는 뜻은 아님

아래 쌍들은 서로 다른 컴포넌트이며 합치지 않음. 헷갈리는 지점마다 구분해 둔 것이고, 합치자는 제안이 나오면 그 자체가 재발 신호임

| 구분해 놓은 것 | 다른 점 |
|---|---|
| `checkbox` ↔ `radio` | 여럿을 고르는가, 하나만 고르는가 |
| `card` ↔ `dialog` | 내용을 묶는 컨테이너, 흐름을 멈추고 결정을 받는 창 |
| `button` ↔ `link` | 실행, 이동 (뒤로 가기 동작 여부) |
| `alert` ↔ `banner` ↔ `toast` | 고정 위치, 상단 고정, 자동 소멸 |
| `spinner` ↔ `progress` ↔ `skeleton` | 끝을 모름, 끝을 앎, 올 것의 모양을 앎 |
| `select` ↔ `menu` | 고르는 대상이 값인지 동작인지 |
| `tabs` ↔ `segmented` ↔ `accordion` | 내용 변경, 보는 방식 변경, 여러 개 동시 표시 |
| `slider` ↔ `meter` | 값을 정하는 것과 값을 읽는 것 |
| `stepper` ↔ `stages` | 수량을 바꾸는 방식과 단계를 보여주는 방식의 차이 |
| `table` ↔ `listrow` | 열 단위로 의미 부여, 줄 단위로 의미 부여 |
| `toolbar` ↔ `pageheader` | 동작이 주인공, 제목이 주인공 |

### 미결
- Base/Application/Marketing을 어떻게 쓸지 결정 필요: 시스템 내부 계층, 분류 라벨, 미사용 중 하나
- 시스템 이름 확정 필요 (`cobalt`, `ember` 등은 임시로 붙인 작업명)
- 완료 기준(원자토큰, 컴포넌트, Storybook story) 중 story 항목 미충족
- 한글 행간, 자간 정량 기준은 공개 자료 없음. `prose` 의 값은 경험칙이며 측정 근거가 없음
- 새 컴포넌트 15종의 조건 문구는 임의 판단이며 이 프로젝트에서 검증된 바 없음
- `react/` 어댑터 1,420개가 타입 검사를 아예 안 받고 있음. `tsconfig.json`의 `include`가 `app/src`와 `generated/*/base/*.ts`뿐이라 `react/`는 한 파일도 검사 대상이 아니고(`tsc --listFiles`로 확인, 0개) 가져다 쓰는 곳도 없음. 따로 돌려보니 에러 200건, 20 시스템 × 10건으로 전부 같은 원인임

 | 무엇 | 값 |
 |---|---|
 | 에러 코드 | 전부 `TS2322` |
 | 영향 파일 | 180 / 1,420 |
 | 컴포넌트 | `Breadcrumb`(2) `Alert` `Badge` `Collapsible` `Inputotp` `Nativeselect` `Select` `Tabs` `Toast` |

원인은 생성기 한 곳임. `<svg ref={ref}>` 를 찍으면서 타입은 `React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>` 를 붙이는데, SVG 는 `SVGSVGElement` 라서 타입이 안 맞음. 생성기를 고치면 200건이 함께 해결됨

고치기 전에 `react/`를 검사 범위에 다시 포함 필요. 안 그러면 수정 여부를 확인할 수 없고 다음에 또 조용히 깨지는 문제가 있음
- `react/` 산출물은 실제로 렌더해 본 적이 없음. 미리보기 앱은 `app/src/bases/`를 렌더하고 `react/`는 별개 산출물이므로 구분 필요
- `api(ctx)` 는 클래스와 속성을 다룸. 열고 닫는 동작(Menu, Tooltip, Dialog)은 쓰는 쪽 몫임
- 컴포넌트 모듈 71개에 사용되지 않는 코드가 남아 있음. `sections`, `props` 는 이미 사라진 `page_tpl.render` 만 호출하고 있었음. 753곳에 걸쳐 있어 한꺼번에 제거하면 같은 파일의 `api`, `css` 도 영향을 받아 이번 변경과 분리했음. 남은 위치는 별도 문서 머리말에 기록했음
- Mantine 베이스가 스타일 없이 렌더링되는 문제가 있었음. 로드된 CSS 에 Mantine 관련 규칙이 없고 레이어 목록에도 `mantine` 이 없어 Modal 과 Button 이 스타일 없이 표시됐음. `app.css` 의 레이어 선언과 스타일 임포트가 실제로 적용되는지 아직 확인되지 않았음
- 검사 대상이 20개 파일에서 2개 파일로 줄어든 사례: 그 20개는 같은 표본이 시스템 수만큼 복제된 것이라 덮는 범위는 같지만, 베이스를 늘리면 표본도 함께 늘려야 함. 지금은 `Alertdialog` 가 shadcn 에만 있어 베이스별 대조가 되지 않음
