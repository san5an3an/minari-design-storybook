import * as React from "react";
import {
  Command as ShadcnCommand, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator, CommandShortcut,
} from "@/components/ui/command";
import type { CommandProps } from "../../systems/props";

export function Command({
  placeholder = "무엇을 할까요?", groups, empty = "찾은 게 없어요. 다른 낱말로 찾아보세요.",
  separators, className,
}: CommandProps) {
  return (
    <ShadcnCommand className={className}>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{empty}</CommandEmpty>
        {groups.map((g, gi) => (
          <React.Fragment key={gi}>
            {/* 그룹명이 경계 역할. 이름 있으면 구분선 중복이라 이름 없는 그룹에만 적용 */}
            {separators && gi > 0 ? <CommandSeparator /> : null}
            <CommandGroup heading={g.heading}>
            {g.items.map((it, i) => (
              <CommandItem key={i} value={String(it.label)}>
                {it.label}
                {it.hint ? <CommandShortcut>{it.hint}</CommandShortcut> : null}
              </CommandItem>
            ))}
            </CommandGroup>
          </React.Fragment>
        ))}
      </CommandList>
    </ShadcnCommand>
  );
}
