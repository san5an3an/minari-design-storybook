import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">글자</Button>
      <Button variant="contained">채운 것</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
