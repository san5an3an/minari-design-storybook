import React from 'react';
import { Button, notification } from 'antd';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      title: '알림 제목',
      description:
        '저는 저절로 안 닫혀요. 일부러 아주아주 길게 쓴 설명이라 글자와 낱말이 아주 많아요.',
      duration: 0,
    });
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