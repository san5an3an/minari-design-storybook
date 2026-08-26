import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart as ShoppingCartIcon } from '../_icons';

export default function LoadingIconButton() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <Tooltip title="Click to see loading">
      <IconButton onClick={() => setLoading(true)} loading={loading}>
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip>
  );
}
