import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        서랍 열기
      </Button>
      <Drawer title="여러 겹 서랍" size={520} closable={false} onClose={onClose} open={open}>
        <Button type="primary" onClick={showChildrenDrawer}>
          두 겹 서랍
        </Button>
        <Drawer
          title="두 겹 서랍"
          size={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          두 겹짜리 서랍이에요
        </Drawer>
      </Drawer>
    </>
  );
};

export default App;