/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/tree-view/overview/BasicSimpleTreeView.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 *    ② 그림 주소 `"/static/…"` → 그쪽 사이트 절대 주소.
 *
 * ⚠️ **아이콘은 안 바꿨다** — `@mui/icons-material` 을 그대로 부른다.
 *    MUI 베이스는 Lucide 전역 규칙의 **예외**다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function BasicSimpleTreeView() {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="grid" label="Data Grid">
          <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
          <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
          <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
        </TreeItem>
        <TreeItem itemId="pickers" label="Date and Time Pickers">
          <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
          <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
        </TreeItem>
        <TreeItem itemId="charts" label="Charts">
          <TreeItem itemId="charts-community" label="@mui/x-charts" />
          <TreeItem itemId="charts-pro" label="@mui/x-charts-pro" />
        </TreeItem>
        <TreeItem itemId="tree-view" label="Tree View">
          <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
          <TreeItem itemId="tree-view-pro" label="@mui/x-tree-view-pro" />
        </TreeItem>
      </SimpleTreeView>
    </Box>
  );
}
