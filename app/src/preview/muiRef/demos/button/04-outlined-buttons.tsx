import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">기본</Button>
      <Button variant="outlined" disabled>
        못 쓰는 상태
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        링크
      </Button>
    </Stack>
  );
}
