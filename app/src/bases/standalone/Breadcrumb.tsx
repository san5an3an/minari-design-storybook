import { ChevronRight } from "lucide-react";
import type { BreadcrumbProps } from "../../systems/props";

export function Breadcrumb({ items, separator }: BreadcrumbProps) {
  // 계약 표본 _SEP와 동일한 구조. 크기, 색은 CSS로 제어
  const sep = separator === undefined
    ? <ChevronRight className="ods-breadcrumb-sep" aria-hidden="true" />
    : <span className="ods-breadcrumb-sep" aria-hidden="true">{separator}</span>;

  return (
    <nav className="ods-breadcrumb-nav" aria-label="현재 위치">
      <ol className="ods-breadcrumb">
        {items.map((item, i) => (
          <li key={i}>
            {i > 0 && sep}
            {item.ellipsis ? (
              // 접힌 상태에도 이름 유지 필요. …만 읽히면 무엇이 사라졌는지 알 수 없음
              <span className="ods-breadcrumb-ellipsis" aria-label="생략된 경로">{item.label}</span>
            ) : item.href !== undefined ? (
              <a href={item.href}>{item.label}</a>
            ) : i === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
