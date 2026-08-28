// @ts-nocheck
import React from 'react';
import { Cascader, Flex } from 'antd';
import type { CascaderProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    root: {
      borderRadius: token.borderRadiusLG,
    },
  };
});

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: '학생 만나기',
    label: '학생 만나기',
    children: [
      {
        value: 'hangzhou',
        label: '서울',
        children: [
          {
            value: 'xihu',
            label: '한강공원',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: '대전',
        children: [
          {
            value: 'zhonghuamen',
            label: '광화문',
          },
        ],
      },
    ],
  },
];

const stylesObject: CascaderProps['styles'] = {
  prefix: {
    color: '#ccc',
  },
  suffix: {
    color: '#ccc',
  },
};

const stylesFn: CascaderProps['styles'] = (info): GetProp<CascaderProps, 'styles', 'Return'> => {
  if (info.props.variant === 'filled') {
    return {
      prefix: {
        color: '#1890ff',
      },
      suffix: {
        color: '#1890ff',
      },
      popup: {
        listItem: {
          color: '#1890ff',
        },
      },
    };
  }
  return {};
};

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  return (
    <Flex vertical gap="medium">
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="객체 스타일"
        classNames={classNames}
        styles={stylesObject}
        prefix="🏠"
      />
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="함수 스타일"
        variant="filled"
        classNames={classNames}
        styles={stylesFn}
        prefix="✅"
      />
    </Flex>
  );
};

export default App;