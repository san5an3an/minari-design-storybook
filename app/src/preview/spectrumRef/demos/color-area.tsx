// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorArea.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ColorArea, Flex, parseColor } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ColorArea defaultValue="#7f0000" />
    </>
  );
}

function Example2() {
  return (
    <>
    <ColorArea xName="red" yName="green" />
    </>
  );
}

function Example() {
  let [currentValue, setCurrentValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));
  let [finalValue, setFinalValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <ColorArea
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue} />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}

function Example4() {
  return (
    <>
    <ColorArea defaultValue="#7f0000" isDisabled />
    </>
  );
}

function Example5() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <ColorArea defaultValue="#7f0000" size="size-3600" maxWidth="100%" />
    </Flex>
    </>
  );
}

export const demos = {
  "example": Example1,
  "html-forms": Example2,
  "events": Example,
  "disabled": Example4,
  "custom-size": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Label(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "labeling": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Label(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "rgba": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Label(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "hsla": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Label(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "hsba": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Label(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
