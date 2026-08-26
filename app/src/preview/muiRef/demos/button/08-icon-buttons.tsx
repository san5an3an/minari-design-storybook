import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Delete as DeleteIcon } from '../_icons';
import { Alarm as AlarmIcon } from '../_icons';
import { AddShoppingCart as AddShoppingCartIcon } from '../_icons';

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
