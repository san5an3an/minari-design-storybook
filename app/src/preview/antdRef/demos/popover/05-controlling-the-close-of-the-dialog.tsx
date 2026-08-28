// @ts-nocheck
import React, { useState } from 'react';
import { Button, Popover } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={<a onClick={hide}>닫기</a>}
      title="제목"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type="primary">눌러 보세요</Button>
    </Popover>
  );
};

export default App;