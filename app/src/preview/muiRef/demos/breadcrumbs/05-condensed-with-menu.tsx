/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/breadcrumbs/CondensedWithMenu.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { MoreHoriz as MoreHorizIcon } from '../_icons';

export default function CondensedWithMenu() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | null) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="with-menu-demo-breadcrumbs"
      >
        <MenuItem onClick={handleClose}>위치 2</MenuItem>
        <MenuItem onClick={handleClose}>위치 3</MenuItem>
        <MenuItem onClick={handleClose}>위치 4</MenuItem>
      </Menu>
      <Breadcrumbs aria-label="breadcrumbs">
        <Link color="primary" href="#condensed-with-menu">
          Breadcrumb 1
        </Link>
        <IconButton color="primary" size="small" onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
        <Link color="primary" href="#condensed-with-menu">
          Breadcrumb 5
        </Link>
        <Link color="primary" href="#condensed-with-menu">
          Breadcrumb 6
        </Link>
      </Breadcrumbs>
    </React.Fragment>
  );
}
