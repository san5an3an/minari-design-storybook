// @ts-nocheck
import React from 'react';
import { AutoComplete } from 'antd';

const options = [
  { value: '번스베이로' },
  { value: '다우닝가' },
  { value: '월가' },
];

const App: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="`b` 를 쳐 보세요"
    showSearch={{
      filterOption: (inputValue, option) =>
        option!.value.toUpperCase().includes(inputValue.toUpperCase()),
    }}
  />
);

export default App;