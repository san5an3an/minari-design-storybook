import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function LoadingButtons() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button loading variant="outlined">
          보내기
        </Button>
        <Button loading loadingIndicator="Loading…" variant="outlined">
          데이터 가져오기
        </Button>
        <Button
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          저장
        </Button>
      </Stack>
      <Button
        fullWidth
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        가득 채우기
      </Button>
      <Button
        fullWidth
        loading
        loadingPosition="end"
        endIcon={<SaveIcon />}
        variant="outlined"
      >
        가득 채우기
      </Button>
      <Stack direction="row" spacing={2}>
        <Button loading variant="outlined" loadingPosition="start">
          보내기
        </Button>
        <Button loading variant="outlined" loadingPosition="end">
          보내기
        </Button>
        <Button
          loading
          variant="outlined"
          loadingPosition="end"
          startIcon={<SaveIcon />}
        >
          저장
        </Button>
      </Stack>
    </Stack>
  );
}
