import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>기본</Button>
      <Button disabled>못 쓰는 상태</Button>
      <Button href="#text-buttons">링크</Button>
    </Stack>
  );
}
