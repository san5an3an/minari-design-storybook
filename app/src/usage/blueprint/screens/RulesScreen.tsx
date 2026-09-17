"use client";

import * as React from "react";
import {
  Alert, Button, Card, ControlGroup, Dialog, DialogBody, DialogFooter, FormGroup,
  HTMLSelect, InputGroup, NumericInput, Radio, RadioGroup, Switch, Tag,
} from "@blueprintjs/core";
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

// 새 규칙 추가 다이얼로그. Dialog, FormGroup, ControlGroup, HTMLSelect 이 화면에서만 사용
function NewRuleDialog({ isOpen, onClose }: { isOpen: boolean; onClose:  => void }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="새 알림 규칙" icon="notifications-add">
      <DialogBody>
        <FormGroup label="규칙 이름" labelInfo="(필수)">
          <InputGroup placeholder="예: 결제 실패율 급증" />
        </FormGroup>
        <FormGroup label="조건">
          <ControlGroup fill>
            <HTMLSelect options={["오류율", "지연시간", "요청 수"]} />
            <HTMLSelect options={[">", ">=", "<", "<="]} style={{ maxInlineSize: "4rem" }} />
            {/* NumericInput 으로 임계값 숫자 전용 입력 적용 */}
            <NumericInput placeholder="임계값" buttonPosition="right" style={{ maxInlineSize: "6rem" }} />
          </ControlGroup>
        </FormGroup>
        <FormGroup label="심각도">
          <HTMLSelect fill options={["정보", "주의", "위험"]} />
        </FormGroup>
        {/* RadioGroup/Radio로 알림 방식 지정 */}
        <FormGroup label="알림 방식">
          <RadioGroup inline selectedValue="email" onChange={ => {}}>
            <Radio label="이메일" value="email" />
            <Radio label="슬랙" value="slack" />
            <Radio label="문자" value="sms" />
          </RadioGroup>
        </FormGroup>
      </DialogBody>
      <DialogFooter actions={<Button intent="primary" text="규칙 추가" onClick={onClose} />} />
    </Dialog>
  );
}

export function RulesScreen {
  const [on, setOn] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(RULES.map((r) => [r.id, r.defaultOn])),
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [deleting, setDeleting] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Tag minimal>{Object.values(on).filter(Boolean).length}/{RULES.length}개 켜짐</Tag>
        <Button icon="add" text="새 규칙" onClick={ => setDialogOpen(true)} />
      </div>
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
            <div className="flex items-center gap-2">
              <Switch
                checked={on[rule.id]}
                label={on[rule.id] ? "켜짐" : "꺼짐"}
                onChange={ => setOn((prev) => ({ ...prev, [rule.id]: !prev[rule.id] }))}
              />
              <Button icon="trash" minimal small onClick={ => setDeleting(rule.id)} aria-label="규칙 삭제" />
            </div>
          </div>
        ))}
      </Card>
      <NewRuleDialog isOpen={dialogOpen} onClose={ => setDialogOpen(false)} />
      {/* 베이스에 없는 Alert로 삭제 확인 처리 */}
      <Alert
        isOpen={deleting != null}
        intent="danger"
        icon="trash"
        confirmButtonText="삭제"
        cancelButtonText="취소"
        onConfirm={ => setDeleting(null)}
        onCancel={ => setDeleting(null)}
      >
        {deleting ? RULES.find((r) => r.id === deleting)?.name : ""} 규칙을 삭제할까요? 되돌릴 수 없어요.
      </Alert>
    </div>
  );
}
