/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/text-fields/LayoutTextFields.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function RedBar() {
  return (
    <Box
      sx={(theme) => ({
        height: 20,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        ...theme.applyStyles('dark', {
          backgroundColor: 'rgb(255 132 132 / 25%)',
        }),
      })}
    />
  );
}

export default function LayoutTextFields() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <RedBar />
      <TextField label={'margin="none"'} id="margin-none" />
      <RedBar />
      <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
      <RedBar />
      <TextField label={'margin="normal"'} id="margin-normal" margin="normal" />
      <RedBar />
    </Box>
  );
}
