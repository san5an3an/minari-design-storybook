import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <TextArea placeholder="내용에 맞춰 높이 자동 조절" autoSize />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        placeholder="최소·최대 줄 수를 정해 높이 자동 조절"
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="제어되는 자동 높이"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </>
  );
};

export default App;