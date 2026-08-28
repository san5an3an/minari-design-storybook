/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/masonry/MasonryWithVariableHeightItems.tsx
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#fff',
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MasonryWithVariableHeightItems() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={2}>
        {heights.map((height, index) => (
          <Paper key={index}>
            <StyledAccordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component="span">Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>내용</AccordionDetails>
            </StyledAccordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
