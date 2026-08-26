import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    title: '알림 제목',
    description:
      '알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요.',
    onClick: () => {
      console.log('알림을 눌렀어요!');
    },
  });
};
const App: React.FC = () => (
  <Button type="primary" onClick={openNotification}>
    알림 상자 열기
  </Button>
);

export default App;