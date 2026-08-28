// @ts-nocheck
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Timeline } from 'antd';

const App: React.FC = () => {
  const [mode, setMode] = useState<'start' | 'alternate' | 'end'>('start');

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="start">시작하기</Radio>
        <Radio value="end">끝</Radio>
        <Radio value="alternate">번갈아</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            title: '2015-09-01',
            content: '서비스 만들기',
          },
          {
            title: '2015-09-01 09:12:11',
            content: '초기 네트워크 문제 해결',
          },
          {
            content: '기술 테스트',
          },
          {
            title: '2015-09-01 09:12:11',
            content: '네트워크 문제 해결 중',
          },
        ]}
      />
    </>
  );
};

export default App;