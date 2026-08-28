import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function NonInteractiveTooltips() {
  return (
    <Tooltip describeChild title="더하기" disableInteractive>
      <Button>누를 수 없어요</Button>
    </Tooltip>
  );
}
