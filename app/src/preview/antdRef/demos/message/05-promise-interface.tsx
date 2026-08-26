import React from 'react';
import { Button, message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: '하는 중이에요..',
        duration: 2.5,
      })
      .then(() => message.success('다 불러왔어요', 2.5))
      .then(() => message.info('다 불러왔어요', 2.5));
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>메시지 잇달아 띄우기</Button>
    </>
  );
};

export default App;