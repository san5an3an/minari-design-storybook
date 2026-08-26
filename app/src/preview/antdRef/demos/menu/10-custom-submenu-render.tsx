import React from 'react';
import type { MenuProps } from 'antd';
import { Col, ConfigProvider, Flex, Menu, Row, Space, Typography } from 'antd';
import { createStyles } from 'antd-style';

const { Title, Paragraph } = Typography;

const useStyles = createStyles(({ token }) => ({
  navigationPopup: {
    padding: token.padding,
    minWidth: 480,
    background: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  },
  menuItem: {
    borderRadius: token.borderRadius,
    transition: `all ${token.motionDurationSlow}`,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.02)',
    },
  },
  menuItemSpace: {
    padding: token.paddingSM,
  },
  leadingHeader: {
    margin: '0 !important',
    paddingBottom: token.paddingXS,
    borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
  },
  marginLess: {
    margin: '0 !important',
  },
}));

const MenuItem = ({ title, description }: { title: string; description: string }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.menuItem}>
      <Space vertical size={4} className={styles.menuItemSpace}>
        <Title level={5} className={styles.marginLess}>
          {title}
        </Title>
        <Paragraph type="secondary" className={styles.marginLess}>
          {description}
        </Paragraph>
      </Space>
    </div>
  );
};

const menuItems = [
  {
    key: 'home',
    label: '홈',
  },
  {
    key: 'features',
    label: '기능',
    children: [
      {
        key: 'getting-started',
        label: (
          <MenuItem title="시작하기" description="빠른 시작과 기본기 익히기." />
        ),
      },
      {
        key: 'components',
        label: <MenuItem title="컴포넌트" description="우리 컴포넌트 라이브러리를 둘러보세요." />,
      },
      {
        key: 'templates',
        label: <MenuItem title="템플릿" description="바로 쓸 수 있는 템플릿." />,
      },
    ],
  },
  {
    key: 'resources',
    label: '자료',
    children: [
      {
        key: 'blog',
        label: <MenuItem title="블로그" description="최근 소식과 글." />,
      },
      {
        key: 'community',
        label: <MenuItem title="커뮤니티" description="개발자 커뮤니티에 함께해요." />,
      },
    ],
  },
];

const App: React.FC = () => {
  const { styles } = useStyles();
  const popupRender: MenuProps['popupRender'] = (_, { item }) => {
    return (
      <Flex className={styles.navigationPopup} vertical gap="medium">
        <Typography.Title level={3} className={styles.leadingHeader}>
          {item.title}
        </Typography.Title>
        <Row gutter={16}>
          {React.Children.map(item.children as React.ReactNode, (child) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return (
              <Col span={12} key={child.key}>
                {child}
              </Col>
            );
          })}
        </Row>
      </Flex>
    );
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            popupBg: '#fff',
            horizontalItemSelectedColor: '#1677ff',
            horizontalItemHoverColor: '#1677ff',
          },
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
        },
      }}
    >
      <Menu mode="horizontal" items={menuItems} popupRender={popupRender} />
    </ConfigProvider>
  );
};

export default App;