import { Check } from "lucide-react";
import type { StagesProps } from "../../systems/props";

export function Stages({ items, current }: StagesProps) {
  return (
    <ol className="ods-stages">
      {items.map((item, i) => {
        const state = i < current ? "done" : i === current ? "current" : "todo";
        return (
          <li
            key={i}
            className={`ods-stages-item ods-stages-item--${state}`}
            // 현재 단계에만 표시 추가
            aria-current={state === "current" ? "step" : undefined}
          >
            <span className="ods-stages-mark">
              {/* 계약 표본 _CHECK와 동일한 구조. 크기, 굵기는 CSS로 제어 */}
              {state === "done" ? <Check aria-hidden="true" /> : i + 1}
            </span>
            <span className="ods-stages-label">{item.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
