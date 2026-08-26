import React from 'react';
import { Flex, Timeline } from 'antd';
import type { GetProp, TimelineProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 8px;
    border-radius: 4px;
  `,
}));

const styles: TimelineProps['styles'] = {
  itemIcon: {
    borderColor: '#1890ff',
  },
};

const stylesFn: TimelineProps['styles'] = (info): GetProp<TimelineProps, 'styles', 'Return'> => {
  if (info.props.orientation === 'vertical') {
    return {
      root: {
        padding: '10px 6px',
        border: '1px solid #A294F9',
      },
      itemIcon: {
        borderColor: '#A294F9',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const sharedProps: TimelineProps = {
    classNames,
    items: [
      {
        title: '2015-09-01',
        content: '서비스 사이트 만들기',
      },
      {
        title: '2015-09-01 09:12:11',
        content: '초기 네트워크 문제 해결',
      },
      {
        content: '기술 테스트',
      },
    ],
  };

  return (
    <Flex vertical gap="medium">
      <Timeline {...sharedProps} orientation="horizontal" styles={styles} />
      <Timeline {...sharedProps} orientation="vertical" styles={stylesFn} />
    </Flex>
  );
};

export default App;