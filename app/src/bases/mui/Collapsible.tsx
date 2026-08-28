import * as React from "react";
import MuiCollapse from "@mui/material/Collapse";

interface Ctx {
  open: boolean;
  toggle:  => void;
  disabled?: boolean;
}
const CollapsibleCtx = React.createContext<Ctx | null>(null);

export interface MuiCollapsibleProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function CollapsibleRoot({
  open, defaultOpen, onOpenChange, disabled, className, children,
}: MuiCollapsibleProps) {
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const toggle = React.useCallback( => {
    if (disabled) return;
    if (open === undefined) setOwn((v) => !v);
    onOpenChange?.(!isOpen);
  }, [disabled, open, isOpen, onOpenChange]);

  const ctx = React.useMemo( => ({ open: isOpen, toggle, disabled }), [isOpen, toggle, disabled]);
  return (
    <CollapsibleCtx.Provider value={ctx}>
      <div className={className}>{children}</div>
    </CollapsibleCtx.Provider>
  );
}

// 여닫기 버튼
function Trigger({ children, className }: { children?: React.ReactNode; className?: string }) {
  const ctx = React.useContext(CollapsibleCtx);
  return (
    <button
      type="button"
      className={className}
      disabled={ctx?.disabled}
      aria-expanded={ctx?.open ?? false}
      onClick={ctx?.toggle}
    >
      {children}
    </button>
  );
}

// 접히는 내용
function Content({ children, className }: { children?: React.ReactNode; className?: string }) {
  const ctx = React.useContext(CollapsibleCtx);
  // unmountOnExit 미지정. 닫혀도 DOM 남아야 검색 노출과 상태 유지 구조임
  return (
    <MuiCollapse className={className} in={ctx?.open ?? false}>
      {children}
    </MuiCollapse>
  );
}

export const Collapsible = Object.assign(CollapsibleRoot, { Trigger, Content });
