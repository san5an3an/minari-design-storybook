import * as React from "react";
import {
  Box, Card, CardActionArea, Chip, LinearProgress, Rating, Stack, Typography,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import TimelapseOutlined from "@mui/icons-material/TimelapseOutlined";
import { COURSES, ENROLLED } from "../data";
import type { ScreenProps } from "../screens";

const won = (n: number) => (n === 0 ? "무료" : `${n.toLocaleString("ko-KR")}원`);

// 인사말 한 행, 히어로 대신 Hello, {이름}!만 표시
function CoursesGreeting {
  return (
    <Typography variant="h6" component="h2">
      좋은 아침이에요, 하늘님 👋
    </Typography>
  );
}

// 작은 통계 카드. 스파크라인 없이 아이콘과 값만 표시
interface CourseStat {
  label: string; value: string;
  icon: React.ComponentType<{ fontSize?: "small" | "inherit" }>;
}
const COURSE_STATS: readonly CourseStat[] = [
  { label: "수강 중인 강좌", value: `${ENROLLED.length}개`, icon: SchoolOutlined },
  { label: "이번 주 학습시간", value: "3시간 40분", icon: TimelapseOutlined },
  { label: "완료한 레슨", value: "7개", icon: CheckCircleOutlined },
];

function CourseStatCard({ stat }: { stat: CourseStat }) {
  const Icon = stat.icon;
  return (
    <Card variant="outlined" sx={{ p: 1.5 }}>
      <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
        <Box
          aria-hidden
          sx={{
            alignItems: "center", bgcolor: "action.hover", borderRadius: 1,
            color: "primary.main", display: "flex", height: 32,
            justifyContent: "center", width: 32,
          }}
        >
          <Icon fontSize="small" />
        </Box>
        <Stack spacing={0}>
          <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

// 수강 중인 강좌 진행률 바
function EnrolledProgress {
  return (
    <Card variant="outlined" sx={{ p: 1.75 }}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">이어서 듣기</Typography>
        {ENROLLED.map((e) => {
          const course = COURSES.find((c) => c.id === e.courseId);
          if (!course) return null;
          return (
            <Stack key={e.courseId} spacing={0.5}>
              <Stack direction="row" sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
                <Typography variant="body2" noWrap title={course.title}>{course.title}</Typography>
                <Typography variant="caption" color="text.secondary">{e.progressPercent}%</Typography>
              </Stack>
              <LinearProgress variant="determinate" value={e.progressPercent} sx={{ borderRadius: 1, height: 6 }} />
              <Typography variant="caption" color="text.secondary">{e.lastWatchedLabel} 이어서 봄</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Card>
  );
}

// 미니 막대그래프 두 개. 카테고리, 레벨 분포 표시
function MiniBarCard({ title, data }: { title: string; data: readonly { label: string; value: number }[] }) {
  return (
    <Card variant="outlined" sx={{ p: 1.75 }}>
      <Typography variant="subtitle2" sx={{ mb: 0.5 }}>{title}</Typography>
      <BarChart
        height={140}
        series={[{ data: data.map((d) => d.value), color: "var(--mui-palette-primary-main, #1976d2)" }]}
        xAxis={[{ data: data.map((d) => d.label), scaleType: "band" }]}
        yAxis={[{ width: 24 }]}
        margin={{ top: 8, bottom: 24, left: 24, right: 8 }}
        slotProps={{ legend: { hidden: true } as never }}
      />
    </Card>
  );
}

function countBy<T extends string>(items: readonly T[]): { label: string; value: number }[] {
  const counts = new Map<string, number>;
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1);
  return [...counts.entries].map(([label, value]) => ({ label, value }));
}

export function CoursesScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const byCategory = React.useMemo( => countBy(COURSES.map((c) => c.category)), []);
  const byLevel = React.useMemo( => countBy(COURSES.map((c) => c.level)), []);

  return (
    <Stack spacing={2}>
      <CoursesGreeting />

      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
        }}
      >
        {COURSE_STATS.map((s) => (
          <CourseStatCard key={s.label} stat={s} />
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 1.5,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
        }}
      >
        <EnrolledProgress />
        <MiniBarCard title="카테고리별 강좌 수" data={byCategory} />
        <MiniBarCard title="레벨별 강좌 수" data={byLevel} />
      </Box>

    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
      }}
    >
      {COURSES.map((c) => (
        <Card key={c.id} variant="outlined">
          <CardActionArea onClick={ => open(c.id)} sx={{ p: 2 }}>
            <Stack spacing={1}>
              <Box
                aria-hidden
                sx={{
                  alignItems: "center",
                  bgcolor: "action.hover",
                  borderRadius: 1,
                  color: "text.disabled",
                  display: "flex",
                  height: 96,
                  justifyContent: "center",
                }}
              >
                <SchoolOutlined />
              </Box>
              <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                <Chip size="small" label={c.category} variant="outlined" />
                <Chip size="small" label={c.level} color="primary" variant="outlined" />
              </Stack>
              <Typography variant="subtitle2">{c.title}</Typography>
              <Typography variant="body2" color="text.secondary">{c.instructor}</Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Rating value={c.rating} precision={0.1} size="small" readOnly />
                <Typography variant="caption" color="text.secondary">
                  {c.rating} · 수강생 {c.students.toLocaleString("ko-KR")}명
                </Typography>
              </Stack>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{won(c.price)}</Typography>
            </Stack>
          </CardActionArea>
        </Card>
      ))}
      </Box>
    </Stack>
  );
}
