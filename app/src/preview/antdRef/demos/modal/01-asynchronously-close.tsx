// @ts-nocheck
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('창의 내용');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('2초 뒤에 창이 닫혀요');
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
    <>
      <Button type="primary" onClick={showModal}>
        비동기 로직으로 Modal 열기
      </Button>
      <Modal
        title="제목"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default App;