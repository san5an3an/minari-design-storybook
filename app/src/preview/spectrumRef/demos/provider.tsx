// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/provider/Provider.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Button, Checkbox, Flex, Item, Picker, Provider, Radio, RadioGroup, TextField, View, useProvider } from "@adobe/react-spectrum";
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

function Example1() {
  return (
    <>
    <Flex direction="column" gap="size-100" alignItems="start">
      <Provider isDisabled>
        <RadioGroup label="Favorite animal">
          <Radio value="dogs">Dogs</Radio>
          <Radio value="cats">Cats</Radio>
          <Radio value="horses">Horses</Radio>
        </RadioGroup>
        <Checkbox>I agree</Checkbox>
        <Button variant="primary">Submit</Button>
      </Provider>
    </Flex>
    </>
  );
}

function Register() {
  let [email, setEmail] = React.useState('');

  return (
    <Flex direction="column" gap="size-100" alignItems="start">
      <Provider isQuiet>
        <TextField
          label="Email"
          value={email}
          onChange={setEmail} />
        <Provider isDisabled={email.length === 0}>
          <Picker label="Favorite color">
            <Item key="magenta">Magenta</Item>
            <Item key="indigo">Indigo</Item>
            <Item key="chartreuse">Chartreuse</Item>
          </Picker>
          <Button variant="primary">Submit</Button>
        </Provider>
      </Provider>
    </Flex>
  );
}

function Example() {
  let {colorScheme} = useProvider();

  return colorScheme === 'dark'
    ? <Moon aria-label="In dark theme" />
    : <Light aria-label="In light theme" />
}

<Example />

export const demos = {
  "property-groups-1": Example1,
  "property-groups-2": Register,
  "useprovider-1": Example,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "example-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 theme(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uace0 @react-spectrum/theme-default \uac00 \uc774 \ud2b8\ub9ac\uc5d0 \uc5c6\uc5b4\uc694)." },
  "application-provider-1": { code: "runtime-unavailable", detail: "공식 펜스가 문서 사이트의 `theme` 값에 기대요 — 설치본에는 그 이름이 없어요." },
  "application-provider-2": { code: "runtime-unavailable", detail: "공식 펜스가 문서 사이트의 `theme` 값에 기대요 — 설치본에는 그 이름이 없어요." },
};
