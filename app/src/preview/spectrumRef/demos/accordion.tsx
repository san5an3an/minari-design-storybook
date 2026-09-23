// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/accordion/Accordion.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Accordion, Disclosure, DisclosurePanel, DisclosureTitle } from "@adobe/react-spectrum";
import type { Key } from '@react-types/shared';

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

function ControlledExpansion() {
  let [expandedKeys, setExpandedKeys] = React.useState<Set<Key>>(new Set(['personal']))

  return (
    <>
      <Accordion expandedKeys={expandedKeys} onExpandedChange={setExpandedKeys}>
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
      <div style={{marginTop: '20px'}}>You have expanded: {expandedKeys}</div>
    </>
  )
}

function Example3() {
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

function Example4() {
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

function Example5() {
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
  "events": ControlledExpansion,
  "expanded": Example3,
  "disabled": Example4,
  "quiet": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
