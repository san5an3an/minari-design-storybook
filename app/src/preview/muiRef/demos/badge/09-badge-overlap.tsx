/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/badges/BadgeOverlap.tsx
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
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

const shapeSize = 32;

export default function BadgeOverlap() {
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent={1}>
        <Rectangle />
      </Badge>
      <Badge color="secondary" variant="dot">
        <Rectangle />
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent={1}>
        <Circle />
      </Badge>
      <Badge color="secondary" overlap="circular" variant="dot">
        <Circle />
      </Badge>
    </Stack>
  );
}

function Rectangle() {
  return (
    <Box
      component="span"
      sx={{ bgcolor: 'primary.main', width: shapeSize, height: shapeSize }}
    />
  );
}

function Circle() {
  return (
    <Box
      component="span"
      sx={{
        bgcolor: 'primary.main',
        width: shapeSize,
        height: shapeSize,
        borderRadius: '50%',
      }}
    />
  );
}
