import * as React from "react";
import {
  Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Breadcrumbs, Button, Card,
  CardActionArea, Checkbox, Chip, Divider, FormControlLabel, LinearProgress, Link, List,
  ListItem, ListItemAvatar, ListItemText, Radio, RadioGroup, Rating, Stack, TextareaAutosize,
  Typography,
} from "@mui/material";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import { COURSE_REVIEWS, COURSES } from "../data";
import type { ScreenProps } from "../screens";

const won = (n: number) => (n === 0 ? "무료" : `${n.toLocaleString("ko-KR")}원`);

type RelatedSort = "인기순" | "평점순";

export function CourseDetailScreen({ selectedId, onNavigate, onSelect }: ScreenProps) {
  const course = COURSES.find((c) => c.id === selectedId);
  const [relatedSort, setRelatedSort] = React.useState<RelatedSort>("인기순");
  const [instructorOnly, setInstructorOnly] = React.useState(false);
  const [draftReview, setDraftReview] = React.useState("");

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
  const courseReviews = COURSE_REVIEWS.filter((r) => r.courseId === course.id);
  const related = React.useMemo( => {
    const list = instructorOnly
      ? COURSES.filter((c) => c.instructor === course.instructor && c.id !== course.id)
      : COURSES.filter((c) => c.category === course.category && c.id !== course.id);
    return relatedSort === "평점순" ? [...list].sort((a, b) => b.rating - a.rating) : [...list].sort((a, b) => b.students - a.students);
  }, [course.category, course.id, course.instructor, instructorOnly, relatedSort]);

  return (
    <Stack spacing={2}>
      <Breadcrumbs aria-label="이동 경로">
        <Link component="button" underline="hover" color="inherit" onClick={ => onNavigate?.("courses")}>
          강좌
        </Link>
        <Typography color="text.primary">{course.title}</Typography>
      </Breadcrumbs>

      <Stack spacing={0.5}>
        <Stack direction="row" spacing={0.75}>
          <Chip size="small" label={course.category} variant="outlined" />
          <Chip size="small" label={course.level} color="primary" variant="outlined" />
        </Stack>
        <Typography variant="h6">{course.title}</Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Rating value={course.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary">
            {course.rating} · 수강생 {course.students.toLocaleString("ko-KR")}명 · 총 {course.lessons.length}강 · {totalMin}분
          </Typography>
        </Stack>
      </Stack>

      <Card variant="outlined" sx={{ p: 1.5 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Avatar sx={{ height: 44, width: 44 }}>{course.instructor.slice(0, 1)}</Avatar>
            <Stack spacing={0}>
              <Typography variant="subtitle2">{course.instructor} 강사</Typography>
              <Typography variant="caption" color="text.secondary">{course.category} 전문 · 개설 강좌 {COURSES.filter((c) => c.instructor === course.instructor).length}개</Typography>
            </Stack>
          </Stack>
          <Link
            component="button"
            underline="hover"
            variant="body2"
            onClick={ => setInstructorOnly((v) => !v)}
          >
            {instructorOnly ? "전체 강좌 보기" : "이 강사의 다른 강좌"}
          </Link>
        </Stack>
      </Card>

      <Box>
        <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
          <Typography variant="caption" color="text.secondary">진도</Typography>
          <Typography variant="caption" color="text.secondary">{doneCount}/{course.lessons.length}강</Typography>
        </Stack>
        <LinearProgress variant="determinate" value={(doneCount / course.lessons.length) * 100} />
      </Box>

      <Accordion defaultExpanded disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography variant="subtitle2">커리큘럼 {course.lessons.length}강</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            {course.lessons.map((l, i) => (
              <Stack key={l.title} direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                <Checkbox checked={l.done} size="small" disabled />
                <Typography variant="body2" sx={{ flex: 1 }}>{i + 1}. {l.title}</Typography>
                <Typography variant="caption" color="text.secondary">{l.minutes}분</Typography>
              </Stack>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      {(related.length > 0 || instructorOnly) && (
        <Stack spacing={1}>
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <Typography variant="subtitle2">
              {instructorOnly ? `${course.instructor} 강사의 다른 강좌` : `${course.category} 카테고리의 다른 강좌`}
            </Typography>
            <RadioGroup
              row
              value={relatedSort}
              onChange={(e) => setRelatedSort(e.target.value as RelatedSort)}
            >
              <FormControlLabel value="인기순" control={<Radio size="small" />} label={<Typography variant="caption">인기순</Typography>} />
              <FormControlLabel value="평점순" control={<Radio size="small" />} label={<Typography variant="caption">평점순</Typography>} />
            </RadioGroup>
          </Stack>
          {related.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              {course.instructor} 강사가 개설한 다른 강좌가 아직 없어요.
            </Typography>
          ) : (
          <Box sx={{ display: "grid", gap: 1.25, gridTemplateColumns: { xs: "1fr", sm: `repeat(${Math.min(related.length, 3)}, minmax(0, 1fr))` } }}>
            {related.map((c) => (
              <Card key={c.id} variant="outlined">
                <CardActionArea onClick={ => { onSelect?.(c.id); }} sx={{ p: 1.5 }}>
                  <Stack spacing={0.5}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>{c.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{c.instructor}</Typography>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                      <Rating value={c.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption" color="text.secondary">{won(c.price)}</Typography>
                    </Stack>
                  </Stack>
                </CardActionArea>
              </Card>
            ))}
          </Box>
          )}
        </Stack>
      )}

      {courseReviews.length > 0 && (
        <>
          <Divider textAlign="left">수강생 리뷰 {courseReviews.length}</Divider>
          <List disablePadding>
            {courseReviews.map((rv) => (
              <ListItem key={rv.id} alignItems="flex-start" disableGutters>
                <ListItemAvatar>
                  <Avatar sx={{ height: 32, width: 32, fontSize: 14 }}>{rv.author.slice(0, 1)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{rv.author}</Typography>
                      <Rating value={rv.rating} size="small" readOnly />
                      <Typography variant="caption" color="text.secondary">{rv.dateLabel}</Typography>
                    </Stack>
                  }
                  secondary={rv.comment}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}

      <Divider textAlign="left">리뷰 쓰기</Divider>
      <Stack spacing={1}>
        <TextareaAutosize
          minRows={2}
          placeholder={`${course.title}은(는) 어떠셨나요?`}
          value={draftReview}
          onChange={(e) => setDraftReview(e.target.value)}
          style={{
            borderColor: "var(--mui-palette-divider, #ccc)", borderRadius: 4, fontFamily: "inherit",
            fontSize: "0.875rem", padding: "0.5rem 0.75rem", resize: "vertical",
          }}
        />
        <Button
          size="small"
          variant="outlined"
          disabled={draftReview.trim.length === 0}
          onClick={ => setDraftReview("")}
          sx={{ alignSelf: "flex-end" }}
        >
          리뷰 등록
        </Button>
      </Stack>
    </Stack>
  );
}
