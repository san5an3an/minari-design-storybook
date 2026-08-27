import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">성공을 알리는 Alert 예요.</Alert>
      <Alert severity="info">안내하는 Alert 예요.</Alert>
      <Alert severity="warning">경고하는 Alert 예요.</Alert>
      <Alert severity="error">오류를 알리는 Alert 예요.</Alert>
    </Stack>
  );
}
