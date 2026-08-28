// @ts-nocheck
import React, { useState } from 'react';
import { Flex, Steps } from 'antd';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <Flex vertical gap="large">
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items={[
          {
            title: '1단계',
            subTitle: '00:00:05',
            status: 'finish',
            content: '내용이 들어가는 자리예요.',
          },
          {
            title: '2단계',
            subTitle: '00:01:02',
            status: 'process',
            content: '내용이 들어가는 자리예요.',
          },
          {
            title: '3단계',
            subTitle: '오래오래 기다리는 중',
            status: 'wait',
            content: '내용이 들어가는 자리예요.',
          },
        ]}
      />

      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        items={[
          {
            status: 'finish',
            title: '1단계',
          },
          {
            status: 'process',
            title: '2단계',
          },
          {
            status: 'wait',
            title: '3단계',
          },
          {
            status: 'wait',
            title: '4단계',
          },
        ]}
      />

      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items={[
          {
            status: 'finish',
            title: '끝난 1',
          },
          {
            status: 'finish',
            title: '끝난 2',
          },
          {
            status: 'process',
            title: '지금 하는 일',
          },
          {
            status: 'wait',
            title: 'wait',
            disabled: true,
          },
        ]}
      />
    </Flex>
  );
};

export default App;