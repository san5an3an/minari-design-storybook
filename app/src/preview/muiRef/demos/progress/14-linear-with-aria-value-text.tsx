/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/progress/LinearWithAriaValueText.tsx
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
import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type LinearProgressWithLabelAndValueProps = LinearProgressProps & {
  min: number;
  max: number;
  value: number;
};

function LinearProgressWithLabelAndValue({
  max,
  min,
  value,
  ...rest
}: LinearProgressWithLabelAndValueProps) {
  const progressText = `Elevator at floor ${value} out of ${max}.`;
  const progressId = React.useId();
  return (
    <div>
      <Typography
        id={progressId}
        variant="body2"
        color="text.secondary"
        sx={{ mr: 1 }}
      >
        Elevator status
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            aria-labelledby={progressId}
            aria-valuetext={progressText}
            min={min}
            max={max}
            value={value}
            {...rest}
          />
        </Box>
        <Box sx={{ whiteSpace: 'nowrap' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {progressText}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default function LinearWithAriaValueText() {
  const [progress, setProgress] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 10 ? 1 : prevProgress + 1));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabelAndValue value={progress} min={1} max={10} />
    </Box>
  );
}
