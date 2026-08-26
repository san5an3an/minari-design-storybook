import {
  Pagination as ShadcnPagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination";
import type { PaginationProps } from "../../systems/props";

// 현재 페이지 주변 범위만 표시
function around(page: number, total: number): (number | "gap")[] {
  const out: (number | "gap")[] = [];
  for (let p = 1; p <= total; p += 1) {
    if (p === 1 || p === total || Math.abs(p - page) <= 1) out.push(p);
    else if (out[out.length - 1] !== "gap") out.push("gap");
  }
  return out;
}

export function Pagination({ page, total, onPage }: PaginationProps) {
  const go = (p: number) => (e: React.MouseEvent) => {
    e.preventDefault;
    if (p >= 1 && p <= total) onPage?.(p);
  };
  const link = {
    color: "var(--component-pagination-fg)",
    fontSize: "var(--component-pagination-font-size)",
    borderRadius: "var(--component-pagination-radius)",
    minWidth: "var(--component-pagination-size)",
    height: "var(--component-pagination-size)",
  };

  return (
    <ShadcnPagination>
      <PaginationContent style={{ gap: "var(--component-pagination-gap)" }}>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={go(page - 1)}
            aria-disabled={page === 1}
            style={{
              ...link,
              ...(page === 1
                ? { color: "var(--component-pagination-disabled-fg)", pointerEvents: "none" }
                : null),
            }}
          />
        </PaginationItem>

        {around(page, total).map((p, i) =>
          p === "gap" ? (
            <PaginationItem key={`gap-${i}`}>
              <PaginationEllipsis style={{ color: "var(--component-pagination-disabled-fg)" }} />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                onClick={go(p)}
                isActive={p === page}
                style={{
                  ...link,
                  ...(p === page
                    ? {
                        background: "var(--component-pagination-current-bg)",
                        color: "var(--component-pagination-current-fg)",
                        pointerEvents: "none",
                      }
                    : null),
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={go(page + 1)}
            aria-disabled={page === total}
            style={{
              ...link,
              ...(page === total
                ? { color: "var(--component-pagination-disabled-fg)", pointerEvents: "none" }
                : null),
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
}
