import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">보조</Button>
      <Button variant="contained" color="success">
        성공
      </Button>
      <Button variant="outlined" color="error">
        오류
      </Button>
    </Stack>
  );
}
