import React, { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Input, Space, Switch } from 'antd';

const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null);
  const [input, setInput] = useState(true);

  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Ant Design 이 당신을 사랑해요!',
    ref: inputRef,
  };

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
        <Switch
          checked={input}
          checkedChildren="Input"
          unCheckedChildren="TextArea"
          onChange={() => {
            setInput((prev) => !prev);
          }}
        />
      </Space>
      <br />
      {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
    </Space>
  );
};

export default App;