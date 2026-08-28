import * as React from "react";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import type { SelectProps } from "../../systems/props";

export function Select({
  size = "md", items, groups, disabledItems, separators,
  value, onValueChange, placeholder = "고르세요", disabled,
  label, description, alignItemWithTrigger = true, ...rest
}: SelectProps) {
  const auto = React.useId;
  const selectId = `${auto}-select`;
  const helpId = `${auto}-help`;
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  // 그룹이 없으면 이름 없는 그룹 하나로 처리. 렌더링 코드를 하나로 유지
  const list = groups ?? [{ label: "", items }];
  const locked = new Set(disabledItems ?? []);
  const t = (name: string) => `var(--component-select-${size}-${name})`;

  const box = (
    <MuiSelect
      id={selectId}
      value={value ?? ""}
      onChange={(e) => onValueChange?.(String(e.target.value))}
      disabled={disabled}
      error={invalid}
      aria-label={rest["aria-label"]}
      aria-describedby={description === undefined ? undefined : helpId}
      // placeholder 직접 출력. prop 없어 전달해도 소용없음
      displayEmpty
      renderValue={(v) =>
        v === "" || v === undefined ? (
          <span style={{ color: "var(--component-select-fg-placeholder)" }}>{placeholder}</span>
        ) : (
          items[String(v)] ?? String(v)
        )
      }
      IconComponent={(props) => (
        <ExpandMoreRounded
          {...props}
          style={{
            width: "var(--component-select-marker-size)",
            height: "var(--component-select-marker-size)",
            color: "var(--component-select-marker-fg)",
          }}
        />
      )}
      // 테두리, 배경은 Input과 같은 위치에서 가져오기
      input={<OutlinedInput notched={false} />}
      MenuProps={{
        // 기본값 true는 선택 항목이 트리거에 겹치도록 배치, false는 아래로 배치
        ...(alignItemWithTrigger
          ? {}
          : {
              anchorOrigin: { vertical: "bottom" as const, horizontal: "left" as const },
              transformOrigin: { vertical: "top" as const, horizontal: "left" as const },
            }),
        slotProps: {
          paper: {
            sx: {
              background: "var(--component-select-bg)",
              color: "var(--component-select-fg)",
              borderRadius: "var(--component-select-radius)",
              border: "var(--semantic-border-width-default) solid var(--component-select-border)",
              "& .MuiMenuItem-root": {
                fontSize: t("font-size"),
                letterSpacing: t("letter-spacing"),
                paddingInline: t("padding-inline"),
                paddingBlock: t("padding-block"),
                gap: "var(--component-select-gap)",
                "&.Mui-disabled": {
                  color: "var(--component-select-option-disabled-fg)",
                  opacity: 1,
                },
              },
              "& .MuiListSubheader-root": {
                background: "transparent",
                color: "var(--component-select-group-fg)",
                fontSize: t("font-size"),
                paddingInline: t("padding-inline"),
                lineHeight: "var(--base-font-line-height-snug)",
              },
            },
          },
        },
      }}
      sx={{
        background: "var(--component-select-bg)",
        color: "var(--component-select-fg)",
        borderRadius: "var(--component-select-radius)",
        fontSize: t("font-size"),
        letterSpacing: t("letter-spacing"),
        // 여백은 안쪽 요소에 적용, Input과 동일 구조
        "& .MuiSelect-select": {
          paddingInline: t("padding-inline"),
          paddingBlock: t("padding-block"),
          lineHeight: "var(--base-font-line-height-snug)",
        },
        // 오류/포커스 선택자에 클래스 추가. MUI가 클래스 둘 조합이라 특이도에서 밀릴 수 있음
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--component-select-border)",
          borderWidth: "var(--semantic-border-width-default)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--component-select-border-strong)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--component-select-border-focus)",
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline, &.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "var(--component-select-border-invalid)" },
        "&.Mui-disabled": {
          background: "var(--component-select-disabled-bg)",
          color: "var(--component-select-disabled-fg)",
        },
      }}
    >
      {list.map((g, gi) => {
        const rows: React.ReactNode[] = [];
        // Fragment로 감싸지 않음. Select 자식 훑기가 못 넘어 값이 인식되지 않음
        if (separators && gi > 0) rows.push(<Divider key={`sep-${gi}`} component="li" />);
        if (g.label) rows.push(<ListSubheader key={`head-${gi}`}>{g.label}</ListSubheader>);
        for (const [v, name] of Object.entries(g.items)) {
          rows.push(
            <MenuItem key={v} value={v} disabled={locked.has(v)}>
              {name}
            </MenuItem>,
          );
        }
        return rows;
      })}
    </MuiSelect>
  );

  if (label === undefined && description === undefined) return box;

  return (
    <FormControl error={invalid} disabled={disabled} margin="none"
      sx={{ gap: "var(--component-input-label-gap)" }}>
      {label === undefined ? null : (
        <FormLabel
          htmlFor={selectId}
          sx={{
            color: "var(--component-input-label-fg)",
            fontSize: "var(--component-input-label-font-size)",
            letterSpacing: "var(--component-input-label-letter-spacing)",
            "&.Mui-error, &.Mui-focused": { color: "var(--component-input-label-fg)" },
          }}
        >
          {label}
        </FormLabel>
      )}
      {box}
      {description === undefined ? null : (
        <FormHelperText
          id={helpId}
          sx={{
            margin: 0,
            color: invalid
              ? "var(--component-select-help-fg-invalid)"
              : "var(--component-input-help-fg)",
            fontSize: "var(--component-input-help-font-size)",
            "&.Mui-error": { color: "var(--component-select-help-fg-invalid)" },
          }}
        >
          {description}
        </FormHelperText>
      )}
    </FormControl>
  );
}
