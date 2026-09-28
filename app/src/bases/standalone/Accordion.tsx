import * as React from "react";
import { ChevronDown } from "lucide-react";
import type { AccordionProps } from "../../systems/props";

export function Accordion({ items, multiple, defaultValue }: AccordionProps) {
  const uid = React.useId;
  const [open, setOpen] = React.useState<readonly string[]>(
    defaultValue ?? (items.length > 0 ? [items[0].value] : []),
  );

  const toggle = (value: string) =>
    setOpen((prev) => {
      const isOpen = prev.includes(value);
      if (isOpen) return prev.filter((v) => v !== value);
      // 단일 펼침 모드는 이전 항목 닫기. 기본값과 반대라 명시적으로 지정
      return multiple ? [...prev, value] : [value];
    });

  return (
    <div className="ods-accordion">
      {items.map((item) => {
        const isOpen = open.includes(item.value);
        const headId = `${uid}-${item.value}-head`;
        const bodyId = `${uid}-${item.value}-body`;
        return (
          <div className="ods-accordion-item" key={item.value}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="ods-accordion-head"
                id={headId}
                aria-expanded={isOpen}
                aria-controls={bodyId}
                onClick={ => toggle(item.value)}
              >
                {item.title}
                <span className="ods-accordion-marker" aria-hidden="true">
                  <ChevronDown />
                </span>
              </button>
            </h3>
            <div
              className="ods-accordion-body"
              id={bodyId}
              role="region"
              aria-labelledby={headId}
              hidden={!isOpen}
            >
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
