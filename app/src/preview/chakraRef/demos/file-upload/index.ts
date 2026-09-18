/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./file-upload-basic";
import * as m001 from "./file-upload-accepted-files";
import * as m002 from "./file-upload-multiple";
import * as m003 from "./file-upload-custom-preview";
import * as m004 from "./file-upload-directory";
import * as m005 from "./file-upload-media-capture";
import * as m006 from "./file-upload-with-dropzone";
import * as m007 from "./file-upload-with-conditional-dropzone";
import * as m008 from "./file-upload-with-input";
import * as m009 from "./file-upload-with-input-clear";
import * as m010 from "./file-upload-with-paste-event";
import * as m011 from "./file-upload-with-store";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "file-upload-basic": m000.FileUploadBasic,
  "file-upload-accepted-files": m001.FileUploadAcceptedFiles,
  "file-upload-multiple": m002.FileUploadMultiple,
  "file-upload-custom-preview": m003.FileUploadCustomPreview,
  "file-upload-directory": m004.FileUploadDirectory,
  "file-upload-media-capture": m005.FileUploadMediaCapture,
  "file-upload-with-dropzone": m006.FileUploadWithDropzone,
  "file-upload-with-conditional-dropzone": m007.FileUploadWithConditionalDropzone,
  "file-upload-with-input": m008.FileUploadWithInput,
  "file-upload-with-input-clear": m009.FileUploadWithInputClear,
  "file-upload-with-paste-event": m010.FileUploadWithPasteEvent,
  "file-upload-with-store": m011.FileUploadWithStore,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
