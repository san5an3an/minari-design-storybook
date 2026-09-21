// @ts-nocheck
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
