# 외부 라이브러리, 무엇을 쓰고 무엇을 쓰지 않는가

이 문서는 이 프로젝트가 남의 코드를 어디에서 쓰는지를 한 곳에 모은 것임. 쓰지 않는다는 사실도 함께 적음, 적어 두지 않으면 다음 사람이 다시 찾아야 하기 때문임.


---

## 결론

시스템마다 컴포넌트 베이스가 다름. 고른 시스템에 따라 설치할 것이 달라지는 구조임

| 베이스 | 시스템 | 설치할 패키지 |
|---|---|---|
| shadcn/ui | Cobalt · Teal · Saffron | `tailwindcss` |
| MUI | Plum · Indigo · Violet · Navy · Berry | `@mui/material` `@emotion/react` `@emotion/styled` |
| Ant Design | Graphite · Slate | `antd` |
| Chakra UI | Jade · Azure | `@chakra-ui/react` |
| Mantine | Ember · Emerald · Moss · Mint | `@mantine/core` `@mantine/hooks` |
| 자체 | Sand · Crimson · Rust · Fog | 없음 |

각 시스템의 테마 파일은 `generated/{시스템}/base/` 에 있음

> shadcn/ui는 컴포넌트를 npm으로 설치하지 않고 소스를 복사해 사용
> Tailwind 없이는 아무것도 표시되지 않음

### 저장소 자체 의존성

두 층의 사정이 다름

| 층 | 외부 의존 |
|---|---|
| 파이썬, 토큰, 검증, 테마 생성 담당 | 0개. 표준 라이브러리만 사용 |
| `app/` (React 미리보기) | 여섯 베이스를 실제로 렌더링해 봐야 하므로 전부 설치 |

미리보기의 셸(사이드바, 상단바)은 shadcn/ui 하나로 고정임. 그래서 `@base-ui/react`, `class-variance-authority`, `tailwind-merge`, `lucide-react`는 20종 중 무엇을 고르든 앱에 들어 있음. 셸의 의존성이지 산출물의 의존성이 아님

`package.json` 은 저장소 루트에 있음. 거기 적힌 것은 미리보기가 사용하는 것이고, 산출물을 가져다 쓰는 프로젝트는 표에서 선택한 시스템의 줄만 설치하면 되는 구조임

#### 미리보기 전용, 공식 예제를 세우기 위한 것

antd 화면의 Examples 섹션은 공식 예제를 그대로 구현함. 그 예제 코드가 antd 본체 외에 두 패키지를 더 불러오는데, antd 공식 문서 사이트가 자기 예제에 쓰는 것들임

| 패키지 | 어느 예제가 쓰나 |
|---|---|
| `antd-style` | Color & Variant(`useResponsive`) · Gradient Button · Custom semantic dom styling(`createStyles`) |
| `@ant-design/happy-work-theme` | Custom Wave(`HappyProvider`) |

위 표의 `Ant Design` 줄은 `antd` 하나임. 예제를 보여주기 위한 것이지 산출물이 요구하는 것은 아니며, 산출물(`generated/{시스템}/base/antd/theme.ts`)은 `antd` 만 있으면 동작하는 구조임. 적어 두는 이유는 나중에 설치 이유를 확인할 수 있어야 하기 때문임

`@ant-design/icons` 는 의도적으로 사용하지 않음. 예제 원본은 이를 사용하지만 이 프로젝트는 Lucide 밖의 아이콘을 화면에 올리지 않는 것이 전역 규칙임. `node_modules` 에 있는 것은 antd 자체의 의존이며, 이 저장소 코드에서 import 하는 곳은 없음

---

## 실제로 기대는 것

| 대상 | 어디서 | 어떤 관계인가 |
|---|---|---|
| React | `react/*/components/*.tsx` | peer dependency임. 쓰는 쪽이 이미 갖고 있는 것을 사용함. 이 저장소는 설치하지 않음 |
| Lucide 아이콘 | 컴포넌트 안의 `<svg>` | 패키지를 설치하지 않음. 경로 데이터만 옮겨 적었고 런타임 의존이 없음 |
| TypeScript | 타입 검사할 때만 | 산출물에 포함되지 않음. 검사는 프로젝트 밖에서 실행 |

React 는 생성된 `.tsx` 가 `import * as React from "react"` 하므로 쓰는 쪽에 필요함. 그 외에는 아무것도 요구하지 않음

---

## 접점 하나, shadcn/ui 이름 관례

`generated/{시스템}/vars.css` 끝에 호환용 별칭 블록이 추가됐음

```css
/* @interop 호환 별칭임. shadcn/ui 의 CSS 변수 이름 관례를 따름 */
--primary : var(--semantic-bg-brand-default);
--primary-foreground : var(--semantic-fg-on-brand-default);
--destructive : var(--semantic-bg-danger-default);
…
```

shadcn/ui 를 사용하는 구조가 아니라 shadcn/ui 쪽에서 토큰을 가져다 쓸 수 있는 구조임

- 이 저장소가 shadcn/ui 를 가져다 쓰는 것은 아님
- shadcn/ui 로 만든 화면이 토큰을 그대로 쓸 수 있게 열어 둔 구조임

기준은 `--semantic-*` 이고, 별칭은 그것을 가리키기만 함. 별칭을 지워도 시스템은 그대로 동작

> Chakra `defineConfig` / Mantine `createTheme`)는 아직 만들지 않았음
> 만들게 되면 같은 방식임. 그쪽 형식으로 내보내는 것이지 가져다 쓰는 것이 아님

---

## 다시 확인하는 방법

```bash
# 의존성 선언 파일 존재 여부
find . -name "package.json" -o -name "requirements.txt" -o -name "pyproject.toml"

# React 산출물의 import 대상 확인 (react 와 ./cx 만 있어야 함)
grep -rhoE '^import .* from "[^"]+"' react/ | grep -oE '"[^"]+"' | sort | uniq -c

# 산출물 안에 라이브러리 이름 포함 여부 확인
```

---

## 5. 왜 쓰는가


20종은 각자 다른 컴포넌트 체계를 가짐. 색만 다른 20종은 한 시스템의 테마 20벌이지 20종이 아니므로, 베이스가 아홉 번째 항목이 되었음

동작(포커스 가둠, 키보드 이동, 위치 계산, 타이머)은 베이스가 제공함. 다시 구현하지 않음. 정하는 것은 계약(prop 이름, 값, 기본값)과 토큰이고, 베이스는 그 계약을 자기 방식으로 이행할 뿐임

여전히 지키는 원칙은 하나임, 라이브러리 타입이 이 저장소의 공개 API 에 새어 나오지 않아야 함. `ButtonProps` 가 `@mui/material` 타입을 extends 하는 순간 그 시스템을 쓰는 앱이 MUI 에 묶임. 계약(`app/src/contract/`)은 아무것도 import 하지 않음.

남은 값: 자체 베이스 4종(Sand, Crimson, Rust, Fog)은 접근성 처리를 직접 함. 지금은 네이티브 `<dialog>`처럼 브라우저가 해주는 것에 기대고 있고, 그것으로 안 되는 컴포넌트(Menu, Tooltip, Slider)를 어떻게 할지는 아직 정하지 않음
