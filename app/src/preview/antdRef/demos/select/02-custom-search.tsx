// @ts-nocheck
import React from 'react';
import { Select } from 'antd';

const App: React.FC = () => (
  <Select
    showSearch={{
      filterOption: (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
    }}
    placeholder="사람을 골라 주세요"
    options={[
      { value: '1', label: '지훈' },
      { value: '2', label: '서연' },
      { value: '3', label: '태현' },
    ]}
  />
);

export default App;