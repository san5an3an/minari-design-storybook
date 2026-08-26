import * as React from 'react';
import { ViewList as ViewListIcon } from '../_icons';
import { ViewModule as ViewModuleIcon } from '../_icons';
import { ViewQuilt as ViewQuiltIcon } from '../_icons';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
