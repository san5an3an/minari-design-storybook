import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>성공</AlertTitle>
        제목이 힘을 북돋는 success Alert 예요.
      </Alert>
      <Alert severity="info">
        <AlertTitle>안내</AlertTitle>
        제목이 알려 주는 info Alert 예요.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>경고</AlertTitle>
        제목이 조심하라고 이르는 warning Alert 예요.
      </Alert>
      <Alert severity="error">
        <AlertTitle>오류</AlertTitle>
        제목이 겁을 주는 error Alert 예요.
      </Alert>
    </Stack>
  );
}
