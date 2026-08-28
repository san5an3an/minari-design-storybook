// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/alert.json 의 examples[11] ("Custom title alignment")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Alert, Button, Flex } from 'antd';
import type { AlertProps } from 'antd';

const wrapperStyle: React.CSSProperties = {
  width: 360,
};

const title = '알림 상자가 좁으면 긴 제목이 여러 줄로 내려가요.';

const titleLineHeight = 22;
const iconSize = 14;
const closeIconSize = 12;
const smallButtonHeight = 24;

const firstLineStyles: AlertProps['styles'] = {
  root: {
    alignItems: 'flex-start',
  },
  icon: {
    marginBlockStart: (titleLineHeight - iconSize) / 2,
  },
  actions: {
    marginBlockStart: (titleLineHeight - smallButtonHeight) / 2,
  },
  close: {
    marginBlockStart: (titleLineHeight - closeIconSize) / 2,
  },
};

const App: React.FC = () => (
  <Flex vertical gap="middle" style={wrapperStyle}>
    <Alert title={title} type="info" showIcon closable styles={firstLineStyles} />
    <Alert
      title={title}
      type="success"
      showIcon
      closable
      styles={firstLineStyles}
      action={
        <Button size="small" type="text">
          동작
        </Button>
      }
    />
  </Flex>
);

export default App;