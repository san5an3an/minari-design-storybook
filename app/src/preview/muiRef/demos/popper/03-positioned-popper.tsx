/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/popper/PositionedPopper.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <Box sx={{ width: 500 }}>
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>Popper 의 내용이에요.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Button onClick={handleClick('top-start')}>top-start</Button>
        <Button onClick={handleClick('top')}>top</Button>
        <Button onClick={handleClick('top-end')}>top-end</Button>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="column" sx={{ alignItems: 'flex-start' }}>
          <Button onClick={handleClick('left-start')}>left-start</Button>
          <Button onClick={handleClick('left')}>left</Button>
          <Button onClick={handleClick('left-end')}>left-end</Button>
        </Stack>
        <Stack direction="column" sx={{ alignItems: 'flex-end' }}>
          <Button onClick={handleClick('right-start')}>right-start</Button>
          <Button onClick={handleClick('right')}>right</Button>
          <Button onClick={handleClick('right-end')}>right-end</Button>
        </Stack>
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Button onClick={handleClick('bottom-start')}>bottom-start</Button>
        <Button onClick={handleClick('bottom')}>bottom</Button>
        <Button onClick={handleClick('bottom-end')}>bottom-end</Button>
      </Stack>
    </Box>
  );
}
