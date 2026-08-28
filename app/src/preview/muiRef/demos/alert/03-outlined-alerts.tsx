import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function OutlinedAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        outlined 스타일의 success Alert 예요.
      </Alert>
      <Alert variant="outlined" severity="info">
        outlined 스타일의 info Alert 예요.
      </Alert>
      <Alert variant="outlined" severity="warning">
        outlined 스타일의 warning Alert 예요.
      </Alert>
      <Alert variant="outlined" severity="error">
        outlined 스타일의 error Alert 예요.
      </Alert>
    </Stack>
  );
}
