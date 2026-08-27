/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/buttons/LoadingButtonsTransition.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Save as SaveIcon } from '../_icons';
import { Send as SendIcon } from '../_icons';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      <FormControlLabel
        sx={{ display: 'block' }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button
          size="small"
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          못 쓰는 상태
        </Button>
        <Button
          size="small"
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          데이터 가져오기
        </Button>
        <Button
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          보내기
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          저장
        </Button>
      </Box>
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button onClick={handleClick} loading={loading} variant="outlined" disabled>
          못 쓰는 상태
        </Button>
        <Button
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          데이터 가져오기
        </Button>
        <Button
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          보내기
        </Button>
        <Button
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          저장
        </Button>
      </Box>
    </div>
  );
}
