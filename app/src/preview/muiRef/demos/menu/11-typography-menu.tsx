import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { Drafts as DraftsIcon } from '../_icons';
import { Send as SendIcon } from '../_icons';
import { PriorityHigh as PriorityHighIcon } from '../_icons';

export default function TypographyMenu() {
  return (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">짧은 메시지예요</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">칸을 넘칠 만큼 아주 긴 글이에요</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            칸을 넘칠 만큼 아주 긴 글이에요
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
