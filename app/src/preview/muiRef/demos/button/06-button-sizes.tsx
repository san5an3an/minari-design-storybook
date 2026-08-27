/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/buttons/ButtonSizes.tsx
 *       tools/fetch_mui_reference.py 가 공식 저장소에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@mui/icons-material` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/mui_demo_ko.py` 의 사전).
 *       ⚠️ 사전에 있는 것만 바뀐다. API 값은 영어 그대로다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">작게</Button>
        <Button size="medium">보통</Button>
        <Button size="large">크게</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          작게
        </Button>
        <Button variant="outlined" size="medium">
          보통
        </Button>
        <Button variant="outlined" size="large">
          크게
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          작게
        </Button>
        <Button variant="contained" size="medium">
          보통
        </Button>
        <Button variant="contained" size="large">
          크게
        </Button>
      </div>
    </Box>
  );
}
