import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function ArrowTooltips() {
  return (
    <Tooltip describeChild title="더하기" arrow>
      <Button>화살표</Button>
    </Tooltip>
  );
}
