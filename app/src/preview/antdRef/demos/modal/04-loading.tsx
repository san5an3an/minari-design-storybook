import React from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        Modal 열기
      </Button>
      <Modal
        title={<p>불러오는 중 Modal</p>}
        footer={
          <Button type="primary" onClick={showLoading}>
            새로 고침
          </Button>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Modal>
    </>
  );
};

export default App;