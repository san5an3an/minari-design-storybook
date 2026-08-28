/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/selects/SelectLabels.tsx
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
  const id = React.useId();
  const noLabelId = React.useId();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={`${id}-label`}>나이</InputLabel>
        <Select
          aria-describedby={`${id}-helper-text`}
          labelId={`${id}-label`}
          id={id}
          value={age}
          label="나이"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
        <FormHelperText id={`${id}-helper-text`}>
          Visible label and helper text
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          aria-describedby={`${noLabelId}-helper-text`}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': '나이' }}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <MenuItem value={10}>열</MenuItem>
          <MenuItem value={20}>스물</MenuItem>
          <MenuItem value={30}>서른</MenuItem>
        </Select>
        <FormHelperText id={`${noLabelId}-helper-text`}>
          aria-label and helper text
        </FormHelperText>
      </FormControl>
    </div>
  );
}
