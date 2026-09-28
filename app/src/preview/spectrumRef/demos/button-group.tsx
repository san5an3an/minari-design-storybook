// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/buttongroup/ButtonGroup.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Button, ButtonGroup } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ButtonGroup>
      <Button variant="primary">Rate Now</Button>
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
    </ButtonGroup>
    </>
  );
}

function Example2() {
  return (
    <>
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

function Example3() {
  return (
    <>
    <ButtonGroup orientation="vertical" align="end">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

function Example4() {
  return (
    <>
    <ButtonGroup orientation="vertical" align="center">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

function Example5() {
  return (
    <>
    <ButtonGroup isDisabled>
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "visual-options-1": Example2,
  "visual-options-2": Example3,
  "visual-options-3": Example4,
  "visual-options-4": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
