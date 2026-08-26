/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/portal/SimplePortal.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Portal from '@mui/material/Portal';
import { Box } from '@mui/system';

export default function SimplePortal() {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {show ? 'Unmount children' : 'Mount children'}
      </button>
      <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
        It looks like I will render here.
        {show ? (
          <Portal container={() => container.current!}>
            <span>But I actually render here!</span>
          </Portal>
        ) : null}
      </Box>
      <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />
    </div>
  );
}
