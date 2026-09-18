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

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
