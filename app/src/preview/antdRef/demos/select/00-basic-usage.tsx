import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`고른 값 ${value}`);
};

const App: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: '지훈' },
        { value: 'lucy', label: '서연' },
        { value: '정우진', label: 'yiminghe' },
        { value: 'disabled', label: '못 씀', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: '서연' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: '서연' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: '서연' }]}
      placeholder="골라 보세요"
    />
  </Space>
);

export default App;