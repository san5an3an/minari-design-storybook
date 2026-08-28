// @ts-nocheck
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