import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import Stack from '@mui/material/Stack';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        아이콘을 직접 준 success Alert 예요.
      </Alert>
      <Alert icon={false} severity="success">
        아이콘이 없는 success Alert 예요.
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        `iconMapping` 으로 기본 아이콘을 바꾼 success Alert 예요.
      </Alert>
    </Stack>
  );
}
