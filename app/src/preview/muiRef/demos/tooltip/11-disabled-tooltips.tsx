import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function DisabledTooltips() {
  return (
    <Tooltip describeChild title="You don't have permission to do this">
      <span>
        <Button disabled>못 누르는 버튼</Button>
      </span>
    </Tooltip>
  );
}
