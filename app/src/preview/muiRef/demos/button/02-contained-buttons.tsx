import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">채운 것</Button>
      <Button variant="contained" disabled>
        못 쓰는 상태
      </Button>
      <Button variant="contained" href="#contained-buttons">
        링크
      </Button>
    </Stack>
  );
}
