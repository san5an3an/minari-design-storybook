import * as React from "react";
import {
  Box, Button, ButtonGroup, Card, LinearProgress, MenuItem, Popover, Rating, Select, Stack,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
  type SelectChangeEvent,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import { COURSES, ENROLLED, PAYMENTS } from "../data";

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;
type SortKey = "최신순" | "금액순";

type EnrolledSort = "진도순" | "최근순";

export function MyLearningScreen {
  const [sort, setSort] = React.useState<SortKey>("최신순");
  const [enrolledSort, setEnrolledSort] = React.useState<EnrolledSort>("최근순");
  const [popoverAnchor, setPopoverAnchor] = React.useState<HTMLElement | null>(null);

  const totalSpent = PAYMENTS.reduce((s, p) => s + p.amount, 0);
  const avgProgress = ENROLLED.length
    ? Math.round(ENROLLED.reduce((s, e) => s + e.progressPercent, 0) / ENROLLED.length)
    : 0;
  const byMethod = React.useMemo( => {
    const m = new Map<string, number>;
    for (const p of PAYMENTS) m.set(p.method, (m.get(p.method) ?? 0) + p.amount);
    return [...m.entries];
  }, []);

  // 결제수단별 파이차트 렌더링. Popover byMethod 데이터 재사용해 값 일치 보장
  const methodPieData = React.useMemo(
     => byMethod.map(([method, amount], id) => ({ id, label: method, value: amount })),
    [byMethod],
  );

  const stats = [
    { icon: SchoolOutlined, label: "수강 중인 강좌", value: `${ENROLLED.length}개`, delta: "+2개", up: true, onClick: undefined },
    { icon: CheckCircleOutlined, label: "평균 진도율", value: `${avgProgress}%`, delta: "+8%p", up: true, onClick: undefined },
    {
      icon: PaymentsOutlined, label: "누적 결제액", value: won(totalSpent), delta: "+2건", up: true,
      onClick: (e: React.MouseEvent<HTMLElement>) => setPopoverAnchor(e.currentTarget),
    },
  ];

  const payments = React.useMemo(
     => (sort === "금액순" ? [...PAYMENTS].sort((a, b) => b.amount - a.amount) : PAYMENTS),
    [sort],
  );
  const enrolled = React.useMemo(
     => (enrolledSort === "진도순"
      ? [...ENROLLED].sort((a, b) => b.progressPercent - a.progressPercent)
      : [...ENROLLED].sort((a, b) => a.daysSinceWatched - b.daysSinceWatched)),
    [enrolledSort],
  );

  return (
    <Stack spacing={3}>
      <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.label}
              variant="outlined"
              onClick={s.onClick}
              sx={{ p: 1.5, textAlign: "center", cursor: s.onClick ? "pointer" : "default" }}
            >
              <Icon color="action" fontSize="small" />
              <Typography variant="caption" color="text.secondary" component="p">{s.label}</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{s.value}</Typography>
              <Typography variant="caption" sx={{ color: s.up ? "success.main" : "error.main", fontWeight: 600 }}>
                {s.delta}
              </Typography>
            </Card>
          );
        })}
      </Box>

      {/* 결제수단별 파이차트 렌더링. CoursesScreen BarChart 두 개와 다른 종류 */}
      <Card variant="outlined" sx={{ p: 1.75 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: "center" }}>
          <Stack spacing={0.25} sx={{ flexShrink: 0 }}>
            <Typography variant="subtitle2">결제수단별 비중</Typography>
            <Typography variant="caption" color="text.secondary">
              누적 {won(totalSpent)} · {byMethod.length}개 수단
            </Typography>
          </Stack>
          <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
            <PieChart
              series={[
                {
                  data: methodPieData,
                  innerRadius: 28,
                  paddingAngle: 2,
                  cornerRadius: 3,
                  highlightScope: { fade: "global", highlight: "item" },
                  valueFormatter: (v) => won(v.value),
                },
              ]}
              height={150}
            />
          </Box>
        </Stack>
      </Card>

      <Popover
        open={popoverAnchor !== null}
        anchorEl={popoverAnchor}
        onClose={ => setPopoverAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Stack spacing={1} sx={{ p: 1.5, minWidth: 180 }}>
          <Typography variant="caption" color="text.secondary">결제수단별 누적</Typography>
          {byMethod.map(([method, amount]) => (
            <Stack key={method} direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="body2">{method}</Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{won(amount)}</Typography>
            </Stack>
          ))}
        </Stack>
      </Popover>

      <Stack spacing={1.5}>
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">수강 중</Typography>
          <ButtonGroup size="small" variant="outlined">
            <Button
              variant={enrolledSort === "최근순" ? "contained" : "outlined"}
              onClick={ => setEnrolledSort("최근순")}
            >
              최근순
            </Button>
            <Button
              variant={enrolledSort === "진도순" ? "contained" : "outlined"}
              onClick={ => setEnrolledSort("진도순")}
            >
              진도순
            </Button>
          </ButtonGroup>
        </Stack>
        {enrolled.map((e) => {
          const course = COURSES.find((c) => c.id === e.courseId);
          if (!course) return null;
          return (
            <Card key={e.courseId} variant="outlined" sx={{ p: 1.5 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{course.title}</Typography>
                <Typography variant="caption" color="text.secondary">{e.lastWatchedLabel} 시청</Typography>
              </Stack>
              <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", mb: 0.5 }}>
                <Rating value={course.rating} precision={0.1} size="small" readOnly />
                <Typography variant="caption" color="text.secondary">{course.instructor}</Typography>
              </Stack>
              <LinearProgress variant="determinate" value={e.progressPercent} sx={{ mb: 0.5 }} />
              <Typography variant="caption" color="text.secondary">{e.progressPercent}% 완료</Typography>
            </Card>
          );
        })}
      </Stack>

      <Stack spacing={1}>
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">결제 내역</Typography>
          <Select
            size="small"
            value={sort}
            onChange={(e: SelectChangeEvent) => setSort(e.target.value as SortKey)}
            sx={{ minWidth: 110 }}
          >
            <MenuItem value="최신순">최신순</MenuItem>
            <MenuItem value="금액순">금액순</MenuItem>
          </Select>
        </Stack>
        <TableContainer component={Card} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>강좌</TableCell>
                <TableCell>결제일</TableCell>
                <TableCell>수단</TableCell>
                <TableCell align="right">금액</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.courseTitle}</TableCell>
                  <TableCell>{p.dateLabel}</TableCell>
                  <TableCell>{p.method}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>{won(p.amount)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}
