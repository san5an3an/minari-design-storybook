// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/accordion/Disclosure.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Disclosure, DisclosurePanel, DisclosureTitle } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Disclosure>
      <DisclosureTitle>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here.
      </DisclosurePanel>
    </Disclosure>
    </>
  );
}

function ControlledExpansion() {
  let [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  return (
    <>
      <Disclosure isExpanded={isExpanded} onExpandedChange={setIsExpanded}>
        <DisclosureTitle>System Requirements</DisclosureTitle>
        <DisclosurePanel>
          Details about system requirements here.
        </DisclosurePanel>
      </Disclosure>
      <div style={{marginTop: '20px'}}>{isExpanded ? 'The disclosure is expanded' : 'The disclosure is collapsed'}</div>
    </>
  )
}

function Example3() {
  return (
    <>
    <Disclosure isDisabled>
      <DisclosureTitle>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here.
      </DisclosurePanel>
    </Disclosure>
    </>
  );
}

function Example4() {
  return (
    <>
    <Disclosure defaultExpanded>
      <DisclosureTitle>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here.
      </DisclosurePanel>
    </Disclosure>
    </>
  );
}

function Example5() {
  return (
    <>
    <Disclosure isQuiet>
      <DisclosureTitle>System Requirements</DisclosureTitle>
      <DisclosurePanel>
        Details about system requirements here.
      </DisclosurePanel>
    </Disclosure>
    </>
  );
}

export const demos = {
  "example": Example1,
  "events": ControlledExpansion,
  "disabled": Example3,
  "expanded": Example4,
  "quiet": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
