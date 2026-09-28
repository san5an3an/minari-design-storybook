import * as React from "react";
import {
  Badge, Body1, Button, Caption1, Card, Carousel, CarouselCard, CarouselNav,
  CarouselNavButton, CarouselNavContainer, CarouselSlider, CarouselViewport, createTableColumn,
  DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow,
  Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger,
  Input, Label, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, ProgressBar, Tooltip, Tree,
  TreeItem, TreeItemLayout, type TableColumnDefinition,
} from "@fluentui/react-components";
import {
  ArrowDownloadRegular, DeleteRegular, DocumentPdfRegular, DocumentRegular,
  DocumentTableRegular, FolderRegular, MoreHorizontalRegular, SlideTextRegular,
} from "@fluentui/react-icons";
import { FILES, type FileItem } from "../data";
import { MiniBarChart } from "../miniBarChart";

const KIND_ICON: Record<FileItem["kind"], React.ReactNode> = {
  doc: <DocumentRegular />,
  sheet: <DocumentTableRegular />,
  slide: <SlideTextRegular />,
  pdf: <DocumentPdfRegular />,
};
const KIND_LABEL: Record<FileItem["kind"], string> = { doc: "문서", sheet: "시트", slide: "슬라이드", pdf: "PDF" };

function parseSizeKB(size: string): number {
  const m = /([\d.]+)\s*(KB|MB)/i.exec(size);
  if (!m) return 0;
  const n = Number(m[1]);
  return m[2].toUpperCase === "MB" ? n * 1024 : n;
}

// 통계 카드 4요소: 아이콘 배지, 라벨, 숫자, 진행바
function FileStatCard({ label, value, ratio, icon: Icon }: { label: string; value: string; ratio: number; icon: React.ComponentType<{ fontSize?: number }> }) {
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <span
          aria-hidden
          style={{
            alignItems: "center", background: "var(--colorBrandBackground)", borderRadius: "8px",
            // 리터럴 white 대신 Fluent on-brand 전경 토큰 사용
            color: "var(--colorNeutralForegroundOnBrand)", display: "flex", flexShrink: 0, height: "28px", justifyContent: "center", width: "28px",
          }}
        >
          <Icon fontSize={14} />
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{label}</Caption1>
          <Body1 style={{ fontSize: "16px", fontWeight: 600 }}>{value}</Body1>
        </div>
      </div>
      <ProgressBar value={ratio} thickness="medium" color="brand" />
    </Card>
  );
}

function KindBarChart({ files }: { files: readonly FileItem[] }) {
  const counts = new Map<string, number>;
  for (const f of files) counts.set(KIND_LABEL[f.kind], (counts.get(KIND_LABEL[f.kind]) ?? 0) + 1);
  const data = [...counts.entries].map(([label, value]) => ({ label, value }));
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>종류별 파일 수</Body1>
      <MiniBarChart title="종류별 파일 수" data={data} width={260} height={104} />
    </Card>
  );
}

const KIND_DONUT_COLOR: Record<FileItem["kind"], string> = {
  doc: "var(--colorBrandBackground)",
  sheet: "var(--colorPaletteGreenForeground2)",
  slide: "var(--colorPaletteYellowForeground2)",
  pdf: "var(--colorPaletteRedForeground2)",
};

// 용량 점유율 도넛 차트 렌더링, files prop 기준으로 계산
function StorageShareDonutChart({ files }: { files: readonly FileItem[] }) {
  const byKind = new Map<FileItem["kind"], number>;
  for (const f of files) byKind.set(f.kind, (byKind.get(f.kind) ?? 0) + parseSizeKB(f.size));
  const totalKB = [...byKind.values].reduce((a, b) => a + b, 0);
  const order = [...byKind.keys];
  const r = 34;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const segments = order.map((kind) => {
    const kb = byKind.get(kind) ?? 0;
    const ratio = totalKB === 0 ? 0 : kb / totalKB;
    const seg = { kind, dash: ratio * c, offset, pct: Math.round(ratio * 100) };
    offset += ratio * c;
    return seg;
  });
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>종류별 용량 점유율</Body1>
      {/* flexWrap: "wrap" 지정. 위 grid가 고정 3열이라 카드가 좁아질 수 있음 */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
        <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
          <g transform="translate(44,44) rotate(-90)">
            <circle r={r} fill="none" stroke="var(--colorNeutralStroke2)" strokeWidth={12} />
            {segments.map((s) => (
              <circle
                key={s.kind} r={r} fill="none" stroke={KIND_DONUT_COLOR[s.kind]} strokeWidth={12}
                strokeDasharray={`${s.dash} ${c - s.dash}`} strokeDashoffset={-s.offset}
              />
            ))}
          </g>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {segments.map((s) => (
            <Tooltip key={s.kind} content={`${KIND_LABEL[s.kind]} ${s.pct}%`} relationship="label">
              <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "default" }}>
                <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: KIND_DONUT_COLOR[s.kind], display: "inline-block" }} />
                <Caption1>{KIND_LABEL[s.kind]} {s.pct}%</Caption1>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function FilesScreen {
  const [files, setFiles] = React.useState<FileItem[]>(FILES);
  const [query, setQuery] = React.useState("");
  const [kindFilter, setKindFilter] = React.useState<FileItem["kind"] | null>(null);
  const [deleteTarget, setDeleteTarget] = React.useState<FileItem | null>(null);
  const rows = files
    .filter((f) => f.name.includes(query) || f.owner.includes(query))
    .filter((f) => !kindFilter || f.kind === kindFilter);
  const totalKB = files.reduce((sum, f) => sum + parseSizeKB(f.size), 0);
  const totalSizeLabel = totalKB >= 1024 ? `${(totalKB / 1024).toFixed(1)}MB` : `${Math.round(totalKB)}KB`;
  // 저장 공간 한도 20MB 가정. 진행바 분모로 사용, 장식용 막대 제외
  const STORAGE_CAP_KB = 20 * 1024;
  const recentCount = files.filter((f) => f.modified.includes("분 전") || f.modified.includes("시간 전")).length;

  const columns: TableColumnDefinition<FileItem>[] = [
    createTableColumn<FileItem>({
      columnId: "name",
      renderHeaderCell:  => "이름",
      renderCell: (item) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
          <span aria-hidden style={{ display: "flex", color: "var(--colorNeutralForeground3)" }}>
            {KIND_ICON[item.kind]}
          </span>
          <Body1 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {item.name}
          </Body1>
        </div>
      ),
    }),
    createTableColumn<FileItem>({ columnId: "owner", renderHeaderCell:  => "소유자", renderCell: (item) => item.owner }),
    createTableColumn<FileItem>({
      columnId: "modified",
      renderHeaderCell:  => "수정",
      renderCell: (item) => <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{item.modified}</Caption1>,
    }),
    createTableColumn<FileItem>({
      columnId: "size",
      renderHeaderCell:  => "크기",
      renderCell: (item) => <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{item.size}</Caption1>,
    }),
    createTableColumn<FileItem>({
      columnId: "actions",
      renderHeaderCell:  => "",
      renderCell: (item) => (
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <button
              aria-label={`${item.name} 더보기`}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--colorNeutralForeground3)", display: "flex" }}
            >
              <MoreHorizontalRegular />
            </button>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem icon={<ArrowDownloadRegular />}>다운로드</MenuItem>
              <MenuItem icon={<DeleteRegular />} onClick={ => setDeleteTarget(item)}>삭제</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      ),
    }),
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* 고정 3열 그리드 사용. auto-fit 쓰면 카드 하나가 홀로 남음 */}
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <FileStatCard label="전체 파일" value={`${files.length}개`} ratio={1} icon={FolderRegular} />
        <FileStatCard label="총 용량" value={totalSizeLabel} ratio={Math.min(totalKB / STORAGE_CAP_KB, 1)} icon={DocumentRegular} />
        <FileStatCard label="24시간 내 수정" value={`${recentCount}개`} ratio={files.length === 0 ? 0 : recentCount / files.length} icon={DocumentPdfRegular} />
      </div>
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        <KindBarChart files={files} />
        <StorageShareDonutChart files={files} />
        {/* 폴더 트리로 종류별 필터링, 리프 선택 시 해당 종류만 표시 */}
        <Card style={{ padding: "14px" }}>
          <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>폴더 보기</Body1>
          <Tree aria-label="파일 종류별 폴더">
            <TreeItem itemType="branch" open>
              <TreeItemLayout onClick={ => setKindFilter(null)}>전체 ({files.length})</TreeItemLayout>
              <Tree>
                {(Object.keys(KIND_LABEL) as FileItem["kind"][]).map((k) => (
                  <TreeItem key={k} itemType="leaf">
                    <TreeItemLayout
                      iconBefore={KIND_ICON[k] as React.ReactElement}
                      onClick={ => setKindFilter(k)}
                      style={{ fontWeight: kindFilter === k ? 600 : 400 }}
                    >
                      {KIND_LABEL[k]} ({files.filter((f) => f.kind === k).length})
                    </TreeItemLayout>
                  </TreeItem>
                ))}
              </Tree>
            </TreeItem>
          </Tree>
        </Card>
      </div>

      {/* Carousel로 최근 파일 훑어보기. 실제 썸네일이 없어 아이콘 카드가 대체임 */}
      <Card style={{ padding: "14px" }}>
        <Body1 style={{ fontWeight: 600, marginBottom: "8px" }}>최근 파일 미리보기</Body1>
        {/* 빈 배열 방지용. 비면 Carousel이 슬라이드 0개를 처리할 수 없음 */}
        {files.length === 0 ? (
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>미리 볼 파일이 없어요.</Caption1>
        ) : (
          <Carousel groupSize={1} circular>
            <CarouselViewport>
              <CarouselSlider>
                {files.slice(0, 4).map((f) => (
                  <CarouselCard key={f.id} aria-label={f.name}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", padding: "24px" }}>
                      <span aria-hidden style={{ fontSize: "32px", color: "var(--colorBrandBackground)", display: "flex" }}>
                        {KIND_ICON[f.kind]}
                      </span>
                      <Body1 style={{ fontWeight: 600 }}>{f.name}</Body1>
                      <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{f.owner} · {f.modified}</Caption1>
                    </div>
                  </CarouselCard>
                ))}
              </CarouselSlider>
            </CarouselViewport>
            <CarouselNavContainer layout="inline">
              <CarouselNav>{(index) => <CarouselNavButton aria-label={`파일 ${index + 1}`} />}</CarouselNav>
            </CarouselNavContainer>
          </Carousel>
        )}
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px", maxWidth: "260px" }}>
        <Label htmlFor="files-search">파일 검색</Label>
        <Input
          id="files-search"
          value={query}
          onChange={(_, data) => setQuery(data.value)}
          placeholder="파일명·소유자 검색"
        />
      </div>
      {rows.length === 0 ? (
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>조건에 맞는 파일이 없어요.</Caption1>
      ) : (
        <DataGrid
          items={rows}
          columns={columns}
          getRowId={(item) => item.id}
          resizableColumns
          columnSizingOptions={{
            name: { minWidth: 160, idealWidth: 220 },
            owner: { minWidth: 56, idealWidth: 64 },
            modified: { minWidth: 56, idealWidth: 64 },
            size: { minWidth: 56, idealWidth: 64 },
            actions: { minWidth: 32, idealWidth: 32 },
          }}
          style={{ minWidth: "520px" }}
        >
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<FileItem>>
            {({ item, rowId }) => (
              <DataGridRow<FileItem> key={rowId}>
                {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      )}
      {rows.length > 0 ? (
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          <Badge appearance="tint" size="small">{rows.length}개</Badge> 표시 중 · 전체 {files.length}개
        </Caption1>
      ) : null}

      {/* 삭제 확인 Dialog. 메뉴에서 즉시 삭제 금지, 확인 후 files 에서 제거 */}
      <Dialog open={deleteTarget !== null} onOpenChange={(_, data) => { if (!data.open) setDeleteTarget(null); }}>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>{deleteTarget?.name} 삭제할까요?</DialogTitle>
            <DialogContent>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
                삭제하면 되돌릴 수 없어요.
              </Caption1>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary" onClick={ => setDeleteTarget(null)}>취소</Button>
              </DialogTrigger>
              <Button
                appearance="primary"
                onClick={ => {
                  setFiles((prev) => prev.filter((f) => f.id !== deleteTarget?.id));
                  setDeleteTarget(null);
                }}
              >
                삭제
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}
