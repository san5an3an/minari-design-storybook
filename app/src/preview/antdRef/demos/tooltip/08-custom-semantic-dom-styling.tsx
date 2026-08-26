import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
import type { GetProp, TooltipProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  container: css`
    padding: 10px;
  `,
}));

const styles: TooltipProps['styles'] = {
  container: {
    borderRadius: 12,
    boxShadow: 'inset 0 0 8px #ccc',
  },
};

const stylesFn: TooltipProps['styles'] = (info): GetProp<TooltipProps, 'styles', 'Return'> => {
  if (!info.props.arrow) {
    return {
      container: {
        backgroundColor: 'rgba(53, 71, 125, 0.8)',
        padding: 12,
        color: '#fff',
        borderRadius: 4,
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  return (
    <Flex gap="medium">
      <Tooltip classNames={classNames} styles={styles} arrow={false} title="객체 글">
        <Button>객체 스타일</Button>
      </Tooltip>
      <Tooltip classNames={classNames} styles={stylesFn} arrow={false} title="함수 글">
        <Button type="primary">함수 스타일</Button>
      </Tooltip>
    </Flex>
  );
};

export default App;