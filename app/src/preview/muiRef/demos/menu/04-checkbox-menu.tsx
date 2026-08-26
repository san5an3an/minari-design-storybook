/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/menus/CheckboxMenu.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **한 가지만** 바꾼 것이다 —
 *    아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Check } from '../_icons';

const options = ['Show toolbar', 'Show sidebar', 'Show status bar'];

export default function CheckboxMenu() {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({
    'Show toolbar': true,
  });

  const handleToggle = (option: string) => () => {
    setChecked((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        {options.map((option) => (
          <MenuItem
            key={option}
            role="menuitemcheckbox"
            selected={Boolean(checked[option])}
            onClick={handleToggle(option)}
          >
            <ListItemIcon>
              {checked[option] ? <Check fontSize="small" /> : null}
            </ListItemIcon>
            <ListItemText>{option}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
