import React from 'react';
import { Select } from 'antd';

const App: React.FC = () => (
  <Select
    placeholder="항목을 골라 주세요"
    showSearch={{
      optionFilterProp: ['label', 'otherField'],
    }}
    options={[
      { value: 'a11', label: 'a11', otherField: 'c11' },
      { value: 'b22', label: 'b22', otherField: 'b11' },
      { value: 'c33', label: 'c33', otherField: 'b33' },
      { value: 'd44', label: 'd44', otherField: 'd44' },
    ]}
  />
);

export default App;