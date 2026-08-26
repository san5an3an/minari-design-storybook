import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Add as AddIcon } from '../_icons';
import { Edit as EditIcon } from '../_icons';
import { Favorite as FavoriteIcon } from '../_icons';
import { Navigation as NavigationIcon } from '../_icons';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
