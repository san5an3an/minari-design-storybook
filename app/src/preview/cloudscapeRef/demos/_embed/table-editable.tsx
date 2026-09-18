// @ts-nocheck
/* 원문(`../_src/pages/table-editable/root.tsx`)을 그대로 마운트하는 **얇은 배선** —
 * `table.tsx` 머리 주석과 같은 방식(데이터 fetch 사유 동일 — 이 페이지는 date 변환 없는
 * `getData` 를 썼던 자리라 원문 그대로 date 를 문자열로 넘긴다). */
import * as React from "react";
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import "../_src/styles/base.scss";
import { App } from "../_src/pages/table-editable/root";

export default function TableEditableDemo() {
  const [distributions, setDistributions] = React.useState(null);
  React.useEffect(() => {
    let alive = true;
    fetch("/resources/distributions.json")
      .then((r) => r.json())
      .then((rows) => { if (alive) setDistributions(rows); });
    return () => { alive = false; };
  }, []);
  if (!distributions) return null;
  return <App distributions={distributions} />;
}
