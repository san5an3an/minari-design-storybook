// @ts-nocheck
import React from 'react';
import { Button, Modal, Space } from 'antd';

const modalConfig = {
  title: '제목',
  content: '내용이 들어가요…',
};

const App: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <>
      <Space>
        <Button
          onClick={() => {
            modal.confirm({ ...modalConfig, mask: { blur: true } });
          }}
        >
          blur
        </Button>
        <Button
          onClick={() => {
            modal.confirm(modalConfig);
          }}
        >
          어둡게 덮기
        </Button>
        <Button
          onClick={() => {
            modal.confirm({ ...modalConfig, mask: false });
          }}
        >
          덮기 없음
        </Button>
      </Space>

      {contextHolder}
    </>
  );
};

export default App;