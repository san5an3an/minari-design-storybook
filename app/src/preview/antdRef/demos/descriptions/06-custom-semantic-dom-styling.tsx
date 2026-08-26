import React from 'react';
import { Descriptions, Flex } from 'antd';
import type { DescriptionsProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 10px;
  `,
}));

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '상품',
    children: '클라우드 데이터베이스',
  },
  {
    key: '2',
    label: '청구 방식',
    children: '선결제',
  },
  {
    key: '3',
    label: '자동 갱신',
    children: '네',
  },
];

const styles: DescriptionsProps['styles'] = {
  label: {
    color: '#000',
  },
};

const stylesFn: DescriptionsProps['styles'] = (
  info,
): GetProp<DescriptionsProps, 'styles', 'Return'> => {
  if (info.props.size === 'large') {
    return {
      root: {
        borderRadius: 8,
        border: '1px solid #CDC1FF',
      },
      label: { color: '#A294F9' },
    };
  }
  return {};
};

const App: React.FC = () => {
  const descriptionsProps: DescriptionsProps = {
    title: '사용자 정보',
    items,
    bordered: true,
    classNames,
  };

  return (
    <Flex vertical gap="medium">
      <Descriptions {...descriptionsProps} styles={styles} size="small" />
      <Descriptions {...descriptionsProps} styles={stylesFn} size="large" />
    </Flex>
  );
};

export default App;