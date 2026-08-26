/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/progress/CustomizedProgressBars.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <CircularProgress
      variant="indeterminate"
      disableShrink
      enableTrackSlot
      sx={(theme) => ({
        color: '#1a90ff',
        animationDuration: '550ms',
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round',
        },
        [`& .${circularProgressClasses.track}`]: {
          opacity: 1,
          stroke: (theme.vars || theme).palette.grey[200],
          ...theme.applyStyles('dark', {
            stroke: (theme.vars || theme).palette.grey[800],
          }),
        },
        ...theme.applyStyles('dark', {
          color: '#308fe8',
        }),
      })}
      size={40}
      thickness={4}
      aria-label="Loading…"
      {...props}
    />
  );
}

// From https://github.com/mui/material-ui/issues/9496#issuecomment-959408221
function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        aria-label="Loading…"
        sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
      />
    </React.Fragment>
  );
}
export default function CustomizedProgressBars() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
      <GradientCircularProgress />
      <br />
      <BorderLinearProgress
        variant="determinate"
        value={50}
        aria-label="Export data"
      />
    </Stack>
  );
}
