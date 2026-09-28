// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/statuslight/StatusLight.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { StatusLight } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <StatusLight variant="positive">Ready</StatusLight>
    </>
  );
}

function Example2() {
  return (
    <>
    <StatusLight variant="positive">Semantic color</StatusLight>
    <StatusLight variant="yellow">Label color</StatusLight>
    </>
  );
}

function Example3() {
  return (
    <>
    <StatusLight variant="neutral">Gray: Archived, Deleted, Paused, Draft, Not Started, Ended</StatusLight>
    <StatusLight variant="positive">Green: Approved, Complete, Success, New, Purchased, Licensed</StatusLight>
    <StatusLight variant="notice">Orange: Needs Approval, Pending, Scheduled, Syncing, Indexing, Processing</StatusLight>
    <StatusLight variant="negative">Red: Error, Alert, Rejected, Failed</StatusLight>
    <StatusLight variant="info">Blue: Active, In Use, Live, Published</StatusLight>
    </>
  );
}

function Example4() {
  return (
    <>
    <StatusLight variant="indigo">Indigo</StatusLight>
    <StatusLight variant="celery">Celery</StatusLight>
    <StatusLight variant="magenta">Magenta</StatusLight>
    <StatusLight variant="yellow">Yellow</StatusLight>
    <StatusLight variant="fuchsia">Fuchsia</StatusLight>
    <StatusLight variant="seafoam">Seafoam</StatusLight>
    <StatusLight variant="chartreuse">Chartreuse</StatusLight>
    <StatusLight variant="purple">Purple</StatusLight>
    </>
  );
}

function Example5() {
  return (
    <>
    <StatusLight variant="yellow" isDisabled >Yellow</StatusLight>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "visual-options-1": Example3,
  "visual-options-2": Example4,
  "visual-options-3": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
