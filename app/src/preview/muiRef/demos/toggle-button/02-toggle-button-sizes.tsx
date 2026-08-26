import * as React from 'react';
import { FormatAlignLeft as FormatAlignLeftIcon } from '../_icons';
import { FormatAlignCenter as FormatAlignCenterIcon } from '../_icons';
import { FormatAlignRight as FormatAlignRightIcon } from '../_icons';
import { FormatAlignJustify as FormatAlignJustifyIcon } from '../_icons';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
