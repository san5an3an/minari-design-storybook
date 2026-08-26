import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Face as FaceIcon } from '../_icons';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
