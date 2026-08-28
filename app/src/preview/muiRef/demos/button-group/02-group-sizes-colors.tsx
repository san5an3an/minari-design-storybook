import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one">하나</Button>,
  <Button key="two">둘</Button>,
  <Button key="three">셋</Button>,
];

export default function GroupSizesColors() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
