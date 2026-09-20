import * as React from "react";
import { useCollection } from "@cloudscape-design/collection-hooks";
import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Flashbar, { type FlashbarProps } from "@cloudscape-design/components/flashbar";
import Header from "@cloudscape-design/components/header";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import Link from "@cloudscape-design/components/link";
import Modal from "@cloudscape-design/components/modal";
import Pagination from "@cloudscape-design/components/pagination";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";

export interface Bucket {
  name: string;
  region: string;
  objects: number;
  sizeGb: number;
  created: string;
}

interface ObjectItem {
  key: string;
  size: string;
  storageClass: string;
  modified: string;
}

export const BUCKETS: readonly Bucket[] = [
  { name: "cobalt-app-assets", region: "ap-northeast-2", objects: 1284, sizeGb: 3.2, created: "2026-01-14" },
  { name: "cobalt-user-uploads", region: "ap-northeast-2", objects: 9021, sizeGb: 48.7, created: "2026-02-02" },
  { name: "cobalt-backup-archive", region: "ap-northeast-1", objects: 312, sizeGb: 112, created: "2025-11-20" },
  { name: "cobalt-logs-raw", region: "ap-northeast-2", objects: 15230, sizeGb: 22.4, created: "2026-03-05" },
  { name: "cobalt-cdn-cache", region: "ap-northeast-2", objects: 5820, sizeGb: 9.8, created: "2026-04-11" },
  { name: "cobalt-video-transcodes", region: "ap-northeast-1", objects: 640, sizeGb: 340, created: "2026-05-02" },
  { name: "cobalt-invoices", region: "ap-northeast-2", objects: 2110, sizeGb: 1.4, created: "2026-01-29" },
  { name: "cobalt-ml-datasets", region: "ap-northeast-2", objects: 88, sizeGb: 512, created: "2026-06-18" },
  { name: "cobalt-static-site", region: "ap-northeast-2", objects: 340, sizeGb: 0.6, created: "2025-12-09" },
  { name: "cobalt-partner-exports", region: "ap-northeast-1", objects: 4502, sizeGb: 6.1, created: "2026-02-20" },
];

const OBJECTS: Record<string, ObjectItem[]> = {
  "cobalt-app-assets": [
    { key: "logo/logo-512.png", size: "48KB", storageClass: "Standard", modified: "2026-09-10" },
    { key: "fonts/pretendard.woff2", size: "1.1MB", storageClass: "Standard", modified: "2026-08-22" },
    { key: "icons/icon-set.svg", size: "22KB", storageClass: "Standard", modified: "2026-09-02" },
  ],
  "cobalt-user-uploads": [
    { key: "u4821/profile.jpg", size: "2.4MB", storageClass: "Standard", modified: "2026-09-15" },
    { key: "u3390/report.pdf", size: "890KB", storageClass: "Standard-IA", modified: "2026-07-01" },
  ],
  "cobalt-backup-archive": [
    { key: "2026-08/db-snapshot.tar.gz", size: "8.1GB", storageClass: "Glacier", modified: "2026-08-31" },
  ],
  "cobalt-logs-raw": [
    { key: "2026-09-20/access.log.gz", size: "14MB", storageClass: "Standard", modified: "2026-09-20" },
    { key: "2026-09-19/access.log.gz", size: "13MB", storageClass: "Standard", modified: "2026-09-19" },
  ],
  "cobalt-cdn-cache": [
    { key: "edge/seoul/manifest.json", size: "4KB", storageClass: "Standard", modified: "2026-09-18" },
    { key: "edge/tokyo/manifest.json", size: "4KB", storageClass: "Standard", modified: "2026-09-18" },
  ],
  "cobalt-video-transcodes": [
    { key: "vod/9021/1080p.mp4", size: "1.2GB", storageClass: "Standard", modified: "2026-09-05" },
    { key: "vod/9021/480p.mp4", size: "410MB", storageClass: "Standard", modified: "2026-09-05" },
  ],
  "cobalt-invoices": [
    { key: "2026-09/inv-88213.pdf", size: "112KB", storageClass: "Standard-IA", modified: "2026-09-01" },
  ],
  "cobalt-ml-datasets": [
    { key: "train/v4/shard-0001.parquet", size: "2.1GB", storageClass: "Standard", modified: "2026-06-20" },
    { key: "train/v4/shard-0002.parquet", size: "2.0GB", storageClass: "Standard", modified: "2026-06-20" },
  ],
  "cobalt-static-site": [
    { key: "index.html", size: "6KB", storageClass: "Standard", modified: "2026-09-12" },
    { key: "assets/app.js", size: "180KB", storageClass: "Standard", modified: "2026-09-12" },
  ],
  "cobalt-partner-exports": [
    { key: "2026-09-20/orders.csv", size: "3.4MB", storageClass: "Standard-IA", modified: "2026-09-20" },
  ],
};

export function BucketsScreen {
  const [buckets, setBuckets] = React.useState<Bucket[]>( => BUCKETS.map((b) => ({ ...b })));
  const [selected, setSelected] = React.useState<string | null>(null);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [flashItems, setFlashItems] = React.useState<FlashbarProps.MessageDefinition[]>([]);

  const { items, collectionProps, filterProps, paginationProps } = useCollection(buckets, {
    filtering: { fields: ["name", "region"], empty: <Box textAlign="center" color="inherit">버킷이 없어요.</Box> },
    sorting: { defaultState: { sortingColumn: { sortingField: "name" } } },
    pagination: { pageSize: 6 },
    selection: {},
  });
  const toDelete = (collectionProps.selectedItems ?? []) as Bucket[];

  const confirmDelete =  => {
    const names = new Set(toDelete.map((b) => b.name));
    setBuckets((prev) => prev.filter((b) => !names.has(b.name)));
    setFlashItems([
      {
        type: "success",
        header: `${names.size}개 버킷을 삭제했어요`,
        content: [...names].join(", "),
        dismissible: true,
        id: `del-${Date.now}`,
        onDismiss:  => setFlashItems([]),
      },
    ]);
    setDeleteOpen(false);
  };

  if (selected) {
    const bucket = buckets.find((b) => b.name === selected);
    return (
      <SpaceBetween size="m">
        <Button iconName="angle-left" variant="link" onClick={ => setSelected(null)}>버킷 목록으로</Button>
        <Container header={<Header variant="h2">{selected}</Header>}>
          <KeyValuePairs
            columns={4}
            items={[
              { label: "리전", value: bucket?.region ?? "-" },
              { label: "객체 수", value: bucket ? bucket.objects.toLocaleString : "-" },
              { label: "용량", value: bucket ? `${bucket.sizeGb}GB` : "-" },
              { label: "생성일", value: bucket?.created ?? "-" },
            ]}
          />
        </Container>
        <Table<ObjectItem>
          items={OBJECTS[selected] ?? []}
          variant="container"
          empty={<Box textAlign="center" color="inherit">이 버킷에는 객체가 없어요.</Box>}
          header={
            <Header counter={`(${(OBJECTS[selected] ?? []).length})`} description={`${selected} 안의 최근 객체`}>
              {selected}
            </Header>
          }
          columnDefinitions={[
            { id: "key", header: "객체 키", cell: (o) => <Box variant="samp">{o.key}</Box> },
            { id: "size", header: "크기", cell: (o) => o.size },
            { id: "storageClass", header: "스토리지 클래스", cell: (o) => o.storageClass },
            { id: "modified", header: "수정일", cell: (o) => o.modified },
          ]}
        />
      </SpaceBetween>
    );
  }

  const totalObjects = buckets.reduce((s, b) => s + b.objects, 0);
  const totalGb = buckets.reduce((s, b) => s + b.sizeGb, 0);
  const bySize = [...buckets].sort((a, b) => b.sizeGb - a.sizeGb);

  return (
    <SpaceBetween size="l">
      {flashItems.length > 0 ? <Flashbar items={flashItems} /> : null}

      <Container header={<Header variant="h2">버킷 요약</Header>}>
        <KeyValuePairs
          columns={3}
          items={[
            { label: "총 버킷", value: `${buckets.length}개` },
            { label: "총 객체 수", value: totalObjects.toLocaleString },
            { label: "총 용량", value: `${totalGb.toFixed(1)}GB` },
          ]}
        />
      </Container>

      <Container header={<Header variant="h2" description="용량 상위 6개 버킷">버킷별 용량</Header>}>
        <BarChart
          series={[{ type: "bar", title: "용량(GB)", data: bySize.slice(0, 6).map((b) => ({ x: b.name.replace("cobalt-", ""), y: Math.round(b.sizeGb * 10) / 10 })), color: "var(--component-chart-series-2)" }]}
          xScaleType="categorical"
          xTitle="버킷"
          yTitle="용량(GB)"
          height={220}
          hideFilter
          hideLegend
          yTickFormatter={(v) => `${v}GB`}
          ariaLabel="버킷별 용량"
        />
      </Container>

      <Table<Bucket>
        {...collectionProps}
        items={items}
        selectionType="multi"
        trackBy="name"
        variant="container"
        header={
          <Header
            counter={`(${buckets.length})`}
            description="이 계정의 버킷 목록"
            actions={<Button disabled={toDelete.length === 0} onClick={ => setDeleteOpen(true)}>선택 삭제{toDelete.length > 0 ? ` (${toDelete.length})` : ""}</Button>}
          >
            버킷
          </Header>
        }
        filter={<TextFilter {...filterProps} filteringPlaceholder="버킷 이름·리전으로 찾기" countText={`${items.length}개 일치`} />}
        pagination={<Pagination {...paginationProps} />}
        columnDefinitions={[
          { id: "name", header: "버킷 이름", sortingField: "name", cell: (b) => <Link onFollow={(e) => { e.preventDefault; setSelected(b.name); }}>{b.name}</Link> },
          { id: "region", header: "리전", sortingField: "region", cell: (b) => b.region },
          { id: "objects", header: "객체 수", sortingField: "objects", cell: (b) => b.objects.toLocaleString },
          { id: "size", header: "크기", sortingField: "sizeGb", cell: (b) => `${b.sizeGb}GB` },
          { id: "created", header: "생성일", sortingField: "created", cell: (b) => b.created },
        ]}
      />

      <Modal
        visible={deleteOpen}
        onDismiss={ => setDeleteOpen(false)}
        header="버킷을 삭제할까요?"
        closeAriaLabel="닫기"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={ => setDeleteOpen(false)}>취소</Button>
              <Button variant="primary" onClick={confirmDelete}>삭제</Button>
            </SpaceBetween>
          </Box>
        }
      >
        <SpaceBetween size="s">
          <Box>선택한 {toDelete.length}개 버킷과 그 안의 객체가 모두 삭제돼요. 이 작업은 되돌릴 수 없어요.</Box>
          <SpaceBetween size="xxs">
            {toDelete.map((b) => (
              <Box key={b.name} fontSize="body-s"><Box variant="samp">{b.name}</Box> · {b.objects.toLocaleString}개 객체</Box>
            ))}
          </SpaceBetween>
        </SpaceBetween>
      </Modal>
    </SpaceBetween>
  );
}
