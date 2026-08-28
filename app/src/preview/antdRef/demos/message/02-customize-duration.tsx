// @ts-nocheck
import React from 'react';
import { Button, message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: '성공했다는 안내예요. 10초 뒤에 사라져요',
      duration: 10,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>직접 정한 표시 시간</Button>
    </>
  );
};

export default App;