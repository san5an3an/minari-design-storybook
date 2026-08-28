// @ts-nocheck
import React from 'react';
import { Avatar, Badge, Card, Flex, Space } from 'antd';
import type { BadgeProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';
import type { RibbonProps } from 'antd/es/badge/Ribbon';

const badgeClassNames = createStaticStyles(({ css }) => ({
  indicator: css`
    font-size: 10px;
  `,
}));

const ribbonClassNames = createStaticStyles(({ css }) => ({
  root: css`
    width: 400px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  `,
}));

const badgeStyles: BadgeProps['styles'] = {
  root: {
    borderRadius: 8,
  },
};

const ribbonStyles: RibbonProps['styles'] = {
  indicator: {
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

const badgeStylesFn: BadgeProps['styles'] = (info): GetProp<RibbonProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      indicator: {
        fontSize: 14,
        backgroundColor: '#696FC7',
      },
    };
  }
  return {};
};

const ribbonStylesFn: RibbonProps['styles'] = (info): GetProp<RibbonProps, 'styles', 'Return'> => {
  if (info.props.color === '#696FC7') {
    return {
      content: {
        fontWeight: 'bold',
      },
      indicator: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  return (
    <Space size="large" vertical>
      <Flex gap="medium">
        <Badge size="small" count={5} classNames={badgeClassNames} styles={badgeStyles}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={5} classNames={badgeClassNames} styles={badgeStylesFn}>
          <Avatar shape="square" size="large" />
        </Badge>
      </Flex>
      <Flex vertical gap="medium">
        <Badge.Ribbon text="직접 만든 리본" classNames={ribbonClassNames} styles={ribbonStyles}>
          <Card title="리본을 직접 단 카드" size="small">
            이 카드는 시맨틱 classNames·styles 로 리본을 직접 달았어요.
          </Card>
        </Badge.Ribbon>
        <Badge.Ribbon
          text="직접 만든 리본"
          color="#696FC7"
          classNames={ribbonClassNames}
          styles={ribbonStylesFn}
        >
          <Card title="리본을 직접 단 카드" size="small">
            이 카드는 시맨틱 classNames·styles 로 리본을 직접 달았어요.
          </Card>
        </Badge.Ribbon>
      </Flex>
    </Space>
  );
};

export default App;