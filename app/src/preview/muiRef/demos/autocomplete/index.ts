/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./01-playground";
import D1 from "./02-country-select";
import D2 from "./03-controllable-states";
import D3 from "./04-free-solo";
import D4 from "./05-free-solo-create-option";
import D5 from "./06-free-solo-create-option-dialog";
import D6 from "./07-grouped";
import D7 from "./08-render-group";
import D8 from "./09-disabled-options";
import D9 from "./10-use-autocomplete";
import D10 from "./11-customized-hook";
import D11 from "./12-asynchronous";
import D12 from "./15-custom-single-value-rendering";
import D13 from "./16-tags";
import D14 from "./17-fixed-tags";
import D15 from "./18-checkboxes-tags";
import D16 from "./19-limit-tags";
import D17 from "./20-sizes";
import D18 from "./21-custom-input-autocomplete";
import D19 from "./22-globally-customized-options";
import D20 from "./23-git-hub-label";
import D21 from "./24-autocomplete-hint";
import D22 from "./26-filter";

export const DEMOS: DemoSet = {
  "Playground": D0,
  "CountrySelect": D1,
  "ControllableStates": D2,
  "FreeSolo": D3,
  "FreeSoloCreateOption": D4,
  "FreeSoloCreateOptionDialog": D5,
  "Grouped": D6,
  "RenderGroup": D7,
  "DisabledOptions": D8,
  "UseAutocomplete": D9,
  "CustomizedHook": D10,
  "Asynchronous": D11,
  "CustomSingleValueRendering": D12,
  "Tags": D13,
  "FixedTags": D14,
  "CheckboxesTags": D15,
  "LimitTags": D16,
  "Sizes": D17,
  "CustomInputAutocomplete": D18,
  "GloballyCustomizedOptions": D19,
  "GitHubLabel": D20,
  "AutocompleteHint": D21,
  "Filter": D22,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "ComboBox": "이 예제는 공식 문서 사이트 안쪽의 파일(./top100Films)을 불러요 — 라이브러리가 아니라 그 사이트의 일부라 우리 쪽에 옮길 실체가 없어요.",
  "GoogleMaps": "이 예제는 우리가 안 가진 패키지(autosuggest-highlight/parse)를 불러요.",
  "InfiniteLoading": "이 예제는 우리가 안 가진 패키지(@tanstack/react-query)를 불러요.",
  "Highlights": "이 예제는 우리가 안 가진 패키지(autosuggest-highlight/parse)를 불러요.",
  "Virtualize": "이 예제는 우리가 안 가진 패키지(react-window)를 불러요.",
};
