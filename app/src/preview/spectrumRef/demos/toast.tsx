// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/toast/Toast.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";

function Example1() {
  return (
    <>
    <ToastContainer />
    </>
  );
}

function Example2() {
  return (
    <>
    <Button
      onPress={() => ToastQueue.positive('Toast is done!')}
      variant="primary">
      Show toast
    </Button>
    </>
  );
}

function Example3() {
  return (
    <>
    <ButtonGroup>
      <Button
        ///- begin highlight -///
        onPress={() => ToastQueue.neutral('Toast available')}
        ///- end highlight -///
        variant="secondary">
        Show Neutral Toast
      </Button>
      <Button
        ///- begin highlight -///
        onPress={() => ToastQueue.positive('Toast is done!')}
        ///- end highlight -///
        variant="primary">
        Show Positive Toast
      </Button>
      <Button
        ///- begin highlight -///
        onPress={() => ToastQueue.negative('Toast is burned!')}
        ///- end highlight -///
        variant="negative">
        Show Negative Toast
      </Button>
      <Button
        ///- begin highlight -///
        onPress={() => ToastQueue.info('Toasting…')}
        ///- end highlight -///
        variant="accent"
        style="outline">
        Show Info Toast
      </Button>
    </ButtonGroup>
    </>
  );
}

function Example4() {
  return (
    <>
    <Button
      onPress={() => ToastQueue.info('An update is available', {
        ///- begin highlight -///
        actionLabel: 'Update',
        onAction: () => alert('Updating!'),
        shouldCloseOnAction: true
        ///- end highlight -///
      })}
      variant="primary">
      Show toast
    </Button>
    </>
  );
}

function Example5() {
  return (
    <>
    <Button
      ///- begin highlight -///
      onPress={() => ToastQueue.positive('Toast is done!', {timeout: 5000})}
      ///- end highlight -///
      variant="primary">
      Show toast
    </Button>
    </>
  );
}

function Example() {
  let [close, setClose] = React.useState(null);

  return (
    <Button
      onPress={() => {
        if (!close) {
          ///- begin highlight -///
          let close = ToastQueue.negative('Unable to save', {onClose: () => setClose(null)});
          ///- end highlight -///
          setClose(() => close);
        } else {
          ///- begin highlight -///
          close();
          ///- end highlight -///
        }
      }}
      variant="primary">
      {close ? 'Hide' : 'Show'} Toast
    </Button>
  );
}

export const demos = {
  "example-1": Example1,
  "example-2": Example2,
  "content-1": Example3,
  "events-1": Example4,
  "auto-dismiss-1": Example5,
  "programmatic-dismissal-1": Example,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "placement-1": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
};
