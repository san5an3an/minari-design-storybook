import React, { useState } from 'react';
import { ExclamationCircleOutlined } from '../_icons';
import { Button, Modal, Space } from 'antd';

const LocalizedModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="확인"
        cancelText="취소"
      >
        <p>어쩌고저쩌고…</p>
        <p>어쩌고저쩌고…</p>
        <p>어쩌고저쩌고…</p>
      </Modal>
    </>
  );
};

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      title: '확인',
      icon: <ExclamationCircleOutlined />,
      content: '어쩌고저쩌고…',
      okText: '확인',
      cancelText: '취소',
    });
  };

  return (
    <>
      <Space>
        <LocalizedModal />
        <Button onClick={confirm}>확인</Button>
      </Space>
      {contextHolder}
    </>
  );
};

export default App;