import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function SizesChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="작게" size="small" />
      <Chip label="작게" size="small" variant="outlined" />
    </Stack>
  );
}
