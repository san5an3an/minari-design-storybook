// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/well/Well.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
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
