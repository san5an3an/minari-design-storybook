import React, { useState } from 'react';
import { Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const sharedProps: StepsProps = {
    type: 'panel',
    current,
    onChange,
    items: [
      {
        title: '1단계',
        subTitle: '00:00',
        content: '내용이 들어가는 자리예요.',
      },
      {
        title: '2단계',
        content: '내용이 들어가는 자리예요.',
        status: 'error',
      },
      {
        title: '3단계',
        content: '내용이 들어가는 자리예요.',
      },
    ],
  };

  return (
    <Flex vertical gap="medium">
      <Steps {...sharedProps} />
      <Steps {...sharedProps} size="small" variant="outlined" />
    </Flex>
  );
};

export default App;