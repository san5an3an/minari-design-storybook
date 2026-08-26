import React from 'react';
import { SmileOutlined } from '../_icons';
import { Button, notification } from 'antd';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      title: '알림 제목',
      description:
        '알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
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