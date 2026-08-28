import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip describeChild title="더하기">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip
        describeChild
        title="더하기"
        slots={{
          transition: Fade,
        }}
        slotProps={{
          transition: { timeout: 600 },
        }}
      >
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip
        describeChild
        title="더하기"
        slots={{
          transition: Zoom,
        }}
      >
        <Button>확대/축소</Button>
      </Tooltip>
    </div>
  );
}
