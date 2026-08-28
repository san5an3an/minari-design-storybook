import * as React from "react";
import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export interface MuiComboboxProps {
  items: ReadonlyArray<string>;
  groups?: ReadonlyArray<{ label: React.ReactNode; items: ReadonlyArray<string> }>;
  placeholder?: string;
  multiple?: boolean;
  empty?: React.ReactNode;
  className?: string;
}

export function Combobox({
  items, groups, placeholder, multiple, empty, className,
}: MuiComboboxProps) {
  // 그룹 평탄화 후 값별 소속 그룹 매핑 생성
  const { options, groupOf } = React.useMemo( => {
    if (!groups?.length) return { options: [...items], groupOf: null as Map<string, string> | null };
    const map = new Map<string, string>;
    const flat: string[] = [];
    for (const g of groups) {
      const name = typeof g.label === "string" ? g.label : String(g.label ?? "");
      for (const v of g.items) {
        map.set(v, name);
        flat.push(v);
      }
    }
    return { options: flat, groupOf: map };
  }, [items, groups]);

  return (
    <MuiAutocomplete
      className={className}
      options={options}
      multiple={multiple}
      groupBy={groupOf ? (o: string) => groupOf.get(o) ?? "" : undefined}
      noOptionsText={empty ?? "결과가 없어요"}
      renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
    />
  );
}
