import React from 'react';
import { Flex, Tabs } from 'antd';
import type { GetProp, TabsProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border-width: 2px;
    border-style: dashed;
    padding: 16px;
    margin-bottom: 10px;
  `,
}));

const stylesObject: TabsProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed', padding: 16, marginBottom: 10 },
  header: { backgroundColor: 'rgba(245,245,245,0.5)' },
  item: { fontWeight: 'bold', color: '#1890ff', padding: `6px 10px` },
  indicator: { backgroundColor: 'rgba(255,77,79, 0.3)', height: 4 },
  body: { backgroundColor: 'rgba(230,247,255,0.8)' }, content: { padding: 16 },
};

const stylesFn: TabsProps['styles'] = (info): GetProp<TabsProps, 'styles', 'Return'> => {
  if (info.props.type === 'card') {
    return {
      root: { backgroundColor: 'rgba(250,250,250, 0.8)', borderColor: '#d9d9d9' },
      header: { textAlign: 'start' },
    };
  }
  return {};
};

const items = [
  {
    key: '1',
    label: '탭 1',
    children: '탭 패널 1의 내용',
  },
  {
    key: '2',
    label: '탭 2',
    children: '탭 패널 2의 내용',
  },
  {
    key: '3',
    label: '탭 3',
    children: '탭 패널 3의 내용',
  },
];

const App: React.FC = () => {
  const shareProps: TabsProps = {
    items,
    defaultActiveKey: '1',
    classNames,
  };

  return (
    <Flex vertical gap="medium">
      <Tabs {...shareProps} styles={stylesObject} />
      <Tabs tabPlacement="start" type="card" {...shareProps} styles={stylesFn} />
    </Flex>
  );
};

export default App;