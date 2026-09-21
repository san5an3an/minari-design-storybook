// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/illustratedmessage/IllustratedMessage.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Content, Heading, IllustratedMessage } from "@adobe/react-spectrum";
import NotFound from '@spectrum-icons/illustrations/NotFound';
import Upload from '@spectrum-icons/illustrations/Upload';
import NoSearchResults from '@spectrum-icons/illustrations/NoSearchResults';
import Unauthorized from '@spectrum-icons/illustrations/Unauthorized';
import Error from '@spectrum-icons/illustrations/Error';
import Unavailable from '@spectrum-icons/illustrations/Unavailable';
import Timeout from '@spectrum-icons/illustrations/Timeout';

function Example1() {
  return (
    <>
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>Try another search</Content>
    </IllustratedMessage>
    </>
  );
}

function Example2() {
  return (
    <>
    <IllustratedMessage>
      <Upload />
      <Heading>Drag and Drop your file</Heading>
      <Content>Select a File from your computer<br /> or Search Adobe Stock</Content>
    </IllustratedMessage>
    </>
  );
}

function Example3() {
  return (
    <>
    <IllustratedMessage>
      <NotFound aria-label="No results" />
    </IllustratedMessage>
    </>
  );
}

function Example4() {
  return (
    <>
    <IllustratedMessage>
      <NoSearchResults />
      <Heading>No matching results</Heading>
      <Content>Try another search.</Content>
    </IllustratedMessage>
    </>
  );
}

function Example5() {
  return (
    <>
    <IllustratedMessage>
      <Unauthorized />
      <Heading>Error 403: Access not allowed</Heading>
      <Content>You do not have permission to access this page. Try checking the URL or visit a different page.</Content>
    </IllustratedMessage>
    </>
  );
}

function Example6() {
  return (
    <>
    <IllustratedMessage>
      <NotFound />
      <Heading>Error 404: Page not found</Heading>
      <Content>This page isn't available. Try checking the URL or visit a different page.</Content>
    </IllustratedMessage>
    </>
  );
}

function Example7() {
  return (
    <>
    <IllustratedMessage>
      <Error />
      <Heading>Error 500: Internal server error</Heading>
      <Content>Something went wrong. Please try again later.</Content>
    </IllustratedMessage>
    </>
  );
}

function Example8() {
  return (
    <>
    <IllustratedMessage>
      <Unavailable />
      <Heading>Error 503: Service unavailable</Heading>
      <Content>This page isn't working. Try a different page or try again later.</Content>
    </IllustratedMessage>
    </>
  );
}

function Example9() {
  return (
    <>
    <IllustratedMessage>
      <Timeout />
      <Heading>Error 504: Server timeout</Heading>
      <Content>The server took too long. Please try again later.</Content>
    </IllustratedMessage>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "accessibility": Example3,
  "no-search-results": Example4,
  "403-forbidden": Example5,
  "404-not-found": Example6,
  "500-internal-server-error": Example7,
  "503-service-unavailable": Example8,
  "504-gateway-timeout": Example9,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
