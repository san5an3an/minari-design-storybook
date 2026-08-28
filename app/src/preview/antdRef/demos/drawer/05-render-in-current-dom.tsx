// @ts-nocheck
import React, { useState } from 'react';
import { Button, Drawer, theme } from 'antd';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: 200,
    padding: 48,
    overflow: 'hidden',
    background: token.colorFillAlter,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={containerStyle}>
      여기에 그리기
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          열기
        </Button>
      </div>
      <Drawer
        title="기본 서랍"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <p>내용이 들어가요…</p>
      </Drawer>
    </div>
  );
};

export default App;