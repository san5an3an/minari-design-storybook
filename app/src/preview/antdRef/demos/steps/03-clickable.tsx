// @ts-nocheck
import React, { useState } from 'react';
import { Divider, Steps } from 'antd';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const content = '내용이 들어가는 자리예요.';

  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: '1단계',
            content,
          },
          {
            title: '2단계',
            content,
          },
          {
            title: '3단계',
            content,
          },
        ]}
      />

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        orientation="vertical"
        items={[
          {
            title: '1단계',
            content,
          },
          {
            title: '2단계',
            content,
          },
          {
            title: '3단계',
            content,
          },
        ]}
      />
    </>
  );
};

export default App;