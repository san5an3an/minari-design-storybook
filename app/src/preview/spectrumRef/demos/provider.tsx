// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/provider/Provider.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Checkbox, Flex, Item, Picker, Radio, RadioGroup, TextField, View, useProvider } from "@adobe/react-spectrum";
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';

function Example1() {
  return (
    <>
    <Provider theme={theme} colorScheme="light">
      <ActionButton margin="size-100">I'm a light button</ActionButton>
    </Provider>
    </>
  );
}

function Example2() {
  return (
    <>
    <Provider theme={theme} breakpoints={{tablet: 640, desktop: 1024}}>
      <View height="size-1000" backgroundColor={{base: 'celery-600', tablet: 'blue-600', desktop: 'magenta-600'}} />
    </Provider>
    </>
  );
}

function Example3() {
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
  "application-provider-1": Example1,
  "application-provider-2": Example2,
  "property-groups-1": Example3,
  "property-groups-2": Register,
  "useprovider-1": Example,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "example-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 theme(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
