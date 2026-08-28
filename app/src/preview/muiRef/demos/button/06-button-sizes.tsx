import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">작게</Button>
        <Button size="medium">보통</Button>
        <Button size="large">크게</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          작게
        </Button>
        <Button variant="outlined" size="medium">
          보통
        </Button>
        <Button variant="outlined" size="large">
          크게
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          작게
        </Button>
        <Button variant="contained" size="medium">
          보통
        </Button>
        <Button variant="contained" size="large">
          크게
        </Button>
      </div>
    </Box>
  );
}
