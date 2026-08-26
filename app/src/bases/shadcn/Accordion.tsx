import {
  Accordion as ShadcnAccordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import type { AccordionProps } from "../../systems/props";

export function Accordion({ items, multiple, defaultValue }: AccordionProps) {
  return (
    <ShadcnAccordion
      // prop 이름 multiple. 기본값 미지정시 api.json과 차이날 수 있음
      multiple={multiple ?? false}
      defaultValue={defaultValue ?? (items[0] ? [items[0].value] : [])}
      style={{
        borderColor: "var(--component-accordion-border)",
        borderWidth: "var(--semantic-border-width-default)",
        borderRadius: "var(--component-accordion-radius)",
        overflow: "hidden",
      }}
    >
      {items.map((it) => (
        <AccordionItem
          key={it.value}
          value={it.value}
          // 색상값만 지정. 굵기 지정 시 사방에 테두리와 마지막 행 하단 선이 생기는 문제 있음
          style={{ borderColor: "var(--component-accordion-border)" }}
        >
          <AccordionTrigger
            style={{
              color: "var(--component-accordion-head-fg)",
              fontSize: "var(--component-accordion-head-font-size)",
              paddingInline: "var(--component-accordion-head-padding-inline)",
              paddingBlock: "var(--component-accordion-head-padding-block)",
              gap: "var(--component-accordion-head-gap)",
            }}
          >
            {it.title}
          </AccordionTrigger>
          {/* Panel에 여백 두지 않기. padding 남아있다가 언마운트로 사라지는 문제 있음 */}
          <AccordionContent
            className="pt-0 pb-0"
            style={{
              color: "var(--component-accordion-body-fg)",
              fontSize: "var(--component-accordion-body-font-size)",
            }}
          >
            <div
              style={{
                paddingInline: "var(--component-accordion-body-padding-inline)",
                // 위쪽 여백 0으로 지정
                paddingBlockStart: 0,
                paddingBlockEnd: "var(--component-accordion-body-padding-block-end)",
              }}
            >
              {it.body}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
}
