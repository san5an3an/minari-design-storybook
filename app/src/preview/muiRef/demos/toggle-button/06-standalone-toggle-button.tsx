import * as React from 'react';
import { Check as CheckIcon } from '../_icons';
import ToggleButton from '@mui/material/ToggleButton';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => setSelected((prevSelected) => !prevSelected)}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
