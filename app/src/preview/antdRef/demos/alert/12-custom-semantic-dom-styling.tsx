// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/alert.json 의 examples[12] ("Custom semantic dom styling")
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
import type { AlertProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 12px;
  `,
}));

const styleFn: AlertProps['styles'] = ({
  props: { type },
}): GetProp<AlertProps, 'styles', 'Return'> => {
  if (type === 'success') {
    return {
      root: {
        backgroundColor: 'rgba(82, 196, 26, 0.1)',
        borderColor: '#b7eb8f',
      },
      icon: {
        color: '#52c41a',
      },
    };
  }

  if (type === 'warning') {
    return {
      root: {
        backgroundColor: 'rgba(250, 173, 20, 0.1)',
        borderColor: '#ffe58f',
      },
      icon: {
        color: '#faad14',
      },
    };
  }

  return {};
};

const App: React.FC = () => {
  const alertSharedProps: AlertProps = {
    showIcon: true,
    classNames: {
      root: classNames.root,
    },
  };

  return (
    <Flex vertical gap="medium">
      <Alert
        {...alertSharedProps}
        title="객체 스타일"
        type="info"
        styles={{
          icon: {
            fontSize: 18,
          },
          section: {
            fontWeight: 500,
          },
        }}
        action={<Button size="small">동작</Button>}
      />
      <Alert {...alertSharedProps} title="함수 스타일" type="success" styles={styleFn} />
    </Flex>
  );
};

export default App;