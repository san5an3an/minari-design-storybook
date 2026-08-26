/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-upload-by-clicking";
import D1 from "./01-avatar";
import D2 from "./02-default-files";
import D3 from "./03-pictures-wall";
import D4 from "./04-pictures-with-picture-circle-type";
import D5 from "./05-complete-control-over-file-list";
import D6 from "./06-drag-and-drop";
import D7 from "./07-paste";
import D8 from "./08-upload-directory";
import D9 from "./09-upload-manually";
import D10 from "./10-upload-png-file-only";
import D11 from "./11-pictures-with-list-style";
import D12 from "./12-customize-preview-file";
import D13 from "./13-max-count";
import D14 from "./14-transform-file-before-request";
import D15 from "./15-aliyun-oss";
import D16 from "./16-custom-action-icon-and-extra-info";
import D17 from "./17-drag-sorting-of-uploadlist";
import D18 from "./19-customize-progress-bar";
import D19 from "./20-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Upload by clicking": D0,
  "Avatar": D1,
  "Default Files": D2,
  "Pictures Wall": D3,
  "Pictures with picture-circle type": D4,
  "Complete control over file list": D5,
  "Drag and Drop": D6,
  "Paste": D7,
  "Upload directory": D8,
  "Upload manually": D9,
  "Upload png file only": D10,
  "Pictures with list style": D11,
  "Customize preview file": D12,
  "Max Count": D13,
  "Transform file before request": D14,
  "Aliyun OSS": D15,
  "Custom action icon and extra info": D16,
  "Drag sorting of uploadList": D17,
  "Customize Progress Bar": D18,
  "Custom semantic dom styling": D19,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Crop image before uploading": "이 예제는 우리가 안 가진 패키지(antd-img-crop)를 불러요.",
};
