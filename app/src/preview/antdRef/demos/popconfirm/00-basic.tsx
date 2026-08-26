import React from 'react';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';

const App: React.FC = () => {
  const [messageApi, holder] = message.useMessage();

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    messageApi.success('네를 눌렀어요');
  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    messageApi.error('아니요를 눌렀어요');
  };

  return (
    <>
      {holder}
      <Popconfirm
        title="이 일을 지워요"
        description="이 일을 지울까요?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="네"
        cancelText="아니요"
      >
        <Button danger>지우기</Button>
      </Popconfirm>
    </>
  );
};

export default App;