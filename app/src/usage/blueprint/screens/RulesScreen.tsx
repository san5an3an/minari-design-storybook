"use client";

import * as React from "react";
import { Card, Switch, Tag } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";

interface Rule {
  id: string;
  name: string;
  hint: string;
  severity: "danger" | "warning" | "none";
  defaultOn: boolean;
}

const SEVERITY_INTENT: Record<Rule["severity"], Intent> = {
  danger: "danger",
  warning: "warning",
  none: "none",
};

const RULES: Rule[] = [
  { id: "5xx", name: "5xx 오류율 5% 초과", hint: "5분 평균 기준", severity: "danger", defaultOn: true },
  { id: "latency", name: "결제 지연 2초 초과", hint: "p95 기준", severity: "warning", defaultOn: true },
  { id: "sync", name: "재고 동기화 지연 30초 초과", hint: "", severity: "warning", defaultOn: false },
  { id: "login", name: "로그인 실패 급증", hint: "1분 내 20회 이상", severity: "none", defaultOn: true },
  { id: "queue", name: "알림 발송 큐 적체", hint: "대기 500건 초과", severity: "warning", defaultOn: true },
  { id: "search-latency", name: "검색 응답 지연 300ms 초과", hint: "p99 기준", severity: "warning", defaultOn: false },
  { id: "disk", name: "디스크 사용률 85% 초과", hint: "인프라 노드 기준", severity: "danger", defaultOn: true },
  { id: "signup", name: "신규 가입 급증", hint: "10분 내 100건 이상", severity: "none", defaultOn: false },
];

export function RulesScreen {
  const [on, setOn] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(RULES.map((r) => [r.id, r.defaultOn])),
  );

  return (
    <Card className="gap-0 divide-y p-0">
      {RULES.map((rule) => (
        <div key={rule.id} className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <Tag intent={SEVERITY_INTENT[rule.severity]} minimal>
              {rule.severity === "none" ? "정보" : rule.severity === "warning" ? "주의" : "위험"}
            </Tag>
            <div className="flex flex-col">
              <span>{rule.name}</span>
              {rule.hint ? (
                <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{rule.hint}</span>
              ) : null}
            </div>
          </div>
          <Switch
            checked={on[rule.id]}
            label={on[rule.id] ? "켜짐" : "꺼짐"}
            onChange={ => setOn((prev) => ({ ...prev, [rule.id]: !prev[rule.id] }))}
          />
        </div>
      ))}
    </Card>
  );
}
