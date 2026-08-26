import React from 'react';
import { Select } from 'antd';

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value);
};

const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{ value: 'lucy', label: '서연 (101)' }}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      {
        value: 'jack',
        label: '지훈 (100)',
      },
      {
        value: 'lucy',
        label: '서연 (101)',
      },
    ]}
  />
);

export default App;