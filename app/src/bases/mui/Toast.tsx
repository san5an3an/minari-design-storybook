import * as React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

interface Item {
  id: number;
  title?: string;
  description?: string;
  type?: string;
  actionProps?: { children?: React.ReactNode; onClick?:  => void };
}

let seq = 0;
let queue: Item[] = [];
const listeners = new Set< => void>;

function emit {
  for (const l of listeners) l;
}

function push(opts: Omit<Item, "id">) {
  queue = [...queue, { ...opts, id: ++seq }];
  emit;
}

function drop(id: number) {
  queue = queue.filter((t) => t.id !== id);
  emit;
}

// type을 MUI severity로 매핑. 모르는 값은 info 처리, 에러 없음
const SEVERITY = { success: "success", danger: "error", warning: "warning", info: "info" } as const;
type Severity = (typeof SEVERITY)[keyof typeof SEVERITY];

function severityOf(type?: string): Severity {
  return SEVERITY[type as keyof typeof SEVERITY] ?? "info";
}

export interface MuiToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: string;
  className?: string;
}

// 한 장 그대로 렌더링. 미리보기에서 모양만 확인할 때 사용
function ToastRoot({ title, description, type, className }: MuiToastProps) {
  return (
    <MuiAlert className={className} severity={severityOf(type)} variant="filled">
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {description}
    </MuiAlert>
  );
}

// 알림 표시 위치, 화면당 한 번만 배치
function Region {
  const [, force] = React.useReducer((n: number) => n + 1, 0);
  React.useEffect( => {
    listeners.add(force);
    return  => {
      listeners.delete(force);
    };
  }, []);

  return (
    <>
      {queue.map((t, i) => (
        <MuiSnackbar
          key={t.id}
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={5000}
          onClose={(_e, reason) => {
            // 바깥 클릭 시 삭제 제외
            if (reason !== "clickaway") drop(t.id);
          }}
          // 쌓인 순서만큼 올려 겹침 제거
          sx={{ bottom: `calc(1.5rem + ${i * 4.5}rem)` }}
        >
          <MuiAlert
            severity={severityOf(t.type)}
            variant="filled"
            onClose={ => drop(t.id)}
            action={
              t.actionProps ? (
                <Button color="inherit" size="small" onClick={t.actionProps.onClick}>
                  {t.actionProps.children}
                </Button>
              ) : undefined
            }
          >
            {t.title ? <AlertTitle>{t.title}</AlertTitle> : null}
            {t.description}
          </MuiAlert>
        </MuiSnackbar>
      ))}
    </>
  );
}

export const Toast = Object.assign(ToastRoot, { Region, show: push });
