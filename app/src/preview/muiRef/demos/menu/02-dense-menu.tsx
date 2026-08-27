import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Check } from '../_icons';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>하나</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>둘</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>문단 앞에 여백 넣기</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>문단 뒤에 여백 넣기</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>여백 직접 정하기…</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
