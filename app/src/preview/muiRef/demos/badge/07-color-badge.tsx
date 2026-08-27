/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/badges/ColorBadge.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { CalendarMonth as CalendarMonthIcon } from '../_icons';
import { FolderOpen as FolderOpenIcon } from '../_icons';
import { ReportProblemOutlined as ReportProblemOutlinedIcon } from '../_icons';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <IconButton aria-label="show 8 shared files">
        <Badge badgeContent={8} color="primary">
          <FolderOpenIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 2 confirmed events">
        <Badge badgeContent={2} color="success">
          <CalendarMonthIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 1 critical alert">
        <Badge badgeContent={1} color="error">
          <ReportProblemOutlinedIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
}
