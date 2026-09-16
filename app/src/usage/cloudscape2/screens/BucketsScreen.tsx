import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";

interface Bucket {
  name: string;
  region: string;
  objects: number;
  size: string;
  created: string;
}

interface ObjectItem {
  key: string;
  size: string;
  storageClass: string;
  modified: string;
}

const BUCKETS: Bucket[] = [
  { name: "cobalt-app-assets", region: "ap-northeast-2", objects: 1284, size: "3.2GB", created: "2026-01-14" },
  { name: "cobalt-user-uploads", region: "ap-northeast-2", objects: 9021, size: "48.7GB", created: "2026-02-02" },
  { name: "cobalt-backup-archive", region: "ap-northeast-1", objects: 312, size: "112GB", created: "2025-11-20" },
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

export function BucketsScreen {
  const [selected, setSelected] = React.useState<string | null>(null);

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
            { id: "storageClass", header: "스토리지 클래스", cell: (o) => o.storageClass },
            { id: "modified", header: "수정일", cell: (o) => o.modified },
          ]}
        />
      </SpaceBetween>
    );
  }

  return (
    <Table<Bucket>
      items={BUCKETS}
      variant="container"
      header={<Header counter={`(${BUCKETS.length})`} description="이 계정의 버킷 목록">버킷</Header>}
      columnDefinitions={[
        { id: "name", header: "버킷 이름", cell: (b) => <Link onFollow={(e) => { e.preventDefault; setSelected(b.name); }}>{b.name}</Link> },
        { id: "region", header: "리전", cell: (b) => b.region },
        { id: "objects", header: "객체 수", cell: (b) => b.objects.toLocaleString },
        { id: "size", header: "크기", cell: (b) => b.size },
        { id: "created", header: "생성일", cell: (b) => b.created },
      ]}
    />
  );
}
