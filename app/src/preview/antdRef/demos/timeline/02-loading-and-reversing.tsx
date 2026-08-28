// @ts-nocheck
import React, { useState } from 'react';
import { Button, Flex, Timeline } from 'antd';

const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <Flex vertical gap="medium" align="flex-start">
      <Timeline
        reverse={reverse}
        items={[
          {
            content: '서비스 사이트 만들기 2015-09-01',
          },
          {
            content: '초기 네트워크 문제 해결 2015-09-01',
          },
          {
            content: '기술 테스트 2015-09-01',
          },
          {
            loading: true,
            content: '녹음 중…',
          },
        ]}
      />
      <Button type="primary" onClick={handleClick}>
        뒤집기
      </Button>
    </Flex>
  );
};

export default App;