import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            칫솔
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            5,000원
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          가는 세로줄이 들어간 수레국화빛 면 블라우스로, 공원 산책에도 복도 마실에도 어울려요.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          종류 선택
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="부드러운" size="small" />
          <Chip label="중간" size="small" />
          <Chip label="단단한" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}
