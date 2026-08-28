// @ts-nocheck
import React from 'react';
import { Button, notification, Space } from 'antd';

const close = () => {
  console.log(
    '알림이 닫혔어요. 닫기 버튼을 눌렀거나 시간이 다 됐어요.',
  );
};

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          모두 없애기
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          확인
        </Button>
      </Space>
    );
    api.open({
      title: '알림 제목',
      description:
        '알림이 닫힌 뒤에 불리는 함수예요 (`duration` 이 지나 저절로 닫혔거나, 직접 닫았거나).',
      btn,
      key,
      onClose: close,
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