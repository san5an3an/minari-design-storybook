import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. 자리를 대신 채우는 표본 글이에요. 이 변형이 화면에서 어떻게 보이는지 봐 주세요
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. 자리를 대신 채우는 표본 글이에요. 이 변형이 화면에서 어떻게 보이는지 봐 주세요
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. 자리를 대신 채우는 표본 글이에요. 이 변형으로 여러 줄짜리 문단을 그렸을 때 줄이 어떻게 나뉘고 줄 간격이 어떻게 잡히는지 봐 주세요. 여기 적힌 내용 자체에는 뜻이 없으니 글자 크기와 짜임만 살펴 주시면 돼요. 다른 변형과 나란히 두고 견주면 차이가 잘 보여요.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. 자리를 대신 채우는 표본 글이에요. 이 변형으로 여러 줄짜리 문단을 그렸을 때 줄이 어떻게 나뉘고 줄 간격이 어떻게 잡히는지 봐 주세요. 여기 적힌 내용 자체에는 뜻이 없으니 글자 크기와 짜임만 살펴 주시면 돼요. 다른 변형과 나란히 두고 견주면 차이가 잘 보여요.
      </Typography>
      <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
        button text
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
        caption text
      </Typography>
      <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
        overline text
      </Typography>
    </Box>
  );
}
