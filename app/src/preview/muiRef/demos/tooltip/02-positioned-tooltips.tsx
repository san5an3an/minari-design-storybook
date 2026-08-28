/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/tooltips/PositionedTooltips.tsx
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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip describeChild title="더하기" placement="top-start">
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip describeChild title="더하기" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip describeChild title="더하기" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="column" sx={{ alignItems: 'flex-start' }}>
          <Tooltip describeChild title="더하기" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="left">
            <Button>left</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Stack>
        <Stack direction="column" sx={{ alignItems: 'flex-end' }}>
          <Tooltip describeChild title="더하기" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="right">
            <Button>right</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Stack>
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip title="더하기" placement="bottom-start">
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="더하기" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="더하기" placement="bottom-end">
          <Button>bottom-end</Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}
