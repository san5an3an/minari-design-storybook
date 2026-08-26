import React from 'react';
import { DownOutlined } from '../_icons';
import { Select } from 'antd';

const MAX_COUNT = 3;

const App: React.FC = () => {
  const [value, setValue] = React.useState<string[]>(['김서아']);

  const suffix = (
    <>
      <span>
        {value.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );

  return (
    <Select
      mode="multiple"
      maxCount={MAX_COUNT}
      value={value}
      style={{ width: '100%' }}
      onChange={setValue}
      suffixIcon={suffix}
      placeholder="골라 주세요"
      options={[
        { value: '김서아', label: '김서아' },
        { value: '최시우', label: '최시우' },
        { value: '한서연', label: '한서연' },
        { value: '강지호', label: '강지호' },
        { value: '윤수아', label: '윤수아' },
        { value: '오시윤', label: '오시윤' },
        { value: '윤채원', label: '윤채원' },
        { value: '박도윤', label: '박도윤' },
        { value: '정하윤', label: '정하윤' },
      ]}
    />
  );
};

export default App;