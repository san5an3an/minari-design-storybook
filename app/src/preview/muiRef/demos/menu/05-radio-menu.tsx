/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/menus/RadioMenu.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { RadioButtonChecked } from '../_icons';
import { RadioButtonUnchecked } from '../_icons';

const options = ['이름', 'Date modified', 'Size'];

export default function RadioMenu() {
  const [selected, setSelected] = React.useState('이름');

  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        {options.map((option) => (
          <MenuItem
            key={option}
            role="menuitemradio"
            selected={selected === option}
            onClick={() => setSelected(option)}
          >
            <ListItemIcon>
              {selected === option ? (
                <RadioButtonChecked fontSize="small" />
              ) : (
                <RadioButtonUnchecked fontSize="small" />
              )}
            </ListItemIcon>
            <ListItemText>{option}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
