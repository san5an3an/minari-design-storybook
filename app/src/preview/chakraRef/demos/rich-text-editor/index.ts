/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./rich-text-editor/rich-text-editor-basic";
import * as m001 from "./rich-text-editor/rich-text-editor-with-mode";
import * as m002 from "./rich-text-editor/rich-text-editor-controlled";
import * as m003 from "./rich-text-editor/rich-text-editor-with-placeholder";
import * as m004 from "./rich-text-editor/rich-text-editor-with-character-count";
import * as m005 from "./rich-text-editor/rich-text-editor-with-preview";
import * as m006 from "./rich-text-editor/rich-text-editor-with-highlight";
import * as m007 from "./rich-text-editor/rich-text-editor-with-bubble-menu";
import * as m008 from "./rich-text-editor/rich-text-editor-with-autosave";
import * as m009 from "./rich-text-editor/rich-text-editor-with-task";
import * as m010 from "./rich-text-editor/rich-text-editor-with-code";
import * as m011 from "./rich-text-editor/rich-text-editor-with-drag-handle";
import * as m012 from "./rich-text-editor/rich-text-editor-with-image";
import * as m013 from "./rich-text-editor/rich-text-editor-with-hashtags";
import * as m014 from "./rich-text-editor/rich-text-editor-with-mentions";
import * as m015 from "./rich-text-editor/rich-text-editor-with-emoji";
import * as m016 from "./rich-text-editor/rich-text-editor-with-slash-commands";
import * as m017 from "./rich-text-editor/rich-text-editor-composition";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "rich-text-editor/rich-text-editor-basic": m000.RichTextEditorBasic,
  "rich-text-editor/rich-text-editor-with-mode": m001.RichTextEditorWithMode,
  "rich-text-editor/rich-text-editor-controlled": m002.RichTextEditorControlled,
  "rich-text-editor/rich-text-editor-with-placeholder": m003.RichTextEditorWithPlaceholder,
  "rich-text-editor/rich-text-editor-with-character-count": m004.RichTextEditorWithCharacterCount,
  "rich-text-editor/rich-text-editor-with-preview": m005.RichTextEditorWithPreview,
  "rich-text-editor/rich-text-editor-with-highlight": m006.RichTextEditorWithHighlight,
  "rich-text-editor/rich-text-editor-with-bubble-menu": m007.RichTextEditorWithBubbleMenu,
  "rich-text-editor/rich-text-editor-with-autosave": m008.RichTextEditorWithAutosave,
  "rich-text-editor/rich-text-editor-with-task": m009.RichTextEditorWithTask,
  "rich-text-editor/rich-text-editor-with-code": m010.RichTextEditorWithCode,
  "rich-text-editor/rich-text-editor-with-drag-handle": m011.RichTextEditorWithDragHandle,
  "rich-text-editor/rich-text-editor-with-image": m012.RichTextEditorWithImage,
  "rich-text-editor/rich-text-editor-with-hashtags": m013.RichTextEditorWithHashtags,
  "rich-text-editor/rich-text-editor-with-mentions": m014.RichTextEditorWithMentions,
  "rich-text-editor/rich-text-editor-with-emoji": m015.RichTextEditorWithEmoji,
  "rich-text-editor/rich-text-editor-with-slash-commands": m016.RichTextEditorWithSlashCommands,
  "rich-text-editor/rich-text-editor-composition": m017.RichTextEditorComposition,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
