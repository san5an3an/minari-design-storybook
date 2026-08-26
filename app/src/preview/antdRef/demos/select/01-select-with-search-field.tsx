import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
  console.log(`고른 값 ${value}`);
};

const onSearch = (value: string) => {
  console.log('찾기:', value);
};

const App: React.FC = () => (
  <Select
    showSearch={{ optionFilterProp: 'label', onSearch }}
    placeholder="사람을 골라 주세요"
    onChange={onChange}
    options={[
      {
        value: 'jack',
        label: '지훈',
      },
      {
        value: 'lucy',
        label: '서연',
      },
      {
        value: 'tom',
        label: '태현',
      },
    ]}
  />
);

export default App;