import React, { useState } from 'react';
import { Button, message, Popconfirm, Switch } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);

  const changeCondition = (checked: boolean) => {
    setCondition(checked);
  };

  const confirm = () => {
    setOpen(false);
    messageApi.success('다음 단계.');
  };

  const cancel = () => {
    setOpen(false);
    messageApi.error('취소를 눌렀어요.');
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <>
      {contextHolder}
      <div>
        <Popconfirm
          title="이 일을 지워요"
          description="이 일을 지울까요?"
          open={open}
          onOpenChange={handleOpenChange}
          onConfirm={confirm}
          onCancel={cancel}
          okText="네"
          cancelText="아니요"
        >
          <Button danger>일 지우기</Button>
        </Popconfirm>
        <br />
        <br />
        바로 실행할까요：
        <Switch defaultChecked onChange={changeCondition} />
      </div>
    </>
  );
};

export default App;