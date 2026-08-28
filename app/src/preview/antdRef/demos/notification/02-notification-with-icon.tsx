// @ts-nocheck
import React from 'react';
import { Button, Flex, notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      title: '알림 제목',
      description:
        '알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요. 알림 내용이 여기에 들어가요.',
    });
  };

  return (
    <>
      {contextHolder}
      <Flex gap={8} wrap="wrap">
        <Button
          color="green"
          variant="outlined"
          onClick={() => openNotificationWithIcon('success')}
        >
          성공
        </Button>
        <Button color="blue" variant="outlined" onClick={() => openNotificationWithIcon('info')}>
          안내
        </Button>
        <Button
          color="yellow"
          variant="outlined"
          onClick={() => openNotificationWithIcon('warning')}
        >
          경고
        </Button>
        <Button color="red" variant="outlined" onClick={() => openNotificationWithIcon('error')}>
          오류
        </Button>
      </Flex>
    </>
  );
};

export default App;