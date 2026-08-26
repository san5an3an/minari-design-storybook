/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/tooltips/PositionedTooltips.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
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
        <Tooltip describeChild title="Add" placement="top-start">
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip describeChild title="Add" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip describeChild title="Add" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="column" sx={{ alignItems: 'flex-start' }}>
          <Tooltip describeChild title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Stack>
        <Stack direction="column" sx={{ alignItems: 'flex-end' }}>
          <Tooltip describeChild title="Add" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="right">
            <Button>right</Button>
          </Tooltip>
          <Tooltip describeChild title="Add" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Stack>
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip title="Add" placement="bottom-start">
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom-end">
          <Button>bottom-end</Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}
