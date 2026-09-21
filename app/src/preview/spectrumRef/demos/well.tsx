// @ts-nocheck
import { Well } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Well>Better a little which is well done, than a great deal imperfectly.</Well>
    </>
  );
}

function Example2() {
  return (
    <>
    <Well>Well, well, well</Well>
    </>
  );
}

function Example3() {
  return (
    <>
    <Well role="region" aria-labelledby="wellLabel">
      <h3 id="wellLabel">Shipping Address</h3>
      <p>601 Townsend Street<br /> San Francisco, CA 94103</p>
    </Well>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "accessibility": Example3,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
