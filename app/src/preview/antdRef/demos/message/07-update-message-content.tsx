import React from 'react';
import { Button, message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: '불러오는 중…',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: '다 불러왔어요!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        메시지 상자 열기
      </Button>
    </>
  );
};

export default App;