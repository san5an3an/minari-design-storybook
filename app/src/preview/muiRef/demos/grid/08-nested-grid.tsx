/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/grid/NestedGrid.tsx
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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Item>이메일 구독 자리</Item>
        </Grid>
        <Grid container spacing={4} size={{ xs: 12, md: 7, lg: 8 }}>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid size={{ xs: 6, lg: 3 }}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            fontSize: '12px',
          }}
          size={12}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>링크 A</Item>
            </Grid>
            <Grid>
              <Item>링크 B</Item>
            </Grid>
            <Grid>
              <Item>링크 C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
