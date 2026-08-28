// @ts-nocheck
import React, { useState } from 'react';
import { Button, TimePicker } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          좋아요
        </Button>
      )}
    />
  );
};

export default App;