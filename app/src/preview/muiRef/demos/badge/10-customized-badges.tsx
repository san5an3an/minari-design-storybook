/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/badges/CustomizedBadges.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

type ContactStatus = 'online' | 'offline';

const statusLabels: Record<ContactStatus, string> = {
  online: 'Online',
  offline: 'Offline',
};

const contacts = [
  { name: 'Remy Sharp', initials: 'R', status: 'online' },
  { name: 'Travis Howard', initials: 'T', status: 'offline' },
  { name: 'Cindy Baker', initials: 'C', status: 'online' },
] as const;

const ContactStatusBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'status',
})<{ status: ContactStatus }>(({ theme, status }) => {
  const themePalette = (theme.vars ?? theme).palette;
  const offlineBadgeColor = theme.vars
    ? theme.vars.palette.Avatar.defaultBg
    : theme.palette.grey[400];

  return {
    '& .MuiBadge-badge': {
      height: 10,
      minWidth: 10,
      border: `1px solid ${themePalette.grey[300]}`,
      boxShadow: `0 0 0 2px ${themePalette.background.paper}`,
      ...(status === 'offline' && {
        backgroundColor: offlineBadgeColor,
        ...(theme.vars
          ? {}
          : theme.applyStyles('dark', {
              backgroundColor: theme.palette.grey[600],
            })),
      }),
    },
  };
});

export default function CustomizedBadges() {
  return (
    <Paper variant="outlined" sx={{ width: 320, maxWidth: '100%' }}>
      <List component="nav" aria-label="contacts" sx={{ py: 0 }}>
        {contacts.map((contact) => {
          const statusLabel = statusLabels[contact.status];

          return (
            <ListItemButton
              key={contact.name}
              aria-label={`${contact.name}, ${contact.status}`}
            >
              <ListItemAvatar>
                <ContactStatusBadge
                  status={contact.status}
                  color={contact.status === 'online' ? 'success' : 'default'}
                  variant="dot"
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                  <Avatar>{contact.initials}</Avatar>
                </ContactStatusBadge>
              </ListItemAvatar>
              <ListItemText primary={contact.name} secondary={statusLabel} />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
}
