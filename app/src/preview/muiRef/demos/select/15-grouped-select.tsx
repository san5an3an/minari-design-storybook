/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/selects/GroupedSelect.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  const nativeId = React.useId();
  const id = React.useId();
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor={`${nativeId}-select`}>묶기</InputLabel>
        <Select native defaultValue="" id={`${nativeId}-select`} label="묶기">
          <option aria-label="없음" value="" />
          <optgroup label="분류 1">
            <option value={1}>선택지 1</option>
            <option value={2}>선택지 2</option>
          </optgroup>
          <optgroup label="분류 2">
            <option value={3}>선택지 3</option>
            <option value={4}>선택지 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={`${id}-label`}>묶기</InputLabel>
        <Select
          defaultValue=""
          id={`${id}-select`}
          label="묶기"
          SelectDisplayProps={{
            'aria-labelledby': `${id}-label`,
          }}
        >
          <MenuItem value="">
            <em>없음</em>
          </MenuItem>
          <ListSubheader>분류 1</ListSubheader>
          <MenuItem value={1}>선택지 1</MenuItem>
          <MenuItem value={2}>선택지 2</MenuItem>
          <ListSubheader>분류 2</ListSubheader>
          <MenuItem value={3}>선택지 3</MenuItem>
          <MenuItem value={4}>선택지 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
