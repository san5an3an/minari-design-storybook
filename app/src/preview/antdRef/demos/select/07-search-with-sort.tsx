import React from 'react';
import { Select } from 'antd';

const App: React.FC = () => (
  <Select
    showSearch={{
      optionFilterProp: 'label',
      filterSort: (optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
    }}
    style={{ width: 200 }}
    placeholder="쳐서 좁혀 고르기"
    options={[
      {
        value: '1',
        label: '확인 안 됨',
      },
      {
        value: '2',
        label: '닫힘',
      },
      {
        value: '3',
        label: '전달함',
      },
      {
        value: '4',
        label: '확인됨',
      },
      {
        value: '5',
        label: '해결됨',
      },
      {
        value: '6',
        label: '취소됨',
      },
    ]}
  />
);

export default App;