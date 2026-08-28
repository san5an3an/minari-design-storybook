// @ts-nocheck
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        열기
      </Button>
      <Drawer
        title="서랍 닫기 버튼 자리"
        closable={{ placement: 'end' }}
        onClose={onClose}
        open={open}
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>오른쪽 위를 봐 보세요…</p>
      </Drawer>
    </>
  );
};

export default App;