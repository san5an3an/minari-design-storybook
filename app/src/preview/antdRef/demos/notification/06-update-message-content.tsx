import React from 'react';
import { Button, notification } from 'antd';

const key = 'updatable';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      title: '알림 제목',
      description: '설명이에요.',
    });

    setTimeout(() => {
      api.open({
        key,
        title: '새 제목',
        description: '새 설명이에요.',
      });
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        알림 상자 열기
      </Button>
    </>
  );
};

export default App;