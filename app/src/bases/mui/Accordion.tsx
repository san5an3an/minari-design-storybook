import * as React from "react";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import type { AccordionProps } from "../../systems/props";

export function Accordion({ items, multiple, defaultValue = [] }: AccordionProps) {
  // 초기값도 동일 가드 적용. toggle에만 두면 규칙이 달라지는 문제 있음
  const [open, setOpen] = React.useState<string[]>(
     => (multiple ? defaultValue : defaultValue.slice(0, 1)),
  );

  const toggle = (value: string) => (_: unknown, expanded: boolean) => {
    setOpen((prev) => {
      if (!expanded) return prev.filter((v) => v !== value);
      // 단일 열림 모드는 이전 항목 닫기
      return multiple ? [...prev, value] : [value];
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item) => (
        <MuiAccordion
          key={item.value}
          expanded={open.includes(item.value)}
          onChange={toggle(item.value)}
          disableGutters
          elevation={0}
          square
          sx={{
            background: "transparent",
            borderBottom: "var(--semantic-border-width-default) solid var(--component-accordion-border)",
            borderRadius: "var(--component-accordion-radius)",
            // 기존 밑줄 유지, MUI ::before 구분선 끔. 겹쳐 이중선 보임
            "&::before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreRounded
                style={{
                  width: "var(--component-accordion-marker-size)",
                  height: "var(--component-accordion-marker-size)",
                  color: "var(--component-accordion-marker-fg)",
                }}
              />
            }
            sx={{
              paddingInline: "var(--component-accordion-head-padding-inline)",
              color: "var(--component-accordion-head-fg)",
              fontSize: "var(--component-accordion-head-font-size)",
              letterSpacing: "var(--component-accordion-head-letter-spacing)",
              gap: "var(--component-accordion-head-gap)",
              // 높이 하한만 적용. 고정값 사용 시 밀도 구분이 사라지는 문제 있음
              minHeight: 0,
              "&:hover": { background: "var(--component-accordion-head-bg-hover)" },
              // 세로 여백은 루트가 아닌 content의 margin이 생성하는 방식임
              "& .MuiAccordionSummary-content": {
                marginBlock: "var(--component-accordion-head-padding-block)",
              },
            }}
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              paddingInline: "var(--component-accordion-body-padding-inline)",
              paddingBlock: 0,
              paddingBottom: "var(--component-accordion-body-padding-block-end)",
              color: "var(--component-accordion-body-fg)",
              fontSize: "var(--component-accordion-body-font-size)",
              letterSpacing: "var(--component-accordion-body-letter-spacing)",
            }}
          >
            {item.body}
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
