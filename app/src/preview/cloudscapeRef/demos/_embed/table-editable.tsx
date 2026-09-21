// @ts-nocheck
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
