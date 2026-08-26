import React from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(`고른 값 ${value}`);
};

const App: React.FC = () => (
  <Space style={{ width: '100%' }} vertical>
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="골라 주세요"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
    <Select
      mode="multiple"
      disabled
      style={{ width: '100%' }}
      placeholder="골라 주세요"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </Space>
);

export default App;