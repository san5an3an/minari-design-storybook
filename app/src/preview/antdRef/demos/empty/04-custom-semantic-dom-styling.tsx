/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/empty.json 의 examples[4] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { EmptyProps, GetProp } from 'antd';
import { Button, Empty, Flex } from 'antd';
import { createStaticStyles } from 'antd-style';

const emptySharedProps: EmptyProps = {
  image: Empty.PRESENTED_IMAGE_SIMPLE,
  children: <Button type="primary">지금 만들기</Button>,
};

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 1px dashed #ccc;
    padding: 16px;
  `,
}));

const stylesObject: EmptyProps['styles'] = {
  root: { backgroundColor: '#f5f5f5', borderRadius: '8px' },
  image: { filter: 'grayscale(100%)' },
  description: { color: '#1890ff', fontWeight: 'bold' },
  footer: { marginTop: '16px' },
};

const stylesFn: EmptyProps['styles'] = ({ props }): GetProp<EmptyProps, 'styles', 'Return'> => {
  if (props.description) {
    return {
      root: { backgroundColor: '#e6f7ff', border: '1px solid #91d5ff' },
      description: { color: '#1890ff', fontWeight: 'bold' },
      image: { filter: 'hue-rotate(180deg)' },
    };
  }
  return {};
};

const App: React.FC = () => {
  const emptyClassNames: EmptyProps['classNames'] = {
    root: classNames.root,
  };

  return (
    <Flex vertical gap="medium">
      <Empty
        {...emptySharedProps}
        description="객체 스타일"
        classNames={emptyClassNames}
        styles={stylesObject}
      />
      <Empty
        {...emptySharedProps}
        description="함수 스타일"
        classNames={emptyClassNames}
        styles={stylesFn}
      />
    </Flex>
  );
};

export default App;