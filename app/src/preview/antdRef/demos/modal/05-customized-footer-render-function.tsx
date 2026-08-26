import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          Modal 열기
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: '확인',
              content: '어쩌고저쩌고…',
              footer: (_, { OkBtn, CancelBtn }) => (
                <>
                  <Button>직접 만든 버튼</Button>
                  <CancelBtn />
                  <OkBtn />
                </>
              ),
            });
          }}
        >
          확인 Modal 열기
        </Button>
      </Space>
      <Modal
        open={open}
        title="제목"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button>직접 만든 버튼</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>
    </>
  );
};

export default App;