import * as React from "react";
import Box from "@mui/material/Box";
import MuiMenu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
// MUI 베이스는 예외로 @mui/icons-material Rounded 아이콘 사용
import CheckRounded from "@mui/icons-material/CheckRounded";

interface ItemSpec {
  label?: React.ReactNode;
  hint?: string;
  danger?: boolean;
  separator?: boolean;
  heading?: React.ReactNode;
  group?: ReadonlyArray<ItemSpec>;
  items?: ReadonlyArray<ItemSpec>;
  checked?: boolean;
  onSelect?:  => void;
}

export interface MuiMenuProps {
  trigger: React.ReactNode;
  items: ReadonlyArray<ItemSpec>;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  minWidth?: string;
  className?: string;
}

const H = { start: "left", center: "center", end: "right" } as const;

function render(items: ReadonlyArray<ItemSpec>, close:  => void, depth = 0): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  items.forEach((it, i) => {
    const key = `${depth}-${i}`;
    if (it.separator) {
      out.push(<Divider key={key} />);
      return;
    }
    if (it.heading) {
      out.push(<ListSubheader key={key} disableSticky>{it.heading}</ListSubheader>);
    }
    const kids = it.group ?? it.items;
    if (kids?.length) {
      out.push(...render(kids, close, depth + 1));
      return;
    }
    if (it.label === undefined) return;
    out.push(
      <MuiMenuItem
        key={key}
        onClick={ => { it.onSelect?.; close; }}
        sx={{
          // 중첩 깊이만큼 들여쓰기 적용, 한 단 값은 메뉴 여백 토큰 사용
          pl: `calc(var(--component-menu-item-padding-inline) * ${depth + 1})`,
          ...(it.danger ? { color: "error.main" } : null),
        }}
      >
        {/* 선택 표시 공간을 항상 확보. 조건부로 넣으면 텍스트가 좌우로 흔들리는 문제가 있음 */}
        <Box component="span" sx={{ width: "1.25rem", display: "inline-flex" }}>
          {it.checked ? <CheckRounded fontSize="small" /> : null}
        </Box>
        <ListItemText>{it.label}</ListItemText>
        {it.hint ? (
          <Typography variant="body2" color="text.secondary" sx={{ ml: "1rem" }}>
            {it.hint}
          </Typography>
        ) : null}
      </MuiMenuItem>,
    );
  });
  return out;
}

export function Menu({
  trigger, items, side = "bottom", align = "start", minWidth, className,
}: MuiMenuProps) {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);
  const close =  => setAnchor(null);
  const vertical = side === "top" ? "top" : "bottom";

  return (
    <>
      <Box
        component="span"
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{ display: "inline-flex" }}
      >
        {trigger}
      </Box>
      <MuiMenu
        className={className}
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={close}
        anchorOrigin={{ vertical, horizontal: H[align] }}
        transformOrigin={{ vertical: vertical === "top" ? "bottom" : "top", horizontal: H[align] }}
        slotProps={{ paper: { sx: { minWidth } } }}
      >
        {render(items, close)}
      </MuiMenu>
    </>
  );
}
