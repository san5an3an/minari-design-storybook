// @ts-nocheck
import React from 'react';
import { Flex, TreeSelect } from 'antd';
import type { GetProp, TreeSelectProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    width: 300,
    borderRadius: token.borderRadius,
  },
}));

const styleObject: TreeSelectProps['styles'] = {
  input: {
    fontSize: 16,
  },
  suffix: {
    color: '#1890ff',
  },
  popup: {
    root: {
      border: '1px solid #1890ff',
    },
  },
};

const styleFunction: TreeSelectProps['styles'] = (
  info,
): GetProp<TreeSelectProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      suffix: {
        color: '#722ed1',
      },
      popup: {
        item: {
          color: '#722ed1',
        },
      },
    };
  }
  return {};
};

const treeData: TreeSelectProps['treeData'] = [
  {
    value: '부모 1',
    title: '부모 1',
    children: [
      {
        value: '부모 1-0',
        title: '부모 1-0',
        children: [
          {
            value: '잎1',
            title: '잎1',
          },
          {
            value: '잎2',
            title: '잎2',
          },
        ],
      },
      {
        value: '부모 1-1',
        title: '부모 1-1',
        children: [
          {
            value: '잎3',
            title: '잎3',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const { styles: classNames } = useStyles();

  const sharedProps: TreeSelectProps = {
    treeData,
    classNames,
  };

  return (
    <Flex vertical gap="large">
      <TreeSelect {...sharedProps} styles={styleObject} placeholder="객체" />
      <TreeSelect {...sharedProps} styles={styleFunction} placeholder="함수" size="medium" />
    </Flex>
  );
};

export default App;