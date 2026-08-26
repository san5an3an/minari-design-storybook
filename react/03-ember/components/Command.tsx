import * as React from "react";
import { cx } from "./cx";

export type CommandProps = React.HTMLAttributes<HTMLDivElement>;

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-command", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Command.displayName = "Command";

// 타이핑해서 좁히는 필드
export const CommandInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, children, ...rest }, ref) => (
    <input ref={ref} className={cx("ods-command-input", className)} {...rest}>
      {children}
    </input>
  )
);
CommandInput.displayName = "CommandInput";

export const CommandList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, children, ...rest }, ref) => (
    <ul ref={ref} className={cx("ods-command-list", className)} {...rest}>
      {children}
    </ul>
  )
);
CommandList.displayName = "CommandList";

// 그룹 라벨
export const CommandGroup = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, children, ...rest }, ref) => (
    <li ref={ref} className={cx("ods-command-group", className)} {...rest}>
      {children}
    </li>
  )
);
CommandGroup.displayName = "CommandGroup";

export const CommandItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-command-item", className)} {...rest}>
      {children}
    </button>
  )
);
CommandItem.displayName = "CommandItem";

// 단축키
export const CommandShortcut = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-command-shortcut", className)} {...rest}>
      {children}
    </span>
  )
);
CommandShortcut.displayName = "CommandShortcut";

// 매칭 없음 상태. 빈 값으로 두지 않음
export const CommandEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-command-empty", className)} {...rest}>
      {children}
    </div>
  )
);
CommandEmpty.displayName = "CommandEmpty";
