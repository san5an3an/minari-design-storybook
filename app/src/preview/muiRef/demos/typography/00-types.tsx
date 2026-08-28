/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/typography/Types.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 *    ② 그림 주소 `"/static/…"` → 그쪽 사이트 절대 주소.
 *
 * ⚠️ **아이콘은 안 바꿨다** — `@mui/icons-material` 을 그대로 부른다.
 *    MUI 베이스는 Lucide 전역 규칙의 **예외**다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
