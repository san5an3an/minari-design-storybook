/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/click-away-listener/LeadingClickAway.tsx
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
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';

export default function LeadingClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: 'relative' }}>
        <button type="button" onClick={handleClick}>
          메뉴 펼치기
        </button>
        {open ? (
          <Box sx={styles}>
            눌러 보세요. 바깥을 누르기 전까지 그대로 있어요.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
