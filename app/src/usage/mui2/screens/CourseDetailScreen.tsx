import {
  Box, Button, Checkbox, Chip, LinearProgress, Stack, Typography,
} from "@mui/material";
import { COURSES } from "../data";
import type { ScreenProps } from "../screens";

export function CourseDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const course = COURSES.find((c) => c.id === selectedId);

  if (!course) {
    return (
      <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1, borderStyle: "dashed", p: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          강좌를 먼저 골라 주세요. "강좌" 탭에서 카드를 눌러 보세요.
        </Typography>
        <Button size="small" sx={{ mt: 1.5 }} onClick={ => onNavigate?.("courses")}>강좌 목록으로</Button>
      </Box>
    );
  }

  const doneCount = course.lessons.filter((l) => l.done).length;
  const totalMin = course.lessons.reduce((s, l) => s + l.minutes, 0);

  return (
    <Stack spacing={2}>
      <Stack spacing={0.5}>
        <Stack direction="row" spacing={0.75}>
          <Chip size="small" label={course.category} variant="outlined" />
          <Chip size="small" label={course.level} color="primary" variant="outlined" />
        </Stack>
        <Typography variant="h6">{course.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {course.instructor} · 총 {course.lessons.length}강 · {totalMin}분
        </Typography>
      </Stack>

      <Box>
        <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
          <Typography variant="caption" color="text.secondary">진도</Typography>
          <Typography variant="caption" color="text.secondary">{doneCount}/{course.lessons.length}강</Typography>
        </Stack>
        <LinearProgress variant="determinate" value={(doneCount / course.lessons.length) * 100} />
      </Box>

      <Stack spacing={1}>
        {course.lessons.map((l, i) => (
          <Stack key={l.title} direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Checkbox checked={l.done} size="small" disabled />
            <Typography variant="body2" sx={{ flex: 1 }}>{i + 1}. {l.title}</Typography>
            <Typography variant="caption" color="text.secondary">{l.minutes}분</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
