import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FilledAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        filled 스타일의 success Alert 예요.
      </Alert>
      <Alert variant="filled" severity="info">
        filled 스타일의 info Alert 예요.
      </Alert>
      <Alert variant="filled" severity="warning">
        filled 스타일의 warning Alert 예요.
      </Alert>
      <Alert variant="filled" severity="error">
        filled 스타일의 error Alert 예요.
      </Alert>
    </Stack>
  );
}
