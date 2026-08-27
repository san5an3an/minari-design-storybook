/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/breadcrumbs/IconBreadcrumbs.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Home as HomeIcon } from '../_icons';
import { Whatshot as WhatshotIcon } from '../_icons';
import { Grain as GrainIcon } from '../_icons';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          핵심
        </Link>
        <Typography
          sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
