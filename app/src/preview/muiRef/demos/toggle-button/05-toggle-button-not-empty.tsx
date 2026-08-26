import * as React from 'react';
import { FormatAlignLeft as FormatAlignLeftIcon } from '../_icons';
import { FormatAlignCenter as FormatAlignCenterIcon } from '../_icons';
import { FormatAlignRight as FormatAlignRightIcon } from '../_icons';
import { Laptop as LaptopIcon } from '../_icons';
import { Tv as TvIcon } from '../_icons';
import { PhoneAndroid as PhoneAndroidIcon } from '../_icons';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[],
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
