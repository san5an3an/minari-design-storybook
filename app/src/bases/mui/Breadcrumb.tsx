import { ChevronRight } from "lucide-react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { BreadcrumbProps } from "../../systems/props";

export function Breadcrumb({ items, separator }: BreadcrumbProps) {
  const last = items.length - 1;
  return (
    <MuiBreadcrumbs
      aria-label="이동경로"
      separator={
        separator ?? (
          <ChevronRight
            aria-hidden
            style={{ width: "1em", height: "1em", color: "var(--component-breadcrumb-separator)" }}
          />
        )
      }
      sx={{
        color: "var(--component-breadcrumb-fg)",
        fontSize: "var(--component-breadcrumb-font-size)",
        letterSpacing: "var(--component-breadcrumb-letter-spacing)",
        "& .MuiBreadcrumbs-separator": {
          marginInline: "var(--component-breadcrumb-gap)",
          color: "var(--component-breadcrumb-separator)",
        },
      }}
    >
      {items.map((it, i) => {
        const pad = {
          paddingInline: "var(--component-breadcrumb-tap-padding-inline)",
          paddingBlock: "var(--component-breadcrumb-tap-padding-block)",
        };
        // 줄임 셀은 링크 대상에서 제외
        if (it.ellipsis || i === last || it.href === undefined) {
          return (
            <Typography
              key={i}
              component="span"
              sx={{
                ...pad,
                fontSize: "inherit",
                letterSpacing: "inherit",
                color: i === last
                  ? "var(--component-breadcrumb-fg-current)"
                  : "var(--component-breadcrumb-fg)",
              }}
              // 마지막 셀이 현재 위치임을 스크린리더에 전달
              aria-current={i === last ? "page" : undefined}
            >
              {it.label}
            </Typography>
          );
        }
        return (
          <Link
            key={i}
            href={it.href}
            underline="hover"
            sx={{
              ...pad,
              color: "var(--component-breadcrumb-fg)",
              fontSize: "inherit",
              letterSpacing: "inherit",
              "&:hover": { color: "var(--component-breadcrumb-fg-hover)" },
            }}
          >
            {it.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}
