import { Fragment } from "react";
import {
  Breadcrumb as ShadcnBreadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { BreadcrumbProps } from "../../systems/props";

export function Breadcrumb({ items, separator }: BreadcrumbProps) {
  return (
    <ShadcnBreadcrumb style={{ fontSize: "var(--component-breadcrumb-font-size)" }}>
      <BreadcrumbList style={{ gap: "var(--component-breadcrumb-gap)" }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            // 구분자는 항목 밖에 배치. Separator도 li라서 안에 넣으면 마크업이 어긋나 있음
            <Fragment key={i}>
              <BreadcrumbItem>
                {it.ellipsis ? (
                  <BreadcrumbEllipsis style={{ color: "var(--component-breadcrumb-fg)" }} />
                ) : last ? (
                  <BreadcrumbPage style={{ color: "var(--component-breadcrumb-fg-current)" }}>
                    {it.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={it.href ?? "#"}
                    style={{
                      color: "var(--component-breadcrumb-fg)",
                      // 손가락으로 누를 수 있게 터치 영역 확장. 글자 높이만으로는 좁음
                      paddingInline: "var(--component-breadcrumb-tap-padding-inline)",
                      paddingBlock: "var(--component-breadcrumb-tap-padding-block)",
                    }}
                  >
                    {it.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {last ? null : (
                <BreadcrumbSeparator style={{ color: "var(--component-breadcrumb-separator)" }}>
                  {separator}
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  );
}
