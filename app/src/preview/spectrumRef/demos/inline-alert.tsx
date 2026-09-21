// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/inlinealert/InlineAlert.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Content, Heading, InlineAlert } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <InlineAlert>
      <Heading>Payment Information</Heading>
      <Content>Enter your billing address, shipping address, and payment method to complete your purchase.</Content>
    </InlineAlert>
    </>
  );
}

function Example2() {
  return (
    <>
    <InlineAlert variant="positive">
      <Heading>Payment Information</Heading>
      <Content>Enter your billing address, shipping address, and payment method to complete your purchase.</Content>
    </InlineAlert>
    </>
  );
}

function Example3() {
  return (
    <>
    <InlineAlert variant="info">
      <Heading>Accepted Payment Methods</Heading>
      <Content>Only major credit cards are accepted for payment. Direct debit is currently unavailable.</Content>
    </InlineAlert>
    </>
  );
}

function Example4() {
  return (
    <>
    <InlineAlert variant="positive">
      <Heading>Purchase completed</Heading>
      <Content>You'll get a confirmation email with your order details shortly.</Content>
    </InlineAlert>
    </>
  );
}

function Example5() {
  return (
    <>
    <InlineAlert variant="notice">
      <Heading>Update payment information</Heading>
      <Content>The saved credit card for your account has expired. Update your payment information to complete the purchase.</Content>
    </InlineAlert>
    </>
  );
}

function Example6() {
  return (
    <>
    <InlineAlert variant="negative">
      <Heading>Unable to process payment</Heading>
      <Content>There was an error processing your payment. Please check that your credit card information is correct, then try again.</Content>
    </InlineAlert>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "informative": Example3,
  "positive": Example4,
  "notice": Example5,
  "negative": Example6,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
