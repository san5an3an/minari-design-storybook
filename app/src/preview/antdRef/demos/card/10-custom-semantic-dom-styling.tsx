import React from 'react';
import { EditOutlined, HeartOutlined, ShareAltOutlined } from '../_icons';
import { Avatar, Button, Card, Flex } from 'antd';
import type { CardMetaProps, CardProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const { Meta } = Card;

const useStyles = createStyles(({ token }) => ({
  root: {
    width: 300,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
  },
  header: {
    borderBottom: 'none',
    paddingBottom: token.paddingXS,
  },
  body: {
    paddingTop: 0,
  },
}));

const stylesCard: CardProps['styles'] = {
  root: {
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
};

const stylesCardFn: CardProps['styles'] = (info): GetProp<CardProps, 'styles', 'Return'> => {
  if (info.props.variant === 'outlined') {
    return {
      root: {
        borderColor: '#696FC7',
        boxShadow: '0 2px 8px #A7AAE1',
        borderRadius: 8,
      },
      extra: {
        color: '#696FC7',
      },
      title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#A7AAE1',
      },
    };
  }
};

const stylesCardMeta: CardMetaProps['styles'] = {
  title: {
    color: '#A7AAE1',
  },
  description: {
    color: '#A7AAE1',
  },
};

const actions = [
  <HeartOutlined key="heart" style={{ color: '#ff6b6b' }} />,
  <ShareAltOutlined key="share" style={{ color: '#4ecdc4' }} />,
  <EditOutlined key="고치기" style={{ color: '#45b7d1' }} />,
];

const App: React.FC = () => {
  const { styles: classNames } = useStyles();

  const sharedCardProps: CardProps = {
    classNames,
    actions,
  };

  const sharedCardMetaProps: CardMetaProps = {
    avatar: <Avatar src="https://api.dicebear.com/10.x/lorelei/svg?seed=1" />,
    description: '설명이 들어가는 자리예요',
  };

  return (
    <Flex gap="medium">
      <Card
        {...sharedCardProps}
        title="객체 카드"
        styles={stylesCard}
        extra={<Button type="link">더 보기</Button>}
        variant="borderless"
      >
        <Meta {...sharedCardMetaProps} title="객체 카드 메타 제목" />
      </Card>
      <Card
        {...sharedCardProps}
        title="함수 카드"
        styles={stylesCardFn}
        extra={
          <Button type="link" styles={{ root: { color: '#A7AAE1' } }}>
            더 보기
          </Button>
        }
      >
        <Meta {...sharedCardMetaProps} styles={stylesCardMeta} title="함수 카드 메타 제목" />
      </Card>
    </Flex>
  );
};

export default App;