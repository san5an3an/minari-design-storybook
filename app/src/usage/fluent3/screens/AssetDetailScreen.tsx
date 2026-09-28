import * as React from "react";
import {
  Badge, Body1, Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem, Button, Card,
  CardFooter, CardHeader, CardPreview, Caption1, Checkbox, Combobox, Divider, Image, List,
  ListItem, Option, Persona, ProgressBar, Radio, RadioGroup, Table, TableBody, TableCell,
  TableCellLayout, TableHeader, TableHeaderCell, TableRow, Text,
} from "@fluentui/react-components";
import { ASSETS, REQUESTS, type Asset } from "../data";
import type { ScreenProps } from "../screens";

const HOLDERS = ["김하늘", "박서준", "최유진", "한소율"];

// informative 금지, 시맨틱 톤 5종뿐 info 없음
const STATUS_COLOR: Record<Asset["status"], "success" | "brand" | "warning"> = {
  "사용 중": "success",
  "창고 대기": "brand",
  "수리 중": "warning",
};

const REQUEST_COLOR: Record<(typeof REQUESTS)[number]["status"], "warning" | "success" | "danger"> = {
  대기: "warning", 승인: "success", 반려: "danger",
};

const CHECKLIST_BY_CATEGORY: Record<Asset["category"], readonly string[]> = {
  노트북: ["배터리 수명 확인", "OS·백신 업데이트", "외관 스크래치 점검"],
  모니터: ["패널 얼룩·데드픽셀 점검", "케이블·전원 어댑터 점검"],
  휴대폰: ["배터리 수명 확인", "액정 파손 점검", "유심·데이터 백업 확인"],
  주변기기: ["배터리·건전지 점검", "페어링 상태 확인"],
};

// 분류별 대표 이미지. Unsplash 무료 라이선스의 비브랜드 이미지
const CATEGORY_IMAGE: Record<Asset["category"], string> = {
  노트북: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=60",
  모니터: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=60",
  휴대폰: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=60",
  주변기기: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=400&q=60",
};

export function AssetDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const asset = ASSETS.find((a) => a.id === selectedId) ?? ASSETS[0];
  const [holder, setHolder] = React.useState(asset?.currentHolder ?? "");
  const [status, setStatus] = React.useState<Asset["status"]>(asset?.status ?? "창고 대기");
  const [checked, setChecked] = React.useState<Set<string>>(new Set);

  const toggleCheck = (item: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });

  const relatedRequests = asset ? REQUESTS.filter((r) => r.assetCategory === asset.category) : [];
  const checklist = asset ? CHECKLIST_BY_CATEGORY[asset.category] : [];

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
      <Breadcrumb aria-label="자산 위치">
        <BreadcrumbItem>
          <BreadcrumbButton onClick={ => onNavigate?.("assets")}>자산</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton>{asset.category}</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton current>{asset.name}</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* 지표 칩 행. 실제 데이터만 사용, 수치 임의 생성 제외 */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Badge appearance="tint" color="brand" size="extra-large">이력 {asset.history.length}건</Badge>
        <Badge appearance="tint" color="brand" size="extra-large">관련 요청 {relatedRequests.length}건</Badge>
        <Badge appearance="tint" color={checked.size === checklist.length && checklist.length > 0 ? "success" : "brand"} size="extra-large">
          점검 {checked.size}/{checklist.length}
        </Badge>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 2, minWidth: "280px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <Image src={CATEGORY_IMAGE[asset.category]} alt={`${asset.category} 대표 사진`} width={72} height={72} fit="cover" shape="rounded" />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>{asset.name}</Body1>
                <Badge color={STATUS_COLOR[asset.status]} appearance="filled">{asset.status}</Badge>
              </div>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
                {asset.serial} · {asset.category} · 현재 보유자 {asset.currentHolder ?? "없음"}
              </Caption1>
            </div>
          </div>
          <Divider />
          <div>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "6px" }}>할당 이력</Caption1>
            {/* 이력 목록 Table 렌더링 */}
            <Table size="small">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>사용자</TableHeaderCell>
                  <TableHeaderCell>기간</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {asset.history.map((h, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <TableCellLayout>{h.assignee}</TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{h.fromLabel} ~ {h.toLabel}</Caption1>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, minWidth: "220px" }}>
          <Card>
            <CardPreview>
              <Image src={CATEGORY_IMAGE[asset.category]} alt="" width={280} height={100} fit="cover" />
            </CardPreview>
            <CardHeader
              header={
                asset.currentHolder ? (
                  // color="colorful" 대신 brand 사용
                  <Persona name={asset.currentHolder} secondaryText="현재 보유자" avatar={{ color: "brand" }} size="medium" />
                ) : (
                  <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>배정된 사용자가 없어요.</Caption1>
                )
              }
            />
            <CardFooter>
              <Text size={200} style={{ color: "var(--colorNeutralForeground3)" }}>대표 이미지 · {asset.category}</Text>
            </CardFooter>
          </Card>

          <div style={{ border: "1px solid var(--colorNeutralStroke2)", borderRadius: "8px", padding: "14px" }}>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "8px" }}>
              정기 점검 체크리스트
            </Caption1>
            {/* List, ListItem으로 체크박스 목록 구조화하기 */}
            <List>
              {checklist.map((item) => (
                <ListItem key={item}>
                  <Checkbox
                    checked={checked.has(item)}
                    onChange={ => toggleCheck(item)}
                    label={item}
                  />
                </ListItem>
              ))}
            </List>
            <ProgressBar
              value={checklist.length === 0 ? 0 : checked.size / checklist.length}
              thickness="large"
              style={{ marginTop: "10px" }}
            />
            <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
              {checked.size}/{checklist.length} 완료
            </Caption1>
          </div>
        </div>
      </div>
    </div>
  );
}
