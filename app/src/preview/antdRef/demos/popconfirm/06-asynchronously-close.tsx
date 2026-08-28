// @ts-nocheck
import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('취소 버튼을 눌렀어요');
    setOpen(false);
  };

  return (
    <Popconfirm
      title="제목"
      description="비동기 로직으로 Popconfirm 열기"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        비동기 로직으로 Popconfirm 열기
      </Button>
    </Popconfirm>
  );
};

export default App;