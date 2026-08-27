import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Navigation as NavigationIcon } from '../_icons';

export default function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        넓힌 것
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        넓힌 것
      </Fab>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        넓힌 것
      </Fab>
    </Box>
  );
}
