/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./variants";
import * as m002 from "./on-surface";
import * as m003 from "./with-loading-suffix";
import * as m004 from "./required";
import * as m005 from "./disabled";
import * as m006 from "./full-width";
import * as m007 from "./with-text-prefix";
import * as m008 from "./with-text-suffix";
import * as m009 from "./with-icon-prefix-and-text-suffix";
import * as m010 from "./with-copy-suffix";
import * as m011 from "./with-icon-prefix-and-copy-suffix";
import * as m012 from "./password-with-toggle";
import * as m013 from "./with-keyboard-shortcut";
import * as m014 from "./with-badge-suffix";
import * as m015 from "./invalid";
import * as m016 from "./with-prefix-icon";
import * as m017 from "./with-suffix-icon";
import * as m018 from "./with-prefix-and-suffix";
import * as m019 from "./with-textarea";
import * as m020 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "variants": m001.Variants,
  "on-surface": m002.OnSurface,
  "with-loading-suffix": m003.WithLoadingSuffix,
  "required": m004.Required,
  "disabled": m005.Disabled,
  "full-width": m006.FullWidth,
  "with-text-prefix": m007.WithTextPrefix,
  "with-text-suffix": m008.WithTextSuffix,
  "with-icon-prefix-and-text-suffix": m009.WithIconPrefixAndTextSuffix,
  "with-copy-suffix": m010.WithCopySuffix,
  "with-icon-prefix-and-copy-suffix": m011.WithIconPrefixAndCopySuffix,
  "password-with-toggle": m012.PasswordWithToggle,
  "with-keyboard-shortcut": m013.WithKeyboardShortcut,
  "with-badge-suffix": m014.WithBadgeSuffix,
  "invalid": m015.Invalid,
  "with-prefix-icon": m016.WithPrefixIcon,
  "with-suffix-icon": m017.WithSuffixIcon,
  "with-prefix-and-suffix": m018.WithPrefixAndSuffix,
  "with-textarea": m019.WithTextArea,
  "custom-styles": m020.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
