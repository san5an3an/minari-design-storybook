import React from 'react';
import { Flex, Mentions } from 'antd';
import type { GetProp, MentionsProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => ({
  root: {
    border: `${token.lineWidth}px ${token.lineType} ${token.colorPrimary}`,
    borderRadius: token.borderRadiusLG,
    width: 300,
  },
}));

const options: MentionsProps['options'] = [
  { value: 'afc163', label: 'afc163' },
  { value: 'zombieJ', label: 'zombieJ' },
  { value: '학생 만나기', label: '학생 만나기' },
  { value: 'thinkasany', label: 'thinkasany' },
];

const stylesObject: MentionsProps['styles'] = {
  textarea: {
    fontSize: 14,
    resize: 'vertical',
    fontWeight: 200,
  },
};

const stylesFunction: MentionsProps['styles'] = (
  info,
): GetProp<MentionsProps, 'styles', 'Return'> => {
  if (info.props.variant === 'filled') {
    return {
      root: {
        border: '1px solid #722ed1',
      },
      popup: {
        border: '1px solid #722ed1',
      },
    };
  }
};

const App: React.FC = () => {
  const { styles: classNames } = useStyles();

  const sharedProps: MentionsProps = {
    options,
    classNames,
  };

  return (
    <Flex vertical gap="medium">
      <Mentions {...sharedProps} styles={stylesObject} placeholder="객체" rows={2} />
      <Mentions {...sharedProps} styles={stylesFunction} variant="filled" placeholder="함수" />
    </Flex>
  );
};

export default App;