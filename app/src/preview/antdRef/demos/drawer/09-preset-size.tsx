import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps['size']>();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Radio.Group
          value={size}
          onChange={(e) => setSize(e.target.value)}
          options={[
            { label: '큰 크기 (736px)', value: 'large' },
            { label: '기본 크기 (378px)', value: 'default' },
            { label: 256, value: 256 },
            { label: '500px', value: '500px' },
            { label: '50%', value: '50%' },
            { label: '20vw', value: '20vw' },
          ]}
        />
      </Space>
      <Button type="primary" onClick={() => setOpen(true)}>
        서랍 열기
      </Button>
      <Drawer
        title={`${size} 서랍`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>취소</Button>
            <Button type="primary" onClick={onClose}>
              확인
            </Button>
          </Space>
        }
      >
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
        <p>내용이 들어가요…</p>
      </Drawer>
    </>
  );
};

export default App;