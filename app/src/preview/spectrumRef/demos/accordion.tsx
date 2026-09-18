// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/accordion/Accordion.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Accordion, Disclosure, DisclosurePanel, DisclosureTitle } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Accordion defaultExpandedKeys={['personal']}>
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here.
        </DisclosurePanel>
      </Disclosure>
    </Accordion>
    </>
  );
}

function Example2() {
  return (
    <>
    <Accordion allowsMultipleExpanded defaultExpandedKeys={['personal', 'billing']}>
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here.
        </DisclosurePanel>
      </Disclosure>
    </Accordion>
    </>
  );
}

function Example3() {
  return (
    <>
    <Accordion isDisabled>
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here.
        </DisclosurePanel>
      </Disclosure>
    </Accordion>
    </>
  );
}

function Example4() {
  return (
    <>
    <Accordion isQuiet>
      <Disclosure id="personal">
        <DisclosureTitle>Personal Information</DisclosureTitle>
        <DisclosurePanel>
          Personal information form here.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureTitle>Billing Address</DisclosureTitle>
        <DisclosurePanel>
          Billing address form here.
        </DisclosurePanel>
      </Disclosure>
    </Accordion>
    </>
  );
}

export const demos = {
  "example": Example1,
  "expanded": Example2,
  "disabled": Example3,
  "quiet": Example4,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "events": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Key(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
