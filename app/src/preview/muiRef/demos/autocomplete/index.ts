/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "../_overrides/autocomplete__combo-box";
import D1 from "./01-playground";
import D2 from "./02-country-select";
import D3 from "./03-controllable-states";
import D4 from "./04-free-solo";
import D5 from "./05-free-solo-create-option";
import D6 from "./06-free-solo-create-option-dialog";
import D7 from "./07-grouped";
import D8 from "./08-render-group";
import D9 from "./09-disabled-options";
import D10 from "./10-use-autocomplete";
import D11 from "./11-customized-hook";
import D12 from "./12-asynchronous";
import D13 from "./15-custom-single-value-rendering";
import D14 from "./16-tags";
import D15 from "./17-fixed-tags";
import D16 from "./18-checkboxes-tags";
import D17 from "./19-limit-tags";
import D18 from "./20-sizes";
import D19 from "./21-custom-input-autocomplete";
import D20 from "./22-globally-customized-options";
import D21 from "./23-git-hub-label";
import D22 from "./24-autocomplete-hint";
import D23 from "./26-filter";

export const DEMOS: DemoSet = {
  "ComboBox": D0,
  "Playground": D1,
  "CountrySelect": D2,
  "ControllableStates": D3,
  "FreeSolo": D4,
  "FreeSoloCreateOption": D5,
  "FreeSoloCreateOptionDialog": D6,
  "Grouped": D7,
  "RenderGroup": D8,
  "DisabledOptions": D9,
  "UseAutocomplete": D10,
  "CustomizedHook": D11,
  "Asynchronous": D12,
  "CustomSingleValueRendering": D13,
  "Tags": D14,
  "FixedTags": D15,
  "CheckboxesTags": D16,
  "LimitTags": D17,
  "Sizes": D18,
  "CustomInputAutocomplete": D19,
  "GloballyCustomizedOptions": D20,
  "GitHubLabel": D21,
  "AutocompleteHint": D22,
  "Filter": D23,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "GoogleMaps": "이 예제는 우리가 안 가진 패키지(autosuggest-highlight/parse)를 불러요.",
  "InfiniteLoading": "이 예제는 우리가 안 가진 패키지(@tanstack/react-query)를 불러요.",
  "Highlights": "이 예제는 우리가 안 가진 패키지(autosuggest-highlight/parse)를 불러요.",
  "Virtualize": "이 예제는 우리가 안 가진 패키지(react-window)를 불러요.",
};
