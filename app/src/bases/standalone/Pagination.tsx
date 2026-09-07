import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MouseEvent } from "react";
import type { PaginationProps } from "../../systems/props";

// 계약 페이지 번호 목록. null은 건너뛴 구간임
function window_(page: number, total: number): (number | null)[] {
  const nums: (number | null)[] = [1];
  if (page > 3) nums.push(null);
  for (let n = Math.max(2, page - 1); n < Math.min(total, page + 2); n++) {
    if (n !== 1 && n !== total) nums.push(n);
  }
  if (page < total - 2) nums.push(null);
  nums.push(total);
  return nums;
}

export function Pagination({ page, total, onPage }: PaginationProps) {
  if (total <= 1) return null;

  const go = (n: number) => (e: MouseEvent) => {
    e.preventDefault;
    if (n !== page) onPage?.(n);
  };

  return (
    <nav className="ods-pagination" aria-label="쪽 이동">
      <ul className="ods-pagination-list">
        <li>
          <a
            className="ods-pagination-item"
            href="#prev"
            aria-label="이전 쪽"
            // 첫 페이지도 흐리게 표시. 감추면 번호 밀려 같은 위치가 다른 페이지 되는 문제 있음
            aria-disabled={page === 1 ? "true" : undefined}
            onClick={go(Math.max(1, page - 1))}
          >
            <ChevronLeft aria-hidden="true" />
          </a>
        </li>

        {window_(page, total).map((n, i) =>
          n === null ? (
            <li key={`gap-${i}`}>
              <span className="ods-pagination-gap" aria-hidden="true">
                …
              </span>
            </li>
          ) : (
            <li key={n}>
              <a
                className="ods-pagination-item"
                href={`#pg${n}`}
                // 숫자에 단위 표시
                aria-label={`${n}쪽`}
                aria-current={n === page ? "page" : undefined}
                onClick={go(n)}
              >
                {n}
              </a>
            </li>
          ),
        )}

        <li>
          <a
            className="ods-pagination-item"
            href="#next"
            aria-label="다음 쪽"
            aria-disabled={page === total ? "true" : undefined}
            onClick={go(Math.min(total, page + 1))}
          >
            <ChevronRight aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
