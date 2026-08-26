import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Notifications as NotificationsIcon } from '../_icons';

export default function DotBadge() {
  return (
    <IconButton aria-label="show new notifications">
      <Badge color="secondary" variant="dot">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
