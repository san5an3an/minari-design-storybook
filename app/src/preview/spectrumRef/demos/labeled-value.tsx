// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/labeledvalue/LabeledValue.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Content, ContextualHelp, Heading, LabeledValue, Link } from "@adobe/react-spectrum";
import { Time, getLocalTimeZone, now, today } from '@internationalized/date';

function Example1() {
  return (
    <>
    <LabeledValue label="File name" value="Budget.xls" />
    </>
  );
}

function Example2() {
  return (
    <>
    <LabeledValue label="Number of cookies" value={1024} />
    </>
  );
}

function Example3() {
  return (
    <>
    <LabeledValue label="File size" value={1.2} formatOptions={{style: 'unit', unit: 'megabyte'}} />
    </>
  );
}

function Example4() {
  return (
    <>
    <LabeledValue label="Price range" value={{start: 150, end: 400}} formatOptions={{style: 'currency', currency: 'USD', minimumFractionDigits: 0}} />
    </>
  );
}

function Example5() {
  return (
    <>
    <LabeledValue label="Date modified" value={today(getLocalTimeZone()).subtract({weeks: 1})} />
    </>
  );
}

function Example6() {
  return (
    <>
    <LabeledValue label="Page load time" value={now(getLocalTimeZone())} />
    </>
  );
}

function Example7() {
  return (
    <>
    <LabeledValue label="Business hours" value={{start: new Time(8, 30), end: new Time(18)}} />
    </>
  );
}

function Example8() {
  return (
    <>
    <LabeledValue label="Appointment date" value={new Date(2022, 6, 5)} formatOptions={{dateStyle: 'short'}} />
    </>
  );
}

function Example9() {
  return (
    <>
    <LabeledValue label="Pizza toppings" value={['Pepperoni', 'Pineapple', 'Mushroom', 'Garlic']} />
    </>
  );
}

function Example10() {
  return (
    <>
    <LabeledValue label="Interests" value={['Travel', 'Hiking', 'Snorkeling', 'Camping']} formatOptions={{type: 'unit'}} />
    </>
  );
}

function Example11() {
  return (
    <>
    <LabeledValue label="Website" value={<Link href="https://www.adobe.com/">Adobe.com</Link>} />
    </>
  );
}

function Example12() {
  return (
    <>
    <LabeledValue label="File name" value="Onboarding.pdf" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example13() {
  return (
    <>
    <LabeledValue
      label="Aperture"
      value="f/1.5"
      contextualHelp={
        <ContextualHelp>
          <Heading>What is the aperture?</Heading>
          <Content>The aperture setting controls the amount of light reaching the image sensor.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example2,
  "value-2": Example3,
  "value-3": Example4,
  "value-4": Example5,
  "value-5": Example6,
  "value-6": Example7,
  "value-7": Example8,
  "value-8": Example9,
  "value-9": Example10,
  "value-10": Example11,
  "visual-options-1": Example12,
  "visual-options-2": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
