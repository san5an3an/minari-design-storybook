import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Mail as MailIcon } from '../_icons';

export default function SimpleBadge() {
  return (
    <IconButton aria-label="show 4 unread messages">
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
    </IconButton>
  );
}
