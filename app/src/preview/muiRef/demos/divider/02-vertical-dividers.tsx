import { FormatAlignLeft as FormatAlignLeftIcon } from '../_icons';
import { FormatAlignCenter as FormatAlignCenterIcon } from '../_icons';
import { FormatAlignRight as FormatAlignRightIcon } from '../_icons';
import { FormatBold as FormatBoldIcon } from '../_icons';
import Box from '@mui/material/Box';
import Divider, { dividerClasses } from '@mui/material/Divider';

export default function VerticalDividers() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1,
        },
        [`& .${dividerClasses.root}`]: {
          mx: 0.5,
        },
      }}
    >
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" flexItem />
      <FormatBoldIcon />
    </Box>
  );
}
