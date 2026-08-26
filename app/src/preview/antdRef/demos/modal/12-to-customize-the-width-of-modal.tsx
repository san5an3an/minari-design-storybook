import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);

  return (
    <Flex vertical gap="medium" align="flex-start">
      {/* Basic */}
      <Button type="primary" onClick={() => setOpen(true)}>
        너비 1000px Modal 열기
      </Button>
      <Modal
        title="너비 1000px Modal"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>

      {/* Responsive */}
      <Button type="primary" onClick={() => setOpenResponsive(true)}>
        반응형 너비 Modal 열기
      </Button>
      <Modal
        title="반응형 너비 Modal"
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        width={{
          xs: '90%',
          sm: '80%',
          md: '70%',
          lg: '60%',
          xl: '50%',
          xxl: '40%',
        }}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>
    </Flex>
  );
};

export default App;