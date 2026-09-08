import { ExternalLink } from "lucide-react";
import { cx } from "../cx";
import type { LinkProps } from "../../systems/props";

export function Link({ href, external, children, className }: LinkProps) {
  return (
    <a
      className={cx("ods-link", external && "ods-link-external", className)}
      href={href}
      // 외부 링크만 새 창으로 열기. 내부 링크는 뒤로 가기가 끊겨 오류로 오인되는 문제가 있음
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {children}
      {/* 계약 표본 _EXT와 동일한 구조. 크기, 색은 CSS로 제어 */}
      {external && <ExternalLink aria-hidden="true" />}
    </a>
  );
}
