/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * 출처: mui/material-ui 의 docs/data/material/components/alert/DescriptionAlerts.tsx
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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>성공</AlertTitle>
        제목이 힘을 북돋는 success Alert 예요.
      </Alert>
      <Alert severity="info">
        <AlertTitle>안내</AlertTitle>
        제목이 알려 주는 info Alert 예요.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>경고</AlertTitle>
        제목이 조심하라고 이르는 warning Alert 예요.
      </Alert>
      <Alert severity="error">
        <AlertTitle>오류</AlertTitle>
        제목이 겁을 주는 error Alert 예요.
      </Alert>
    </Stack>
  );
}
