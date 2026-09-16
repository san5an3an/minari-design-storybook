import * as React from "react";
import {
  Box, Card, CardActionArea, Chip, Rating, Stack, Typography,
} from "@mui/material";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import { COURSES } from "../data";
import type { ScreenProps } from "../screens";

const won = (n: number) => (n === 0 ? "무료" : `${n.toLocaleString("ko-KR")}원`);

export function CoursesScreen({ onNavigate, onSelect }: ScreenProps) {
  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
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
  );
}
