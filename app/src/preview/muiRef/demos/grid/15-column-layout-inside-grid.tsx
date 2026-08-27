import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ColumnLayoutInsideGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Stack spacing={2}>
            <Item>1열 - 1행</Item>
            <Item>1열 - 2행</Item>
            <Item>1열 - 3행</Item>
          </Stack>
        </Grid>
        <Grid size={8}>
          <Item sx={{ height: '100%', boxSizing: 'border-box' }}>2열</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
