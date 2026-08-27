/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/selects/DialogSelect.tsx
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
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DialogSelect() {
  const nativeId = React.useId();
  const selectId = React.useId();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState<number | string>('');

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = (
    _event: React.SyntheticEvent<unknown>,
    reason: string,
  ) => {
    if (!['backdropClick', 'escapeKeyDown'].includes(reason)) {
      setOpen(false);
    }
  };

  const handleActionButtonClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>고르기 대화상자 열기</Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>양식을 채워 주세요</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor={`${nativeId}-select`}>나이</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="나이" id={`${nativeId}-select`} />}
              >
                <option aria-label="없음" value="" />
                <option value={10}>열</option>
                <option value={20}>스물</option>
                <option value={30}>서른</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id={`${selectId}-label`}>나이</InputLabel>
              <Select
                labelId={`${selectId}-label`}
                id={`${selectId}-select`}
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="나이" />}
              >
                <MenuItem value="">
                  <em>없음</em>
                </MenuItem>
                <MenuItem value={10}>열</MenuItem>
                <MenuItem value={20}>스물</MenuItem>
                <MenuItem value={30}>서른</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleActionButtonClick}>취소</Button>
          <Button onClick={handleActionButtonClick}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
