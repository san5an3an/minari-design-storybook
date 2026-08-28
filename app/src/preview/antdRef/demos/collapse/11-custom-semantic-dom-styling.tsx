// @ts-nocheck
import React from 'react';
import type { CollapseProps, GetProp } from 'antd';
import { Collapse, Flex } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  `,
}));

const element = (
  <p>
    개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.
  </p>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '첫 번째 판 머리예요',
    children: element,
  },
  {
    key: '2',
    label: '두 번째 판 머리예요',
    children: element,
  },
  {
    key: '3',
    label: '세 번째 판 머리예요',
    children: element,
  },
];

const styles: CollapseProps['styles'] = {
  root: {
    backgroundColor: '#fafafa',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: '12px 16px',
    color: '#141414',
  },
};

const stylesFn: CollapseProps['styles'] = ({
  props,
}): GetProp<CollapseProps, 'styles', 'Return'> => {
  if (props.size === 'large') {
    return {
      root: {
        backgroundColor: '#fff',
        border: '1px solid #696FC7',
        borderRadius: 8,
      },
      header: {
        backgroundColor: '#F5EFFF',
        padding: '12px 16px',
        color: '#141414',
      },
    };
  }
};

const App: React.FC = () => {
  const sharedProps: CollapseProps = { classNames, items };

  return (
    <Flex vertical gap="medium">
      <Collapse {...sharedProps} defaultActiveKey={['1']} styles={styles} />
      <Collapse {...sharedProps} defaultActiveKey={['2']} styles={stylesFn} size="large" />
    </Flex>
  );
};

export default App;