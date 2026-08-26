import React from 'react';
import { AutoComplete, Flex } from 'antd';
import type { AutoCompleteProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border-radius: 4px;
  `,
}));

const stylesObject: AutoCompleteProps['styles'] = {
  popup: {
    root: { borderWidth: 1, borderColor: '#1890ff' },
    list: { backgroundColor: 'rgba(240,240,240, 0.85)' },
    listItem: { color: '#272727' },
  },
};

const stylesFn: AutoCompleteProps['styles'] = ({
  props,
}): GetProp<AutoCompleteProps, 'styles', 'Return'> => {
  if (props.variant === 'filled') {
    return {
      popup: {
        root: { borderWidth: 1, borderColor: '#ccc' },
        list: { backgroundColor: 'rgba(240,240,240, 0.85)' },
        listItem: { color: '#272727' },
      },
    };
  }
  return {};
};

const options: AutoCompleteProps['options'] = [
  { value: '버나비' },
  { value: '시애틀' },
  { value: '로스앤젤레스' },
  { value: '샌프란시스코' },
  { value: '학생 만나기' },
];

const App: React.FC = () => {
  const sharedProps: AutoCompleteProps = {
    options,
    classNames: {
      root: classNames.root,
    },
    style: { width: 200 },
  };

  return (
    <Flex vertical gap="medium">
      <AutoComplete {...sharedProps} placeholder="객체 스타일" styles={stylesObject} />
      <AutoComplete
        {...sharedProps}
        variant="filled"
        placeholder="함수 스타일"
        styles={stylesFn}
      />
    </Flex>
  );
};

export default App;