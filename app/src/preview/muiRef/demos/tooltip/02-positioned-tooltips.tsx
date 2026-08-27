import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function PositionedTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip describeChild title="더하기" placement="top-start">
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip describeChild title="더하기" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip describeChild title="더하기" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction="column" sx={{ alignItems: 'flex-start' }}>
          <Tooltip describeChild title="더하기" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="left">
            <Button>left</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Stack>
        <Stack direction="column" sx={{ alignItems: 'flex-end' }}>
          <Tooltip describeChild title="더하기" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="right">
            <Button>right</Button>
          </Tooltip>
          <Tooltip describeChild title="더하기" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Stack>
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <Tooltip title="더하기" placement="bottom-start">
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="더하기" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="더하기" placement="bottom-end">
          <Button>bottom-end</Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}
