// @ts-nocheck
import React from 'react';
import { Select, Space } from 'antd';

const options = [
  {
    label: '기쁨',
    value: 'happy',
    emoji: '😄',
    desc: '기분 좋음',
  },
  {
    label: '슬픔',
    value: 'sad',
    emoji: '😢',
    desc: '울적함',
  },
  {
    label: '화남',
    value: 'angry',
    emoji: '😡',
    desc: '분노',
  },
  {
    label: '멋짐',
    value: '멋짐',
    emoji: '😎',
    desc: '여유',
  },
  {
    label: '졸림',
    value: 'sleepy',
    emoji: '😴',
    desc: '잠이 필요해',
  },
];

const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="지금 기분을 골라 주세요."
    defaultValue={['happy']}
    onChange={(value) => {
      console.log(`고른 값 ${value}`);
    }}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {`${option.data.label} (${option.data.desc})`}
      </Space>
    )}
  />
);

export default App;