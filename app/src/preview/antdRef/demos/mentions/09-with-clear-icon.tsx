// @ts-nocheck
import React, { useState } from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { Mentions } from 'antd';

const App: React.FC = () => {
  const [value, setValue] = useState('안녕하세요');
  return (
    <>
      <Mentions value={value} onChange={setValue} allowClear />
      <br />
      <br />
      <Mentions
        value={value}
        onChange={setValue}
        allowClear={{ clearIcon: <CloseSquareFilled /> }}
      />
      <br />
      <br />
      <Mentions value={value} onChange={setValue} allowClear rows={3} />
    </>
  );
};

export default App;