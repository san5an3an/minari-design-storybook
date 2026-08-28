import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning" onClose={() => {}}>
        기본 닫기 아이콘을 보여 주는 Alert 예요.
      </Alert>
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small">
            되돌리기
          </Button>
        }
      >
        동작으로 Button 을 쓴 Alert 예요.
      </Alert>
    </Stack>
  );
}
