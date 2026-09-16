import {
  Box, LinearProgress, Stack, Typography,
} from "@mui/material";
import { COURSES, ENROLLED, PAYMENTS } from "../data";

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

export function MyLearningScreen {
  return (
    <Stack spacing={3}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle1">수강 중</Typography>
        {ENROLLED.map((e) => {
          const course = COURSES.find((c) => c.id === e.courseId);
          if (!course) return null;
          return (
            <Box key={e.courseId} sx={{ border: 1, borderColor: "divider", borderRadius: 1, p: 1.5 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{course.title}</Typography>
                <Typography variant="caption" color="text.secondary">{e.lastWatchedLabel} 시청</Typography>
              </Stack>
              <LinearProgress variant="determinate" value={e.progressPercent} sx={{ mb: 0.5 }} />
              <Typography variant="caption" color="text.secondary">{e.progressPercent}% 완료</Typography>
            </Box>
          );
        })}
      </Stack>

      <Stack spacing={1}>
        <Typography variant="subtitle1">결제 내역</Typography>
        {PAYMENTS.map((p) => (
          <Stack key={p.id} direction="row" spacing={1} sx={{ justifyContent: "space-between", py: 1, borderBottom: 1, borderColor: "divider" }}>
            <Stack>
              <Typography variant="body2">{p.courseTitle}</Typography>
              <Typography variant="caption" color="text.secondary">{p.dateLabel} · {p.method}</Typography>
            </Stack>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{won(p.amount)}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
