import * as React from "react";
import {
  Command as ShadcnCommand, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator, CommandShortcut,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import type { CommandProps } from "../../systems/props";

export function Command({
  placeholder = "무엇을 할까요?", groups, empty = "찾은 게 없어요. 다른 낱말로 찾아보세요.",
  separators, className,
}: CommandProps) {
  return (
    // 모서리 토큰은 연결 제외. shadcn 이 rounded-xl!(!important)로 고정해 덮으려면 ! 가 필요함
    // 입력칸 input-padding 토큰은 연결 제외. 겉 p-1 pb-0 과 칸 h-8! 중 받을 요소가 분명하지 않음
    <ShadcnCommand className={cn("p-(--component-command-padding)", className)}>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty className="py-(--component-command-empty-padding)">{empty}</CommandEmpty>
        {groups.map((g, gi) => (
          <React.Fragment key={gi}>
            {/* 그룹명이 경계 역할. 이름 있으면 구분선 중복이라 이름 없는 그룹에만 적용 */}
            {separators && gi > 0 ? <CommandSeparator /> : null}
            <CommandGroup heading={g.heading}>
            {g.items.map((it, i) => (
              <CommandItem
                key={i}
                value={String(it.label)}
                className="px-(--component-command-item-padding-inline) py-(--component-command-item-padding-block)"
              >
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
