import * as React from "react";
import {
  Badge, Body1, Button, Caption1, Combobox, Divider, Option, Radio, RadioGroup,
} from "@fluentui/react-components";
import { ASSETS, REQUESTS, type Asset } from "../data";
import type { ScreenProps } from "../screens";

const HOLDERS = ["김하늘", "박서준", "최유진", "한소율"];

const STATUS_COLOR: Record<Asset["status"], "success" | "informative" | "warning"> = {
  "사용 중": "success",
  "창고 대기": "informative",
  "수리 중": "warning",
};

const REQUEST_COLOR: Record<(typeof REQUESTS)[number]["status"], "warning" | "success" | "danger"> = {
  대기: "warning", 승인: "success", 반려: "danger",
};

export function AssetDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const asset = ASSETS.find((a) => a.id === selectedId);
  const [holder, setHolder] = React.useState(asset?.currentHolder ?? "");
  const [status, setStatus] = React.useState<Asset["status"]>(asset?.status ?? "창고 대기");

  const relatedRequests = asset ? REQUESTS.filter((r) => r.assetCategory === asset.category) : [];

  if (!asset) {
    return (
      <div style={{ border: "1px dashed var(--colorNeutralStroke2)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          자산을 먼저 골라 주세요. "자산" 탭에서 항목을 눌러 보세요.
        </Caption1>
        <div style={{ marginTop: "12px" }}>
          <Button size="small" onClick={ => onNavigate?.("assets")}>자산 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>{asset.name}</Body1>
          <Badge color={STATUS_COLOR[asset.status]} appearance="filled">{asset.status}</Badge>
        </div>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {asset.serial} · {asset.category} · 현재 보유자 {asset.currentHolder ?? "없음"}
        </Caption1>
      </div>
      <Divider />
      <div>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "6px" }}>할당 이력</Caption1>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {asset.history.map((h, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
              <Body1>{h.assignee}</Body1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{h.fromLabel} ~ {h.toLabel}</Caption1>
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "180px" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>재배정</Caption1>
          <Combobox
            value={holder}
            selectedOptions={holder ? [holder] : []}
            onOptionSelect={(_, data) => setHolder(data.optionText ?? "")}
            onInput={(e) => setHolder(e.currentTarget.value)}
            placeholder="사용자 선택"
          >
            {HOLDERS.map((h) => (
              <Option key={h}>{h}</Option>
            ))}
          </Combobox>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>상태</Caption1>
          <RadioGroup layout="horizontal" value={status} onChange={(_, data) => setStatus(data.value as Asset["status"])}>
            <Radio value="사용 중" label="사용 중" />
            <Radio value="창고 대기" label="창고 대기" />
            <Radio value="수리 중" label="수리 중" />
          </RadioGroup>
        </div>
      </div>
      <Button appearance="primary" style={{ alignSelf: "flex-start" }}>저장</Button>

      {relatedRequests.length > 0 ? (
        <>
          <Divider />
          <div>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "6px" }}>
              같은 분류({asset.category}) 요청 현황
            </Caption1>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {relatedRequests.map((r) => (
                <div key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Body1>{r.requester} · {r.reason}</Body1>
                    <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{r.requestedLabel}</Caption1>
                  </div>
                  <Badge color={REQUEST_COLOR[r.status]} appearance="tint" size="small">{r.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
