import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FileCopyOutlined as FileCopyIcon } from '../_icons';
import { Save as SaveIcon } from '../_icons';
import { Print as PrintIcon } from '../_icons';
import { Share as ShareIcon } from '../_icons';

const actions = [
  { icon: <FileCopyIcon />, name: '복사' },
  { icon: <SaveIcon />, name: '저장' },
  { icon: <PrintIcon />, name: '인쇄' },
  { icon: <ShareIcon />, name: '공유' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
