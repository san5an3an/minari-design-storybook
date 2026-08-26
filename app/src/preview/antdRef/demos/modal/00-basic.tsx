import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal 열기
      </Button>
      <Modal
        title="기본 Modal"
        closable={{ 'aria-label': '직접 만든 닫기 버튼' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>
    </>
  );
};

export default App;