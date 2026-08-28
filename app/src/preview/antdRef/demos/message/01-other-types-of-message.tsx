// @ts-nocheck
import React from 'react';
import { Button, message, Space } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: '성공 메시지예요',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: '오류 메시지예요',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: '경고 메시지예요',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>성공</Button>
        <Button onClick={error}>오류</Button>
        <Button onClick={warning}>경고</Button>
      </Space>
    </>
  );
};

export default App;