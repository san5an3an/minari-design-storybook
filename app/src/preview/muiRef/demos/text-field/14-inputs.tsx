import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="Hello world" inputProps={ariaLabel} />
      <Input placeholder="안내 문구" inputProps={ariaLabel} />
      <Input disabled defaultValue="못 쓰는 상태" inputProps={ariaLabel} />
      <Input defaultValue="오류" error inputProps={ariaLabel} />
    </Box>
  );
}
