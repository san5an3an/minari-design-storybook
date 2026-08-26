import * as React from "react";
import {
  Select as ShadcnSelect, SelectContent, SelectGroup, SelectItem, SelectLabel,
  SelectSeparator, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import type { SelectProps } from "../../systems/props";
import { fieldVars, sizeVars } from "./tone";
import { SELECT_ALIGN_UNCLAMP } from "../selectAlign";

export function Select({
  size = "md", items, groups, disabledItems, value, onValueChange,
  placeholder = "고르세요", label, description, alignItemWithTrigger = true,
  separators, ...rest
}: SelectProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const locked = new Set(disabledItems ?? []);
  // items는 값-표시명 변환용, 트리거 코드 노출 방지
  const list = groups ?? [{ label: "", items }];
  const box = (
    <ShadcnSelect
      items={items}
      value={value}
      // 라이브러리는 string | null 반환. 계약엔 null 없어 제거, 타입 불일치 방지
      onValueChange={(next) => {
        if (next !== null) onValueChange?.(String(next));
      }}
    >
      <SelectTrigger
        style={{
          ...fieldVars("select"),
          ...sizeVars("select", size),
          gap: "var(--component-select-gap)",
        }}
        {...rest}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {/* 목록 길면 팝업 잘리는 문제 있음 */}
      <SelectContent
        alignItemWithTrigger={alignItemWithTrigger}
        className={SELECT_ALIGN_UNCLAMP}
      >
        {list.map((g, i) => (
          // 구분선 기본값 꺼짐. 그룹명이 경계 표시해 중복, select는 넣을 위치 없음
          <React.Fragment key={g.label || i}>
          {separators && i > 0 ? <SelectSeparator /> : null}
          <SelectGroup>
            {g.label ? (
              <SelectLabel style={{ color: "var(--component-select-group-fg)" }}>
                {g.label}
              </SelectLabel>
            ) : null}
            {Object.entries(g.items).map(([v, label]) => (
              <SelectItem key={v} value={v} disabled={locked.has(v)}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
          </React.Fragment>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );

  if (label === undefined && description === undefined) return box;

  return (
    <div className="flex flex-col" style={{ gap: "var(--component-input-label-gap)" }}>
      {label !== undefined ? (
        <span
          style={{
            color: invalid
              ? "var(--component-select-help-fg-invalid)"
              : "var(--component-input-label-fg)",
            fontSize: "var(--component-input-label-font-size)",
          }}
        >
          {label}
        </span>
      ) : null}
      {box}
      {description !== undefined ? (
        <span
          style={{
            color: invalid
              ? "var(--component-select-help-fg-invalid)"
              : "var(--component-input-help-fg)",
            fontSize: "var(--component-input-help-font-size)",
          }}
        >
          {description}
        </span>
      ) : null}
    </div>
  );
}
