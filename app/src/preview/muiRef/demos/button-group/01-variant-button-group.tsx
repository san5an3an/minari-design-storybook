import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
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
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>하나</Button>
        <Button>둘</Button>
        <Button>셋</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>하나</Button>
        <Button>둘</Button>
        <Button>셋</Button>
      </ButtonGroup>
    </Box>
  );
}
