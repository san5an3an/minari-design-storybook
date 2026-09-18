// @ts-nocheck
/* 원문(`../_src/pages/table/root.tsx`)을 그대로 마운트하는 **얇은 배선** —
 * `delete-one-click.tsx` 머리 주석과 같은 방식.
 *
 * ⚠️ 2026-09-19 — `base.scss` 의 `~` 접두사(webpack 전용)를 `copy_cloudscape_demo_src.mjs` 가
 *    복사 시점에 치환해 이제 Next Sass 로 풀린다(`next build` 로 검증, 공유 dev 서버는 안 씀 —
 *    2026-09-18 그 서버에 직접 붙였다가 응답이 멎은 사고가 있었다).
 * ⚠️ 원문 `index.tsx` 는 `DataProvider.getDataWithDates('distributions')` 로 **상대 경로**
 *    `./resources/distributions.json` 을 fetch 한다 — 그건 원문이 독립 정적 사이트로 서빙될 때
 *    가정이라 우리 라우팅에선 안 맞는다. 같은 데이터(`web/public/resources/distributions.json`,
 *    Next 가 `/resources/...` 로 서빙)를 **절대 경로**로 직접 fetch 해서 같은 모양(date 를
 *    `Date` 로 변환)으로 넘긴다 — `App` 자체 로직은 한 글자도 안 건드린다.
 */
import * as React from "react";
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import "../_src/styles/base.scss";
import { App } from "../_src/pages/table/root";

export default function TableDemo() {
  const [distributions, setDistributions] = React.useState(null);
  React.useEffect(() => {
    let alive = true;
    fetch("/resources/distributions.json")
      .then((r) => r.json())
      .then((rows) => rows.map((r: { date: string }) => ({ ...r, date: new Date(r.date) })))
      .then((rows) => { if (alive) setDistributions(rows); });
    return () => { alive = false; };
  }, []);
  if (!distributions) return null;
  return <App distributions={distributions} />;
}
