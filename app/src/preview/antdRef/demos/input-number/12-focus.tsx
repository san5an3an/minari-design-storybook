import React, { useRef } from 'react';
import type { GetRef } from 'antd';
import { Button, InputNumber, Space } from 'antd';

type InputNumberRef = GetRef<typeof InputNumber>;

const App: React.FC = () => {
  const inputRef = useRef<InputNumberRef>(null);
  return (
    <Space vertical style={{ width: '100%' }}>
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current?.focus({ cursor: 'start' });
          }}
        >
          첫 칸에 초점
        </Button>
        <Button
          onClick={() => {
            inputRef.current?.focus({ cursor: 'end' });
          }}
        >
          마지막 칸에 초점
        </Button>
        <Button
          onClick={() => {
            inputRef.current?.focus({ cursor: 'all' });
          }}
        >
          전체 골라서 초점
        </Button>
        <Button
          onClick={() => {
            inputRef.current?.focus({ preventScroll: true });
          }}
        >
          굴리지 않고 초점
        </Button>
      </Space>
      <InputNumber style={{ width: '100%' }} defaultValue={999} ref={inputRef} />
    </Space>
  );
};

export default App;