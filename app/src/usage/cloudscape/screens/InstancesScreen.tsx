import * as React from "react";
import { useCollection } from "@cloudscape-design/collection-hooks";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import Container from "@cloudscape-design/components/container";
import Flashbar, { type FlashbarProps } from "@cloudscape-design/components/flashbar";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import LineChart from "@cloudscape-design/components/line-chart";
import Link from "@cloudscape-design/components/link";
import Modal from "@cloudscape-design/components/modal";
import Pagination from "@cloudscape-design/components/pagination";
import PropertyFilter from "@cloudscape-design/components/property-filter";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";
import Tabs from "@cloudscape-design/components/tabs";

export interface Instance {
  id: string;
  type: string;
  status: "running" | "stopped" | "pending";
  region: string;
  az: string;
  privateIp: string;
  launched: string;
  cpu: number;
}

export const INSTANCES: readonly Instance[] = [
  { id: "i-0a1b2c3d", type: "m6g.large", status: "running", region: "ap-northeast-2", az: "ap-northeast-2a", privateIp: "10.0.1.14", launched: "2026-09-01", cpu: 34 },
  { id: "i-0e4f5g6h", type: "t3.medium", status: "running", region: "ap-northeast-2", az: "ap-northeast-2a", privateIp: "10.0.1.22", launched: "2026-09-03", cpu: 12 },
  { id: "i-0i7j8k9l", type: "c6i.xlarge", status: "stopped", region: "ap-northeast-2", az: "ap-northeast-2c", privateIp: "10.0.2.8", launched: "2026-08-22", cpu: 0 },
  { id: "i-0m1n2o3p", type: "m6g.large", status: "pending", region: "ap-northeast-2", az: "ap-northeast-2a", privateIp: "10.0.1.31", launched: "2026-09-15", cpu: 0 },
  { id: "i-0q4r5s6t", type: "r6g.large", status: "running", region: "ap-northeast-1", az: "ap-northeast-1a", privateIp: "10.0.3.11", launched: "2026-08-30", cpu: 61 },
  { id: "i-0u8v9w0x", type: "t3.small", status: "running", region: "ap-northeast-2", az: "ap-northeast-2c", privateIp: "10.0.2.19", launched: "2026-09-10", cpu: 8 },
  { id: "i-0y1z2a3b", type: "m6g.xlarge", status: "running", region: "ap-northeast-2", az: "ap-northeast-2a", privateIp: "10.0.1.44", launched: "2026-07-18", cpu: 47 },
  { id: "i-0c4d5e6f", type: "c6i.large", status: "stopped", region: "ap-northeast-1", az: "ap-northeast-1c", privateIp: "10.0.3.27", launched: "2026-06-05", cpu: 0 },
  { id: "i-0g7h8i9j", type: "r6g.xlarge", status: "running", region: "ap-northeast-2", az: "ap-northeast-2c", privateIp: "10.0.2.33", launched: "2026-09-12", cpu: 72 },
  { id: "i-0k1l2m3n", type: "t3.medium", status: "running", region: "ap-northeast-2", az: "ap-northeast-2a", privateIp: "10.0.1.52", launched: "2026-09-14", cpu: 19 },
  { id: "i-0o4p5q6r", type: "m6g.large", status: "pending", region: "ap-northeast-1", az: "ap-northeast-1a", privateIp: "10.0.3.40", launched: "2026-09-16", cpu: 0 },
  { id: "i-0s7t8u9v", type: "c6i.xlarge", status: "running", region: "ap-northeast-2", az: "ap-northeast-2c", privateIp: "10.0.2.47", launched: "2026-05-29", cpu: 55 },
];

export const STATUS_TYPE: Record<Instance["status"], "success" | "stopped" | "pending"> = {
  running: "success",
  stopped: "stopped",
  pending: "pending",
};

export const STATUS_LABEL: Record<Instance["status"], string> = {
  running: "실행 중",
  stopped: "중지됨",
  pending: "대기 중",
};

const TYPE_OPTIONS = Array.from(new Set(INSTANCES.map((i) => i.type))).map((value) => ({ propertyKey: "type", value }));
const REGION_OPTIONS = Array.from(new Set(INSTANCES.map((i) => i.region))).map((value) => ({ propertyKey: "region", value }));
const STATUS_OPTIONS = (Object.keys(STATUS_LABEL) as Instance["status"][]).map((value) => ({
  propertyKey: "status",
  value,
  label: STATUS_LABEL[value],
}));

const DEFAULT_SECURITY_GROUPS = [
  { name: "sg-web-8f2", inbound: "443/tcp (HTTPS)", source: "0.0.0.0/0" },
  { name: "sg-ssh-114", inbound: "22/tcp (SSH)", source: "10.0.0.0/16" },
  { name: "sg-internal-3c", inbound: "전체 트래픽", source: "sg-internal-3c (자기 참조)" },
] as const;

// CPU 24시간 추이, 시간대별 고정 배율을 곱한 결정론적 값, 정지 시 0%
const CPU_WAVE = [0.32, 0.48, 0.7, 0.9, 1, 0.88, 0.64, 0.44] as const;
const CPU_HOURS: readonly string[] = ["00시", "03시", "06시", "09시", "12시", "15시", "18시", "21시"];
function buildCpuSeries(current: number): { x: string; y: number }[] {
  return CPU_HOURS.map((x, idx) => ({ x, y: Math.min(100, Math.round(current * CPU_WAVE[idx])) }));
}

function tagsFor(i: Instance): { label: string; value: string }[] {
  return [
    { label: "Name", value: i.id },
    { label: "Environment", value: i.region === "ap-northeast-1" ? "staging" : "production" },
    { label: "Team", value: "platform" },
    { label: "ManagedBy", value: "terraform" },
  ];
}

export function InstancesScreen {
  const [instances, setInstances] = React.useState<Instance[]>( => INSTANCES.map((i) => ({ ...i })));
  const [detailId, setDetailId] = React.useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [flashItems, setFlashItems] = React.useState<FlashbarProps.MessageDefinition[]>([]);
  const [preferences, setPreferences] = React.useState({ pageSize: 6, wrapLines: false });

  const { items, collectionProps, propertyFilterProps, paginationProps, actions } = useCollection(instances, {
    propertyFiltering: {
      filteringProperties: [
        { key: "id", propertyLabel: "인스턴스 ID", groupValuesLabel: "ID 값" },
        { key: "type", propertyLabel: "유형", groupValuesLabel: "유형 값" },
        { key: "status", propertyLabel: "상태", groupValuesLabel: "상태 값" },
        { key: "region", propertyLabel: "리전", groupValuesLabel: "리전 값" },
      ],
      filteringOptions: [...TYPE_OPTIONS, ...REGION_OPTIONS, ...STATUS_OPTIONS],
      empty: <Box textAlign="center" color="inherit">일치하는 인스턴스가 없어요.</Box>,
      noMatch: <Box textAlign="center" color="inherit">조건에 맞는 인스턴스가 없어요.</Box>,
    },
    sorting: { defaultState: { sortingColumn: { sortingField: "id" } } },
    pagination: { pageSize: preferences.pageSize },
    selection: {},
  });

  const selected = (collectionProps.selectedItems ?? []) as Instance[];
  const stoppable = selected.filter((i) => i.status === "running");

  const stopSelected =  => {
    const ids = new Set(stoppable.map((i) => i.id));
    setInstances((prev) => prev.map((i) => (ids.has(i.id) ? { ...i, status: "stopped" as const, cpu: 0 } : i)));
    setFlashItems([
      {
        type: "success",
        header: `${ids.size}개 인스턴스를 중지했어요`,
        content: [...ids].join(", "),
        dismissible: true,
        id: `stop-${Date.now}`,
        onDismiss:  => setFlashItems([]),
      },
    ]);
    actions.setSelectedItems([]);
    setConfirmOpen(false);
  };

  const detail = detailId ? instances.find((i) => i.id === detailId) ?? null : null;

  if (detail) {
    return (
      <SpaceBetween size="l">
        <Button iconName="angle-left" variant="link" onClick={ => setDetailId(null)}>인스턴스 목록으로</Button>
        <Container
          header={
            <Header
              variant="h2"
              actions={
                <Button
                  disabled={detail.status !== "running"}
                  onClick={ => {
                    actions.setSelectedItems([detail]);
                    setConfirmOpen(true);
                  }}
                >
                  중지
                </Button>
              }
            >
              {detail.id}
            </Header>
          }
        >
          <KeyValuePairs
            columns={3}
            items={[
              { label: "상태", value: <StatusIndicator type={STATUS_TYPE[detail.status]}>{STATUS_LABEL[detail.status]}</StatusIndicator> },
              { label: "유형", value: <Badge color="grey">{detail.type}</Badge> },
              { label: "CPU", value: `${detail.cpu}%` },
              { label: "리전", value: detail.region },
              { label: "가용 영역", value: detail.az },
              { label: "프라이빗 IP", value: <Box variant="samp">{detail.privateIp}</Box> },
              { label: "시작일", value: detail.launched },
            ]}
          />
        </Container>
        <Tabs
          tabs={[
            {
              id: "monitoring",
              label: "모니터링",
              content: (
                <Container header={<Header variant="h3" description="지난 24시간, 3시간 간격 평균">CPU 사용률 추이</Header>}>
                  <LineChart
                    series={[{ type: "line", title: "CPU 사용률", data: buildCpuSeries(detail.cpu), color: "var(--component-chart-series-1)" }]}
                    xTitle="시각"
                    yTitle="CPU(%)"
                    height={220}
                    hideFilter
                    xScaleType="categorical"
                    yDomain={[0, 100]}
                    yTickFormatter={(v) => `${v}%`}
                    ariaLabel={`${detail.id} CPU 사용률 추이`}
                  />
                </Container>
              ),
            },
            {
              id: "sg",
              label: "보안 그룹",
              content: (
                <Table
                  variant="container"
                  items={DEFAULT_SECURITY_GROUPS}
                  columnDefinitions={[
                    { id: "name", header: "보안 그룹", cell: (g) => <Box variant="samp">{g.name}</Box> },
                    { id: "inbound", header: "인바운드", cell: (g) => g.inbound },
                    { id: "source", header: "소스", cell: (g) => g.source },
                  ]}
                />
              ),
            },
            {
              id: "tags",
              label: "태그",
              content: (
                <Container>
                  <KeyValuePairs columns={2} items={tagsFor(detail)} />
                </Container>
              ),
            },
          ]}
        />
      </SpaceBetween>
    );
  }

  return (
    <SpaceBetween size="m">
      {flashItems.length > 0 ? <Flashbar items={flashItems} /> : null}
      <Table<Instance>
        {...collectionProps}
        items={items}
        selectionType="multi"
        trackBy="id"
        wrapLines={preferences.wrapLines}
        variant="container"
        filter={
          <PropertyFilter
            {...propertyFilterProps}
            filteringPlaceholder="인스턴스 ID·유형·상태·리전으로 찾기"
            countText={`${items.length}개 일치`}
            i18nStrings={{
              filteringAriaLabel: "인스턴스 필터링",
              dismissAriaLabel: "닫기",
              clearAriaLabel: "필터 지우기",
              groupValuesText: "값",
              groupPropertiesText: "속성",
              operatorsText: "연산자",
              operationAndText: "그리고",
              operationOrText: "또는",
              operatorContainsText: "포함",
              operatorDoesNotContainText: "미포함",
              operatorEqualsText: "같음",
              operatorDoesNotEqualText: "같지 않음",
              editTokenHeader: "필터 편집",
              propertyText: "속성",
              operatorText: "연산자",
              valueText: "값",
              cancelActionText: "취소",
              applyActionText: "적용",
              allPropertiesLabel: "전체 속성",
              clearFiltersText: "필터 모두 지우기",
              tokenLimitShowMore: "더 보기",
              tokenLimitShowFewer: "간략히",
            }}
          />
        }
        pagination={<Pagination {...paginationProps} />}
        preferences={
          <CollectionPreferences
            title="표 환경설정"
            confirmLabel="확인"
            cancelLabel="취소"
            preferences={preferences}
            onConfirm={({ detail: d }) => setPreferences({ pageSize: d.pageSize ?? 6, wrapLines: d.wrapLines ?? false })}
            pageSizePreference={{
              title: "페이지 크기",
              options: [
                { value: 6, label: "6개씩 보기" },
                { value: 8, label: "8개씩 보기" },
                { value: 12, label: "12개씩 보기" },
              ],
            }}
            wrapLinesPreference={{ label: "텍스트 줄바꿈", description: "긴 값을 여러 줄로 표시해요." }}
          />
        }
        header={
          <Header
            counter={`(${instances.length})`}
            description="이 계정에 떠 있는 인스턴스 목록. ID를 누르면 상세로 들어가요."
            actions={
              <Button disabled={stoppable.length === 0} onClick={ => setConfirmOpen(true)}>
                선택 중지{stoppable.length > 0 ? ` (${stoppable.length})` : ""}
              </Button>
            }
          >
            인스턴스
          </Header>
        }
        columnDefinitions={[
          { id: "id", header: "인스턴스 ID", sortingField: "id", cell: (i) => <Link onFollow={(e) => { e.preventDefault; setDetailId(i.id); }}>{i.id}</Link> },
          { id: "type", header: "유형", sortingField: "type", cell: (i) => <Badge color="grey">{i.type}</Badge> },
          { id: "status", header: "상태", sortingField: "status", cell: (i) => <StatusIndicator type={STATUS_TYPE[i.status]}>{STATUS_LABEL[i.status]}</StatusIndicator> },
          { id: "cpu", header: "CPU", sortingField: "cpu", cell: (i) => `${i.cpu}%` },
          { id: "region", header: "리전", sortingField: "region", cell: (i) => i.region },
          { id: "az", header: "가용 영역", cell: (i) => i.az },
          { id: "launched", header: "시작일", sortingField: "launched", cell: (i) => i.launched },
        ]}
      />

      <Modal
        visible={confirmOpen}
        onDismiss={ => setConfirmOpen(false)}
        header="인스턴스를 중지할까요?"
        closeAriaLabel="닫기"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={ => setConfirmOpen(false)}>취소</Button>
              <Button variant="primary" onClick={stopSelected}>중지</Button>
            </SpaceBetween>
          </Box>
        }
      >
        <SpaceBetween size="s">
          <Box>선택한 {stoppable.length}개 인스턴스가 중지돼요. 중지된 인스턴스는 다시 시작할 때까지 과금되지 않아요.</Box>
          <SpaceBetween size="xxs">
            {stoppable.map((i) => (
              <Box key={i.id} fontSize="body-s">
                <Box variant="samp">{i.id}</Box> · {i.type}
              </Box>
            ))}
          </SpaceBetween>
        </SpaceBetween>
      </Modal>
    </SpaceBetween>
  );
}
