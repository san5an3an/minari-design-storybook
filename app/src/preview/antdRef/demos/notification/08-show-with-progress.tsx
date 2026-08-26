import React from 'react';
import { Button, notification, Space } from 'antd';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
      title: '알림 제목',
      description:
        '알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요.',
      showProgress: true,
      pauseOnHover,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={openNotification(true)}>
          올리면 멈춰요
        </Button>
        <Button type="primary" onClick={openNotification(false)}>
          마우스를 올려도 안 멈춰요
        </Button>
      </Space>
    </>
  );
};

export default App;