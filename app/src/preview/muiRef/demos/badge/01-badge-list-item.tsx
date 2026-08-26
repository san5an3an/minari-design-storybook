import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Drafts as DraftsIcon } from '../_icons';
import { Inbox as InboxIcon } from '../_icons';
import { Send as SendIcon } from '../_icons';

const unreadMessagesCount = 4;

export default function BadgeListItem() {
  return (
    <Paper variant="outlined" sx={{ width: 320, maxWidth: '100%' }}>
      <List component="nav" aria-label="mail folders" sx={{ py: 0 }}>
        <ListItemButton
          selected
          aria-current="page"
          aria-label={`Inbox, ${unreadMessagesCount} unread messages`}
        >
          <ListItemIcon>
            <Badge badgeContent={unreadMessagesCount} color="primary">
              <InboxIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
