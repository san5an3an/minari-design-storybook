/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/badges/BadgeIntro.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Mail as MailIcon } from '../_icons';

const maxVisibleNotifications = 99;
const unreadNotificationsCount = 100;

function getUnreadNotificationsLabel(count: number) {
  if (count === 0) {
    return 'show no unread notifications';
  }
  if (count > maxVisibleNotifications) {
    return `show more than ${maxVisibleNotifications} unread notifications`;
  }
  return `show ${count} unread notification${count === 1 ? '' : 's'}`;
}

export default function BadgeIntro() {
  const label = getUnreadNotificationsLabel(unreadNotificationsCount);

  return (
    <IconButton aria-label={label}>
      <Badge
        badgeContent={unreadNotificationsCount}
        color="secondary"
        max={maxVisibleNotifications}
      >
        <MailIcon />
      </Badge>
    </IconButton>
  );
}
