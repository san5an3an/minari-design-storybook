// @ts-nocheck
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
  "events": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Key(\uc124\uce58\ubcf8 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
