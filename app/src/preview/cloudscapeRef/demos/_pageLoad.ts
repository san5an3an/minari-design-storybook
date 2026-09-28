/* cloudscape **페이지형** 데모(`stage:"iframe"`) 전용 로더 — 판 7 리더 결정(2026-09-18):
 * 90개를 손발췌하지 않고 캐시된 데모 앱을 무수정으로 그대로 마운트한다.
 *
 * ⚠️ `_load.ts`(자동 생성, 손발췌 `INLINE_OVERRIDE` 전용)와 **다른 자리**다 — 그쪽은 슬러그가
 * "컴포넌트" 키(예: `button`), 이쪽은 슬러그가 "데모 페이지" 키(예: `delete-one-click`,
 * `<slug>.json` 의 `examples[].source` 의 `src/pages/<이 키>/` 와 같다). 손으로 쓴다 —
 * 자동 생성 대상이 되면 이 파일을 지우고 생성기로 옮긴다.
 * ⚠️ 여기 없는 페이지는 `adapter.ts` 가 여전히 `IframePending`(빈 표지)을 준다 — "아직 없는 것"이지
 * "빠진 것"이 아니다.
 *
 * ⚠️ **2026-09-18 긴급 축소 1 — 풀림 (2026-09-19).** `root.tsx` 자기 자신이 여는 scss
 * (`@use '~@cloudscape-design/design-tokens'`, 웹팩 전용 `~` 접두사)를 Next 의 Dart Sass
 * 가 못 읽어 **공유 dev 서버를 500 으로 내린 적이 있다**(2026-09-18, 그 판은 되돌림).
 * 이번엔 `tools/copy_cloudscape_demo_src.mjs` 가 **복사 시점에** `~` 접두사만 치환하고
 * (원문 로직은 안 건드림), 검증도 **공유 dev 서버가 아니라 `next build`** 로만 했다
 * (같은 사고 재현 방지). 새로 안전해진 8개는 scss 를 원문처럼 그대로 심는다 — 아래 표.
 *
 * ⚠️ **2026-09-18 긴급 축소 2 — 풀림 (2026-09-19).** `internal/` 비공개 경로 문제로 보였던
 * `use-content-origins.tsx` 는 실은 **죽은 옛 사본**이었다 — 같은 이름의 `.ts` 짝이 공개
 * API(`MultiselectProps`)를 쓰는 진짜 버전이고, 공식 저장소 자신의 webpack 도 확장자
 * 우선순위(`.ts` 가 `.tsx` 보다 먼저) 때문에 그 죽은 `.tsx` 를 실제로는 안 쓴다. 우리
 * 번들러(Turbopack)만 반대 순서라 잘못 골랐던 것 — `copy_cloudscape_demo_src.mjs` 의
 * `STALE_TSX_TWIN` 이 복사에서 뺀다(같은 자리에 `use-column-widths.tsx`·`help-panel.tsx`
 * 도 있었다). 비공개 API 를 우회한 게 아니라 상대도 안 쓰는 죽은 사본을 뺀 것뿐이다.
 *
 * 지금 안전이 **확인된** 건 18개다(`next build web --turbopack` 통과 확인 —
 * 스펙트럼 베이스의 별개 결함으로 전체 빌드 자체는 여전히 실패하지만, 그 18개가 원인이
 * 아님을 스펙트럼 관련 에러만 남는 것으로 대조 확인했다. 2026-09-19):
 * delete-one-click · delete-with-simple-confirmation · delete-with-additional-confirmation ·
 * details-hub · details-tabs · edit · table · table-editable · table-expandable ·
 * table-property-filter · table-saved-filters · table-select-filter · wizard ·
 * write-to-s3 · table-date-filter · form · form-unsaved-changes · form-validation
 * 나머지 10개는 아직 `_embed/` 로 안 옮긴 페이지다.
 *
 * ⚠️ **2026-09-19(2차) — 패키지 미설치 4종 unblock.** board-components·chart-components·
 * chat-components·code-view·highcharts 5개를 실제로 설치했다(리더 실측, `npm view` 로 최신
 * 버전 확인 후 `chart-components` 의 peer 요구(`highcharts ^12.2.0`)에 맞춰 highcharts
 * 12계열로 설치 — 기존 의존성 버전은 하나도 안 건드림, `git diff package.json` 으로 추가만
 * 확인). chat 은 원문 `index.tsx` 가 App 을 따로 export 안 해서(다른 페이지와 다른 모양)
 * 본문을 그대로 옮겨 실었다 — 로직 변경 없음.
 */
/* ⚠️ **2026-09-19(3차) — 정적 리터럴 object map → 템플릿 리터럴 함수.** 깃 세션이 정확히 짚었다:
 * `{"wizard": => import("./_embed/wizard"), ...}` 모양은 각 경로가 **정적 문자열 리터럴**이라
 * tsc 가 그대로 풀어 `_embed`→`_src` 까지 계속 따라가며 타입체크한다 — `web/tsconfig.json`
 * exclude 는 최초 include-glob 대상만 빼주는 것이라 이렇게 정적으로 닿는 파일엔 안 먹는다
 * (muiRef 의 `import(\`./${slug}\`)` 템플릿 리터럴은 tsc 가 값을 못 풀어서 exclude 가 실제로
 * 통했던 것 — 그 차이). 그래서 muiRef 와 같은 모양(가드 + 템플릿 리터럴 함수)으로 바꾼다.
 */
const SAFE_SLUGS = new Set<string>([
 "delete-one-click", "delete-with-simple-confirmation", "delete-with-additional-confirmation",
 "details-hub", "details-tabs", "edit", "table", "table-editable", "table-expandable",
 "table-property-filter", "table-saved-filters", "table-select-filter", "wizard", "write-to-s3",
 "table-date-filter", "form", "form-unsaved-changes", "form-validation", "chat", "dashboard",
 "configurable-dashboard", "details", "manage-tags", "non-console", "product-detail-page",
 "read-from-s3", "server-side-table", "server-side-table-property-filter",
 "split-panel-comparison", "split-panel-multiple", "cards",
 /* ⚠️ onboarding 은 뺐다 — 원문 Router 가 window.location.hash 를 직접 읽는데, 우리 앱 전체가
 * 같은 hash 를 라우팅에 쓴다(#/<base>/<system>/<slug>). initialPage 는 hash 가 비어야만
 * 쓰이는 fallback이라 우리 안에서는 절대 안 먹는다 — 억지로 실으면 「진짜 온보딩 데모」가 아니라
 * 우리 hash 문자열을 온보딩 내부 페이지 경로로 오인한 잘못된 화면이 뜬다. 가짜로 세우지 않는다. */
]);

/** ⚠️ `isShadcnSlug`/`loadShadcnDoc` 와 같은 모양(가드 먼저, 템플릿 리터럴은 그다음) — 가드가
 * 없으면 `import` 가 없는 키에 던진다. */
export function loadPage(slug: string): Promise<{ default: React.ComponentType<Record<string, never>> }> | null {
 if (!SAFE_SLUGS.has(slug)) return null;
 return import(`./_embed/${slug}`);
}
