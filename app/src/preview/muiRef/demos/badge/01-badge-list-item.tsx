/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/badges/BadgeListItem.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
