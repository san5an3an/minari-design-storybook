// @ts-nocheck
import React from 'react';
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`고른 값 ${value}`);
};

const App: React.FC = () => (
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      {
        label: <span>매니저</span>,
        title: '매니저',
        options: [
          { label: <span>지훈</span>, value: '지훈' },
          { label: <span>서연</span>, value: '서연' },
        ],
      },
      {
        label: <span>엔지니어</span>,
        title: '엔지니어',
        options: [
          { label: <span>하윤</span>, value: '하윤' },
          { label: <span>도윤</span>, value: '도윤' },
        ],
      },
    ]}
  />
);

export default App;