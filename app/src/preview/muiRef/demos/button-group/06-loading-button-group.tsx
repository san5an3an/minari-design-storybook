import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function LoadingButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="Loading button group">
      <Button>보내기</Button>
      <Button>데이터 가져오기</Button>
      <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
        저장
      </Button>
    </ButtonGroup>
  );
}
