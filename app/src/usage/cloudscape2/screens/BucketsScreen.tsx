import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Pagination from "@cloudscape-design/components/pagination";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";

interface Bucket { name: string; region: string; objects: number; size: string; usedPct: number; created: string }
interface ObjectItem { key: string; size: string; storageClass: string; modified: string }

const BUCKETS: Bucket[] = [
  { name: "cobalt-app-assets", region: "ap-northeast-2", objects: 1284, size: "3.2GB", usedPct: 32, created: "2026-01-14" },
  { name: "cobalt-user-uploads", region: "ap-northeast-2", objects: 9021, size: "48.7GB", usedPct: 49, created: "2026-02-02" },
  { name: "cobalt-backup-archive", region: "ap-northeast-1", objects: 312, size: "112GB", usedPct: 78, created: "2025-11-20" },
  { name: "cobalt-static-site", region: "ap-northeast-2", objects: 540, size: "890MB", usedPct: 9, created: "2026-03-10" },
  { name: "cobalt-logs-raw", region: "ap-northeast-2", objects: 48210, size: "260GB", usedPct: 91, created: "2025-09-01" },
  { name: "cobalt-ml-datasets", region: "ap-northeast-1", objects: 2100, size: "58GB", usedPct: 58, created: "2026-04-22" },
  { name: "cobalt-invoices", region: "ap-northeast-2", objects: 3320, size: "1.1GB", usedPct: 11, created: "2026-01-30" },
  { name: "cobalt-video-transcodes", region: "ap-northeast-2", objects: 890, size: "410GB", usedPct: 84, created: "2026-05-15" },
  { name: "cobalt-terraform-state", region: "ap-northeast-2", objects: 24, size: "12MB", usedPct: 1, created: "2025-12-05" },
  { name: "cobalt-partner-exports", region: "ap-northeast-1", objects: 610, size: "22GB", usedPct: 22, created: "2026-06-18" },
  { name: "cobalt-cdn-cache", region: "ap-northeast-2", objects: 15200, size: "38GB", usedPct: 40, created: "2026-02-28" },
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
};

const PAGE_SIZE = 6;

export function BucketsScreen {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);

  if (selected) {
    return (
      <SpaceBetween size="m">
        <Button iconName="angle-left" variant="link" onClick={ => setSelected(null)}>버킷 목록으로</Button>
        <Table<ObjectItem>
          items={OBJECTS[selected] ?? []}
          variant="container"
          header={
            <Header counter={`(${(OBJECTS[selected] ?? []).length})`} description={`${selected} 안의 객체`}>
              {selected}
            </Header>
          }
          columnDefinitions={[
            { id: "key", header: "객체 키", cell: (o) => <Box variant="samp">{o.key}</Box> },
            { id: "size", header: "크기", cell: (o) => o.size },
            { id: "storageClass", header: "스토리지 클래스", cell: (o) => <Badge color="grey">{o.storageClass}</Badge> },
            { id: "modified", header: "수정일", cell: (o) => o.modified },
          ]}
        />
      </SpaceBetween>
    );
  }

  const filtered = BUCKETS.filter((b) => b.name.includes(query));
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const shown = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Table<Bucket>
      items={shown}
      variant="container"
      filter={
        <TextFilter
          filteringText={query}
          onChange={({ detail }) => { setQuery(detail.filteringText); setPage(1); }}
          filteringPlaceholder="버킷 이름으로 찾기"
          countText={`${filtered.length}개 일치`}
        />
      }
      pagination={<Pagination currentPageIndex={page} pagesCount={pages} onChange={({ detail }) => setPage(detail.currentPageIndex)} />}
      header={<Header counter={`(${BUCKETS.length})`} description="이 계정의 버킷 목록">버킷</Header>}
      columnDefinitions={[
        { id: "name", header: "버킷 이름", cell: (b) => <Link onFollow={(e) => { e.preventDefault; setSelected(b.name); }}>{b.name}</Link> },
        { id: "region", header: "리전", cell: (b) => b.region },
        { id: "objects", header: "객체 수", cell: (b) => b.objects.toLocaleString },
        { id: "size", header: "크기", cell: (b) => b.size },
        {
          id: "usedPct", header: "용량 사용률",
          cell: (b) => <ProgressBar value={b.usedPct} status={b.usedPct > 85 ? "error" : "in-progress"} />,
        },
        { id: "created", header: "생성일", cell: (b) => b.created },
      ]}
    />
  );
}
