import * as React from "react";
import {
  Combobox as ShadcnCombobox, ComboboxChip, ComboboxChips, ComboboxChipsInput,
  ComboboxCollection, ComboboxContent, ComboboxEmpty, ComboboxGroup,
  ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSeparator,
  ComboboxValue,
} from "@/components/ui/combobox";
import type { ComboboxProps } from "../../systems/props";

// 항목 왼쪽과 위아래 여백만 연결. 오른쪽 pr-8 은 체크 표시 자리임
const COMBO_ITEM = "pl-(--component-combobox-item-padding-inline) py-(--component-combobox-item-padding-block)";

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
              value.map((v) => <ComboboxChip key={v} className="rounded-(--component-combobox-chip-radius)">{v}</ComboboxChip>)
            }
          </ComboboxValue>
          <ComboboxChipsInput placeholder={placeholder} />
        </ComboboxChips>
      ) : (
        <ComboboxInput placeholder={placeholder} className={className} />
      )}
      {/* 입력칸 input-padding-inline, input-radius 토큰은 연결 제외. 입력칸이 InputGroup 으로 감싸져 받을 요소가 분명하지 않음 */}
      <ComboboxContent className="rounded-(--component-combobox-list-radius)">
        <ComboboxEmpty className="py-(--component-combobox-empty-padding)">{empty}</ComboboxEmpty>
        <ComboboxList className="p-(--component-combobox-list-padding)">
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
                        <ComboboxItem key={item} value={item} className={COMBO_ITEM}>{item}</ComboboxItem>
                      )}
                    </ComboboxCollection>
                  </ComboboxGroup>
                </React.Fragment>
              )
            : (item: string) => (
                <ComboboxItem key={item} value={item} className={COMBO_ITEM}>{item}</ComboboxItem>
              )}
        </ComboboxList>
      </ComboboxContent>
    </ShadcnCombobox>
  );
}
