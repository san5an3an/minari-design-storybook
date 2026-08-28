import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>하나</Button>
      <Button>둘</Button>
      <Button>셋</Button>
    </ButtonGroup>
  );
}
