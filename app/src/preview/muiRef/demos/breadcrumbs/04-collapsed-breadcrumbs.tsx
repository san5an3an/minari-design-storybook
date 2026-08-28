import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          홈
        </Link>
        <Link underline="hover" color="inherit" href="#">
          카탈로그
        </Link>
        <Link underline="hover" color="inherit" href="#">
          액세서리
        </Link>
        <Link underline="hover" color="inherit" href="#">
          새 컬렉션
        </Link>
        <Typography sx={{ color: 'text.primary' }}>벨트</Typography>
      </Breadcrumbs>
    </div>
  );
}
