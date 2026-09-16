import type * as React from "react";
import {
  Body1, Caption1, createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader,
  DataGridHeaderCell, DataGridRow, type TableColumnDefinition,
} from "@fluentui/react-components";
import { DocumentRegular, DocumentPdfRegular, DocumentTableRegular, SlideTextRegular } from "@fluentui/react-icons";
import { FILES, type FileItem } from "../data";

const KIND_ICON: Record<FileItem["kind"], React.ReactNode> = {
  doc: <DocumentRegular />,
  sheet: <DocumentTableRegular />,
  slide: <SlideTextRegular />,
  pdf: <DocumentPdfRegular />,
};

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
  createTableColumn<FileItem>({
    columnId: "owner",
    renderHeaderCell:  => "소유자",
    renderCell: (item) => item.owner,
  }),
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
];

export function FilesScreen {
  return (
    <DataGrid
      items={FILES}
      columns={columns}
      getRowId={(item) => item.id}
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
  );
}
