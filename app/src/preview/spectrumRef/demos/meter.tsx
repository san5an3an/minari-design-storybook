// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/meter/Meter.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Flex, Meter } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Meter label="Storage space" value={35} />
    </>
  );
}

function Example2() {
  return (
    <>
    <Meter
      label="Storage space"
      value={25} />
    </>
  );
}

function Example3() {
  return (
    <>
    <Meter
      label="Widgets Used"
      minValue={50}
      maxValue={150}
      value={100} />
    </>
  );
}

function Example4() {
  return (
    <>
    <Meter
      label="Currency"
      formatOptions={{style: 'currency', currency: 'JPY'}}
      value={60} />
    </>
  );
}

function Example5() {
  return (
    <>
    <Flex direction="column" maxWidth="size-3000" gap="size-300">
      <Meter label="Label" value={25} variant="warning" />
      <Meter label="Label" labelPosition="side" value={25} variant="warning" />
      <Meter label="Label" showValueLabel={false} value={25} variant="warning" />
    </Flex>
    </>
  );
}

function Example6() {
  return (
    <>
    <Meter label="Progress" marginBottom="size-300" value={25} valueLabel="1 of 4" variant="warning" />
    </>
  );
}

function Example7() {
  return (
    <>
    <Flex direction="column" maxWidth="size-3000" gap="size-300">
      <Meter
        label="Space used"
        showValueLabel={false}
        value={90}
        variant="critical" />
    
      <Meter
        label="Space used"
        valueLabel="54 of 60GB"
        value={90} variant="critical" />
    
      <Meter
        label="Space used"
        formatOptions={{style: 'percent', minimumFractionDigits: 2}}
        value={89.123}
        variant="critical" />
    </Flex>
    </>
  );
}

function Example8() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <Meter label="Space used" size="S" value={90} variant="critical" />
      <Meter label="Space used" size="L" value={90} variant="critical" />
    </Flex>
    </>
  );
}

function Example9() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <Meter label="Space used" value={25} variant="informative" />
      <Meter label="Space used" value={25} variant="positive" />
      <Meter label="Space used" value={90} variant="critical" />
      <Meter label="Space used" value={70} variant="warning" />
    </Flex>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example2,
  "value-2": Example3,
  "value-3": Example4,
  "labeling-1": Example5,
  "labeling-2": Example6,
  "labeling-3": Example7,
  "visual-options-1": Example8,
  "visual-options-2": Example9,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
