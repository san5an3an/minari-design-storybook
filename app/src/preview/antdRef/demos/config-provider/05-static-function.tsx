// @ts-nocheck
import React, { useContext, useLayoutEffect } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ExclamationCircleFilled } from '../_icons';
import { App, Button, ConfigProvider, message, Modal, notification, Space } from 'antd';

const Demo: React.FC = () => {
  const { locale, theme } = useContext(ConfigProvider.ConfigContext);
  useLayoutEffect(() => {
    ConfigProvider.config({
      holderRender: (children) => (
        <StyleProvider hashPriority="high">
          <ConfigProvider componentSize="small" locale={locale} theme={theme}>
            <App message={{ maxCount: 1 }} notification={{ maxCount: 1 }}>
              {children}
            </App>
          </ConfigProvider>
        </StyleProvider>
      ),
    });
  }, [locale, theme]);

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            message.info('보통 메시지예요');
          }}
        >
          메시지
        </Button>
        <Button
          type="primary"
          onClick={() => {
            notification.open({
              title: '알림 제목',
              description:
                '알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요.',
            });
          }}
        >
          알림
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: '이 항목들을 지울까요?',
              icon: <ExclamationCircleFilled />,
              content: '설명이 들어가요',
            });
          }}
        >
          Modal
        </Button>
      </Space>
    </div>
  );
};

export default Demo;