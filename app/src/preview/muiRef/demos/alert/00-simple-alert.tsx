import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      하신 일이 잘 끝났다고 조용히 알려 드려요.
    </Alert>
  );
}
