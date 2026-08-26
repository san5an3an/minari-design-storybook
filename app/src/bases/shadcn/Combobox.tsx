import * as React from "react";
import {
  Combobox as ShadcnCombobox, ComboboxChip, ComboboxChips, ComboboxChipsInput,
  ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup,
  ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator,
  ComboboxValue,
} from "@/components/ui/combobox";
import type { ComboboxProps } from "../../systems/props";

export function Combobox({
  items, groups, placeholder = "찾아보세요", multiple, empty = "걸린 게 없어요.",
  className,
}: ComboboxProps) {
  return (
    // 그룹 전달 시 그룹 형태 그대로 전달. 그래야 필터링이 그룹 내부에서 동작
    <ShadcnCombobox items={groups ?? items} multiple={multiple}>
      {multiple ? (
        <ComboboxChips className={className}>
          <ComboboxValue>
            {(value: string[]) =>
              value.map((v) => <ComboboxChip key={v}>{v}</ComboboxChip>)
            }
          </ComboboxValue>
          <ComboboxChipsInput placeholder={placeholder} />
        </ComboboxChips>
      ) : (
        <ComboboxInput placeholder={placeholder} className={className} />
      )}
      <ComboboxContent>
        <ComboboxEmpty>{empty}</ComboboxEmpty>
        <ComboboxList>
          {groups
            ? // 그룹 구조는 Group, Label, Collection 조합
              // Collection 없이 항목 추가 시 좁힐 때 그룹 전체 유지
              (group: { label: React.ReactNode; items: string[] }, gi: number) => (
                <React.Fragment key={gi}>
                  {gi > 0 ? <ComboboxSeparator /> : null}
                  <ComboboxGroup items={group.items}>
                    <ComboboxLabel>{group.label}</ComboboxLabel>
                    <ComboboxCollection>
                      {(item: string) => (
                        <ComboboxItem key={item} value={item}>{item}</ComboboxItem>
                      )}
                    </ComboboxCollection>
                  </ComboboxGroup>
                </React.Fragment>
              )
            : (item: string) => (
                <ComboboxItem key={item} value={item}>{item}</ComboboxItem>
              )}
        </ComboboxList>
      </ComboboxContent>
    </ShadcnCombobox>
  );
}
